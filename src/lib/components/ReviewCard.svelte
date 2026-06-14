<script lang="ts">
	import Stars from './ui/Stars.svelte';
	import { inview } from '$lib/actions/inview';
	import { Quote } from 'lucide-svelte';
	import type { Review } from '$lib/data/reviews';

	interface Props extends Review {
		delay?: number;
	}

	let { quote, author, location, rating, source, delay = 0 }: Props = $props();
</script>

<figure
	class="reveal flex h-full flex-col gap-5 rounded-2xl bg-cream-50 p-7 shadow-soft ring-1 ring-sand-200/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
	use:inview={{ delay }}
>
	<Quote size={28} class="text-gold/40" aria-hidden="true" />
	<blockquote class="flex-1 font-serif text-lg leading-relaxed text-espresso-100">
		"{quote}"
	</blockquote>
	<figcaption class="flex items-center justify-between gap-3 border-t border-sand-200 pt-5">
		<div>
			<p class="font-display text-base text-espresso">{author}</p>
			<p class="text-xs text-muted-foreground">{location} · {source}</p>
		</div>
		<Stars {rating} size={15} />
	</figcaption>
</figure>
