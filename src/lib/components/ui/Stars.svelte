<script lang="ts">
	import { Star } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	interface Props {
		rating?: number;
		size?: number;
		class?: string;
	}

	let { rating = 5, size = 16, class: className = '' }: Props = $props();
	const stars = [1, 2, 3, 4, 5];
</script>

<div class={cn('inline-flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`} role="img">
	{#each stars as s (s)}
		<Star
			{size}
			class={s <= Math.round(rating) ? 'fill-gold text-gold' : 'fill-sand-200 text-sand-200'}
			aria-hidden="true"
		/>
	{/each}
</div>
