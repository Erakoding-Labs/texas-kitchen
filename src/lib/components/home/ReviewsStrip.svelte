<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import ReviewCard from '$lib/components/ReviewCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Stars from '$lib/components/ui/Stars.svelte';
	import { reviews } from '$lib/data/reviews';
	import { site } from '$lib/config/site';
	import { ArrowRight } from 'lucide-svelte';

	const highlighted = reviews.filter((r) => r.highlight);
</script>

<section class="bg-espresso py-24 md:py-32">
	<div class="container-wide">
		<SectionHeading
			eyebrow="Loved by the Community"
			title="Don't just take our word for it"
			light
		>
			<div class="mt-2 flex items-center gap-3">
				<Stars rating={5} size={20} />
				<span class="text-cream/80">
					<strong class="text-cream">{site.rating}/5</strong> from {site.reviewCount} reviews
				</span>
			</div>
		</SectionHeading>

		<div class="mt-14 grid gap-6 md:grid-cols-3">
			{#each highlighted as review, i (review.author)}
				<ReviewCard {...review} delay={i * 100} />
			{/each}
		</div>

		<div class="mt-12 flex justify-center">
			<Button href="/reviews" variant="secondary" size="lg">
				Read All Reviews <ArrowRight size={18} aria-hidden="true" />
			</Button>
		</div>
	</div>
</section>
