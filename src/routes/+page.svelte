<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Marquee from '$lib/components/home/Marquee.svelte';
	import Featured from '$lib/components/home/Featured.svelte';
	import AboutPreview from '$lib/components/home/AboutPreview.svelte';
	import ReviewsStrip from '$lib/components/home/ReviewsStrip.svelte';
	import Location from '$lib/components/home/Location.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
	import { localBusinessSchema } from '$lib/config/schema';
</script>

<Seo
	title="Artisan Bakery & Market in Menard, TX"
	description="Texas Scratch Kitchen — freshly baked, locally loved. Handcrafted sourdough, croissants, cinnamon rolls, pastries & pour-over coffee in Menard, Texas. Dine-in & takeout."
	schema={localBusinessSchema}
/>

<Hero />
<Marquee />
<Featured />
<AboutPreview />
<ReviewsStrip />
<Location />
<CTASection />
