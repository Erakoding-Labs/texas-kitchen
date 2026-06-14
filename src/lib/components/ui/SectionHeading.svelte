<script lang="ts">
	import type { Snippet } from 'svelte';
	import { inview } from '$lib/actions/inview';
	import { cn } from '$lib/utils';

	interface Props {
		eyebrow?: string;
		title: string;
		description?: string;
		align?: 'left' | 'center';
		light?: boolean;
		class?: string;
		children?: Snippet;
	}

	let {
		eyebrow,
		title,
		description,
		align = 'center',
		light = false,
		class: className = '',
		children
	}: Props = $props();
</script>

<div
	class={cn(
		'reveal flex max-w-2xl flex-col gap-4',
		align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
		className
	)}
	use:inview
>
	{#if eyebrow}
		<span class="eyebrow">
			<span class="h-px w-6 bg-clay-200"></span>
			{eyebrow}
		</span>
	{/if}
	<h2 class={cn('text-balance text-4xl leading-tight md:text-5xl', light ? 'text-cream' : 'text-espresso')}>
		{title}
	</h2>
	{#if description}
		<p class={cn('text-balance text-lg leading-relaxed', light ? 'text-cream/80' : 'text-muted-foreground')}>
			{description}
		</p>
	{/if}
	{#if children}
		{@render children()}
	{/if}
</div>
