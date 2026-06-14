<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ReviewCard from '$lib/components/ReviewCard.svelte';
	import Stars from '$lib/components/ui/Stars.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { inview } from '$lib/actions/inview';
	import { reviews, reviewStats } from '$lib/data/reviews';
	import { site } from '$lib/config/site';
	import { breadcrumbSchema } from '$lib/config/schema';
	import { MapPin, Star } from 'lucide-svelte';

	// AggregateRating + sample reviews for rich snippets.
	const reviewSchema = {
		'@context': 'https://schema.org',
		'@type': 'Bakery',
		name: site.name,
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: site.rating,
			reviewCount: site.reviewCount,
			bestRating: 5
		},
		review: reviews.slice(0, 5).map((r) => ({
			'@type': 'Review',
			reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
			author: { '@type': 'Person', name: r.author },
			reviewBody: r.quote
		}))
	};
</script>

<Seo
	title="Reviews"
	description="See why Texas Scratch Kitchen is rated 4.9/5 across 112 reviews. Read what locals and travelers say about Menard's favorite scratch bakery & market."
	schema={[reviewSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Reviews', path: '/reviews' }])]}
/>

<PageHero
	eyebrow="Kind Words"
	title="Loved by locals & travelers alike"
	subtitle="112 reviews and counting — here's what people say after their first warm bite."
	image="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80"
/>

<!-- Rating summary -->
<section class="bg-cream py-20">
	<div class="container-wide">
		<div class="reveal mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl bg-espresso px-8 py-12 text-center text-cream shadow-lift" use:inview>
			<div class="flex items-end gap-3">
				<span class="font-display text-7xl leading-none text-gold">{site.rating}</span>
				<span class="mb-2 text-2xl text-cream/60">/ 5</span>
			</div>
			<Stars rating={5} size={26} />
			<p class="text-cream/80">
				Based on <strong class="text-cream">{site.reviewCount} verified reviews</strong> from Google
			</p>
		</div>

		<div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
			{#each reviewStats as stat, i (stat.label)}
				<div class="reveal flex flex-col items-center gap-1 rounded-2xl bg-sand-100 px-4 py-8 text-center" use:inview={{ delay: i * 90 }}>
					<span class="font-display text-4xl text-clay-300">{stat.value}<span class="text-2xl text-clay-200">{stat.suffix}</span></span>
					<span class="text-sm text-muted-foreground">{stat.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- All reviews -->
<section class="bg-grain bg-sand-100 py-20 md:py-28">
	<div class="container-wide">
		<div class="reveal mb-12 flex items-center justify-center gap-2 text-clay-300" use:inview>
			<Star size={18} class="fill-gold text-gold" aria-hidden="true" />
			<span class="eyebrow !tracking-[0.2em]">Real reviews from real guests</span>
		</div>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each reviews as review, i (review.author)}
				<ReviewCard {...review} delay={(i % 3) * 100} />
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-cream py-24 md:py-32">
	<div class="container-wide reveal flex flex-col items-center gap-6 text-center" use:inview>
		<h2 class="max-w-2xl text-balance text-4xl text-espresso md:text-5xl">
			Come write your own five-star morning
		</h2>
		<p class="max-w-xl text-lg text-muted-foreground">
			There's a warm cinnamon roll and a friendly face waiting for you on Ellis Street.
		</p>
		<div class="flex flex-col gap-3 sm:flex-row">
			<Button href={site.mapsUrl} size="lg"><MapPin size={18} aria-hidden="true" /> Visit Us Today</Button>
			<Button href="/menu" variant="outline" size="lg">Browse the Menu</Button>
		</div>
	</div>
</section>
