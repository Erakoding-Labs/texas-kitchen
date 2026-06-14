import type { Action } from 'svelte/action';

interface ParallaxParams {
	/** Movement factor. Positive = moves slower than scroll (recedes). */
	speed?: number;
}

/**
 * Subtle parallax on scroll via transform translateY. Uses rAF + passive scroll.
 * Disabled under prefers-reduced-motion.
 */
export const parallax: Action<HTMLElement, ParallaxParams | undefined> = (node, params) => {
	let speed = params?.speed ?? 0.15;
	let frame = 0;

	if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	const update = () => {
		const rect = node.getBoundingClientRect();
		const viewportH = window.innerHeight;
		// progress: -1 (below) → 1 (above), 0 at center
		const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
		const offset = progress * speed * 100;
		node.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
	};

	const onScroll = () => {
		if (frame) return;
		frame = requestAnimationFrame(() => {
			update();
			frame = 0;
		});
	};

	update();
	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onScroll, { passive: true });

	return {
		update(next) {
			speed = next?.speed ?? 0.15;
			update();
		},
		destroy() {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (frame) cancelAnimationFrame(frame);
		}
	};
};
