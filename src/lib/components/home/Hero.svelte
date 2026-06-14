<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Stars from '$lib/components/ui/Stars.svelte';
	import { site } from '$lib/config/site';
	import { parallax } from '$lib/actions/parallax';
	import { ArrowRight, MapPin } from 'lucide-svelte';
</script>

<section class="relative flex min-h-[100svh] items-center overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 -z-10">
		<img
			src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=80"
			alt="An array of freshly baked artisan breads and pastries"
			class="h-[115%] w-full object-cover"
			fetchpriority="high"
			use:parallax={{ speed: 0.1 }}
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/65 to-espresso/30"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-espresso/30"></div>
	</div>

	<div class="container-wide relative pt-20">
		<div class="max-w-2xl">
			<div class="flex animate-fade-in items-center gap-3 opacity-0" style="animation-delay: 0.1s">
				<Stars rating={5} size={18} />
				<span class="text-sm font-medium text-cream/90">
					Rated {site.rating}/5 by {site.reviewCount} happy locals & travelers
				</span>
			</div>

			<h1
				class="mt-6 animate-fade-up text-balance text-5xl font-bold leading-[1.02] text-cream opacity-0 sm:text-6xl lg:text-7xl"
				style="animation-delay: 0.2s"
			>
				Freshly Baked.<br />
				<span class="text-gold-100">Locally Loved.</span>
			</h1>

			<p
				class="mt-6 max-w-xl animate-fade-up text-balance text-lg leading-relaxed text-cream/85 opacity-0 sm:text-xl"
				style="animation-delay: 0.35s"
			>
				A scratch bakery & market in the heart of Menard, Texas — where sourdough rises slow,
				croissants shatter just right, and every morning smells like home.
			</p>

			<div class="mt-9 flex animate-fade-up flex-col gap-3 opacity-0 sm:flex-row" style="animation-delay: 0.5s">
				<Button href="/menu" size="lg">
					View Menu <ArrowRight size={18} class="transition-transform group-hover:translate-x-1" aria-hidden="true" />
				</Button>
				<Button href="/contact" variant="outline" size="lg" class="border-cream/40 text-cream hover:bg-cream hover:text-espresso">
					<MapPin size={18} aria-hidden="true" /> Visit Us Today
				</Button>
			</div>
		</div>
	</div>

	<!-- Scroll cue -->
	<div class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/60 md:flex">
		<span class="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
		<span class="h-10 w-px animate-pulse bg-gradient-to-b from-cream/60 to-transparent"></span>
	</div>
</section>
