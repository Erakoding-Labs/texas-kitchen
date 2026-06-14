import type { Action } from 'svelte/action';

interface InviewParams {
	/** Stagger delay in ms applied as inline transition-delay. */
	delay?: number;
	/** Re-trigger every time the element enters the viewport. */
	once?: boolean;
	threshold?: number;
}

/**
 * Scroll-triggered reveal. Pairs with the `.reveal` class in app.css —
 * toggles `.is-visible` when the element scrolls into view.
 *
 * Usage: <div class="reveal" use:inview={{ delay: 120 }}>…</div>
 */
export const inview: Action<HTMLElement, InviewParams | undefined> = (node, params) => {
	const opts = { once: true, threshold: 0.15, delay: 0, ...params };

	if (opts.delay) {
		node.style.transitionDelay = `${opts.delay}ms`;
	}

	// Respect reduced-motion: show immediately, skip observation.
	if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.classList.add('is-visible');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					if (opts.once) observer.unobserve(node);
				} else if (!opts.once) {
					node.classList.remove('is-visible');
				}
			}
		},
		{ threshold: opts.threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
