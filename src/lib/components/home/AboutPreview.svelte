<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { inview } from '$lib/actions/inview';
	import { parallax } from '$lib/actions/parallax';
	import { highlights } from '$lib/data/featured';
	import { ArrowRight } from 'lucide-svelte';
</script>

<section class="overflow-hidden bg-sand-100 py-24 md:py-32">
	<div class="container-wide grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
		<!-- Imagery -->
		<div class="reveal relative" use:inview>
			<div class="relative overflow-hidden rounded-2xl shadow-lift">
				<img
					src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
					alt="A baker shaping dough by hand on a flour-dusted counter"
					loading="lazy"
					class="aspect-[4/5] w-full object-cover"
				/>
			</div>
			<div class="absolute -bottom-6 -right-4 hidden w-48 overflow-hidden rounded-2xl shadow-lift ring-4 ring-sand-100 sm:block">
				<img
					src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=500&q=80"
					alt="Golden loaves cooling on a wire rack"
					loading="lazy"
					class="aspect-square w-full object-cover"
				/>
			</div>
			<div class="absolute -left-4 -top-6 hidden rounded-2xl bg-espresso px-6 py-4 text-cream shadow-lift md:block">
				<p class="font-display text-3xl text-gold">Est.</p>
				<p class="text-xs uppercase tracking-widest text-cream/70">Made in Menard</p>
			</div>
		</div>

		<!-- Copy -->
		<div class="reveal flex flex-col gap-6" use:inview={{ delay: 120 }}>
			<span class="eyebrow"><span class="h-px w-6 bg-clay-200"></span> Our Story</span>
			<h2 class="text-balance text-4xl leading-tight text-espresso md:text-5xl">
				A small-town bakery with a big love for the craft
			</h2>
			<p class="text-lg leading-relaxed text-muted-foreground">
				Texas Scratch Kitchen began with a simple belief: that a town this special deserves bread
				this good. We mill, mix, proof, and bake everything by hand — no shortcuts, no mixes, nothing
				frozen. Just real ingredients and the slow, honest work of scratch baking.
			</p>
			<p class="leading-relaxed text-muted-foreground">
				Today our counter is where neighbors meet, travelers pause, and the smell of fresh sourdough
				draws the whole of Menard through the door.
			</p>

			<dl class="mt-2 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
				{#each highlights as h (h.label)}
					<div class="flex flex-col gap-1 border-l-2 border-clay-200 pl-4">
						<dt class="font-display text-2xl text-clay-300">{h.value}</dt>
						<dd class="text-xs leading-snug text-muted-foreground">{h.label}</dd>
					</div>
				{/each}
			</dl>

			<div class="mt-3">
				<Button href="/about" size="lg">
					Read Our Story <ArrowRight size={18} aria-hidden="true" />
				</Button>
			</div>
		</div>
	</div>
</section>
