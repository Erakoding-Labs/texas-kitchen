<script lang="ts" module>
	import type { Snippet } from 'svelte';
	export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
	export type ButtonSize = 'sm' | 'md' | 'lg';
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		variant?: ButtonVariant;
		size?: ButtonSize;
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		class?: string;
		disabled?: boolean;
		ariaLabel?: string;
		onclick?: (e: MouseEvent) => void;
		children: Snippet;
	}

	let {
		variant = 'primary',
		size = 'md',
		href,
		type = 'button',
		class: className = '',
		disabled = false,
		ariaLabel,
		onclick,
		children
	}: Props = $props();

	const base =
		'group relative inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50';

	const variants: Record<ButtonVariant, string> = {
		primary: 'bg-espresso text-cream shadow-soft hover:bg-espresso-300 hover:shadow-lift hover:-translate-y-0.5',
		secondary: 'bg-gold text-espresso shadow-soft hover:bg-gold-100 hover:-translate-y-0.5',
		outline: 'border border-clay-200 text-espresso hover:bg-espresso hover:text-cream hover:border-espresso',
		ghost: 'text-espresso hover:bg-sand-100'
	};

	const sizes: Record<ButtonSize, string> = {
		sm: 'h-9 px-4 text-sm',
		md: 'h-11 px-6 text-sm',
		lg: 'h-14 px-8 text-base'
	};

	const classes = $derived(cn(base, variants[variant], sizes[size], className));
</script>

{#if href}
	<a {href} class={classes} aria-label={ariaLabel} aria-disabled={disabled}>
		{@render children()}
	</a>
{:else}
	<button {type} class={classes} {disabled} aria-label={ariaLabel} {onclick}>
		{@render children()}
	</button>
{/if}
