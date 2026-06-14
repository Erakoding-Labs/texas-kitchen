<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import ProductCard from '$lib/components/ui/ProductCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { featured } from '$lib/data/featured';
	import { ArrowRight } from 'lucide-svelte';
</script>

<section class="bg-grain bg-cream py-24 md:py-32">
	<div class="container-wide">
		<SectionHeading
			eyebrow="From Our Ovens"
			title="The things people drive in for"
			description="A rotating case of handcrafted favorites — pulled warm from the oven and gone by afternoon."
		/>

		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each featured as product, i (product.name)}
				<ProductCard
					name={product.name}
					description={product.tagline}
					price={product.price}
					image={product.image}
					badge={product.badge}
					delay={i * 90}
				/>
			{/each}
		</div>

		<div class="mt-12 flex justify-center">
			<Button href="/menu" variant="outline" size="lg">
				Explore the Full Menu <ArrowRight size={18} aria-hidden="true" />
			</Button>
		</div>
	</div>
</section>
