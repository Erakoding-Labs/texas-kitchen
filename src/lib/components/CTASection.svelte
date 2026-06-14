<script lang="ts">
	import { site } from '$lib/config/site';
	import { inview } from '$lib/actions/inview';
	import { parallax } from '$lib/actions/parallax';
	import Button from './ui/Button.svelte';
	import { MapPin, Phone } from 'lucide-svelte';
</script>

<section class="relative overflow-hidden">
	<div class="absolute inset-0 -z-10">
		<img
			src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1600&q=80"
			alt=""
			aria-hidden="true"
			class="h-[120%] w-full object-cover"
			use:parallax={{ speed: 0.12 }}
			loading="lazy"
		/>
		<div class="absolute inset-0 bg-espresso/85"></div>
	</div>
	<div class="container-wide reveal flex flex-col items-center gap-6 py-24 text-center md:py-32" use:inview>
		<span class="eyebrow text-gold-100">
			<span class="h-px w-6 bg-gold"></span> Stop By Today <span class="h-px w-6 bg-gold"></span>
		</span>
		<h2 class="max-w-2xl text-balance text-4xl text-cream md:text-5xl">
			Your table at the bakery is waiting
		</h2>
		<p class="max-w-xl text-balance text-lg text-cream/80">
			Pull up a chair, order a warm cinnamon roll, and stay a while. We can't wait to welcome you to Menard's favorite gathering spot.
		</p>
		<div class="mt-2 flex flex-col gap-3 sm:flex-row">
			<Button href={site.mapsUrl} variant="secondary" size="lg">
				<MapPin size={18} aria-hidden="true" /> Get Directions
			</Button>
			<Button href={site.phoneHref} variant="outline" size="lg" class="border-cream/40 text-cream hover:bg-cream hover:text-espresso">
				<Phone size={18} aria-hidden="true" /> Call {site.phone}
			</Button>
		</div>
	</div>
</section>
