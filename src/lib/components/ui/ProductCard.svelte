<script lang="ts">
	import Badge from './Badge.svelte';
	import { inview } from '$lib/actions/inview';

	interface Props {
		name: string;
		description: string;
		price: string;
		image: string;
		badge?: string;
		popular?: boolean;
		delay?: number;
	}

	let { name, description, price, image, badge, popular = false, delay = 0 }: Props = $props();
</script>

<article
	class="reveal group relative flex flex-col overflow-hidden rounded-2xl bg-cream-50 shadow-soft ring-1 ring-sand-200/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
	use:inview={{ delay }}
>
	<div class="relative aspect-[4/3] overflow-hidden">
		<img
			src={image}
			alt={name}
			loading="lazy"
			decoding="async"
			class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
		{#if popular || badge}
			<div class="absolute left-4 top-4">
				<Badge variant="cream">{badge ?? 'Popular'}</Badge>
			</div>
		{/if}
	</div>
	<div class="flex flex-1 flex-col gap-2 p-6">
		<div class="flex items-baseline justify-between gap-3">
			<h3 class="font-display text-xl text-espresso">{name}</h3>
			<span class="whitespace-nowrap font-sans text-base font-semibold text-clay-300">{price}</span>
		</div>
		<p class="text-sm leading-relaxed text-muted-foreground">{description}</p>
	</div>
</article>
