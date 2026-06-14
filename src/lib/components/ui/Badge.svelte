<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props {
		variant?: 'gold' | 'cream' | 'espresso';
		class?: string;
		children: Snippet;
	}

	let { variant = 'gold', class: className = '', children }: Props = $props();

	const variants = {
		gold: 'bg-gold/15 text-gold-300 ring-1 ring-gold/30',
		cream: 'bg-cream/90 text-espresso ring-1 ring-sand-200',
		espresso: 'bg-espresso text-cream'
	};
</script>

<span
	class={cn(
		'inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider',
		variants[variant],
		className
	)}
>
	{@render children()}
</span>
