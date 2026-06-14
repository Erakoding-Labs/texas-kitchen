<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ProductCard from '$lib/components/ui/ProductCard.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
	import { menu } from '$lib/data/menu';
	import { breadcrumbSchema } from '$lib/config/schema';
	import { site } from '$lib/config/site';

	let active = $state('all');

	const categories = [{ id: 'all', title: 'All' }, ...menu.map((c) => ({ id: c.id, title: c.title }))];
	const visible = $derived(active === 'all' ? menu : menu.filter((c) => c.id === active));

	function scrollToCat(id: string) {
		active = id;
		if (id !== 'all') {
			const el = document.getElementById(`cat-${id}`);
			el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	// Menu structured data for rich results.
	const menuSchema = {
		'@context': 'https://schema.org',
		'@type': 'Menu',
		name: `${site.name} Menu`,
		hasMenuSection: menu.map((c) => ({
			'@type': 'MenuSection',
			name: c.title,
			hasMenuItem: c.items.map((it) => ({
				'@type': 'MenuItem',
				name: it.name,
				description: it.description,
				offers: { '@type': 'Offer', price: it.price.replace('$', ''), priceCurrency: 'USD' }
			}))
		}))
	};
</script>

<Seo
	title="Menu"
	description="Explore the Texas Scratch Kitchen menu — sourdough, croissants, cinnamon rolls, danish, salads, coffee, and rotating seasonal specials, all baked from scratch in Menard, TX."
	schema={[menuSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Menu', path: '/menu' }])]}
/>

<PageHero
	eyebrow="The Menu"
	title="Everything made from scratch"
	subtitle="Pulled fresh from the oven every morning. Prices and seasonal items rotate with what's good right now."
	image="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=2000&q=80"
/>

<!-- Sticky category filter -->
<div class="sticky top-20 z-30 border-b border-sand-200 bg-cream/90 backdrop-blur-md">
	<div class="container-wide flex gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
		{#each categories as cat (cat.id)}
			<button
				class="shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 {active === cat.id
					? 'bg-espresso text-cream shadow-soft'
					: 'bg-sand-100 text-espresso hover:bg-sand-200'}"
				onclick={() => scrollToCat(cat.id)}
				aria-pressed={active === cat.id}
			>
				{cat.title}
			</button>
		{/each}
	</div>
</div>

<div class="bg-grain bg-cream pb-12 pt-16 md:pt-20">
	{#each visible as category (category.id)}
		<section id="cat-{category.id}" class="container-wide scroll-mt-40 py-12">
			<div class="mb-10 flex flex-col gap-2 border-b border-sand-200 pb-6 md:flex-row md:items-end md:justify-between">
				<div>
					<h2 class="font-display text-3xl text-espresso md:text-4xl">{category.title}</h2>
					<p class="mt-1 max-w-xl text-muted-foreground">{category.blurb}</p>
				</div>
				<span class="text-sm font-medium text-clay-300">{category.items.length} items</span>
			</div>
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each category.items as item, i (item.name)}
					<ProductCard {...item} delay={(i % 4) * 80} />
				{/each}
			</div>
		</section>
	{/each}
</div>

<CTASection />
