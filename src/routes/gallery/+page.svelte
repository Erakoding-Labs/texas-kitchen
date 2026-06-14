<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
	import { inview } from '$lib/actions/inview';
	import { gallery, galleryCategories } from '$lib/data/gallery';
	import { breadcrumbSchema } from '$lib/config/schema';

	let active = $state<(typeof galleryCategories)[number]>('All');
	const visible = $derived(active === 'All' ? gallery : gallery.filter((g) => g.category === active));
</script>

<Seo
	title="Gallery"
	description="Step inside Texas Scratch Kitchen — a gallery of our artisan pastries, fresh bread, coffee, local market goods, and warm Menard bakery atmosphere."
	schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }])}
/>

<PageHero
	eyebrow="Gallery"
	title="A feast for the eyes, first"
	subtitle="Pastries, bread, coffee, and the warm corners of our Menard bakery."
	image="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=2000&q=80"
/>

<section class="bg-grain bg-cream py-16 md:py-24">
	<div class="container-wide">
		<!-- Filter -->
		<div class="mb-12 flex flex-wrap justify-center gap-2">
			{#each galleryCategories as cat (cat)}
				<button
					class="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 {active === cat
						? 'bg-espresso text-cream shadow-soft'
						: 'bg-sand-100 text-espresso hover:bg-sand-200'}"
					onclick={() => (active = cat)}
					aria-pressed={active === cat}
				>
					{cat}
				</button>
			{/each}
		</div>

		<!-- Masonry via CSS columns -->
		{#key active}
			<div class="columns-1 gap-5 sm:columns-2 lg:columns-3">
				{#each visible as image, i (image.src)}
					<figure
						class="reveal group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-soft"
						use:inview={{ delay: (i % 6) * 70 }}
					>
						<img
							src={image.src}
							alt={image.alt}
							loading="lazy"
							decoding="async"
							class="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 {image.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}"
						/>
						<figcaption class="absolute inset-0 flex items-end bg-gradient-to-t from-espresso/70 via-transparent to-transparent p-5 text-sm font-medium text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
							<span>
								<span class="mb-1 block text-[0.65rem] font-semibold uppercase tracking-widest text-gold-100">{image.category}</span>
								{image.alt}
							</span>
						</figcaption>
					</figure>
				{/each}
			</div>
		{/key}
	</div>
</section>

<CTASection />
