<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { localBusinessSchema, websiteSchema } from '$lib/config/schema';

	let { children } = $props();
	const globalSchema = [localBusinessSchema, websiteSchema];
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(globalSchema)}<\/script>`}
</svelte:head>

<a
	href="#main"
	class="sr-only z-[100] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-full focus:bg-espresso focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
>
	Skip to content
</a>

<Navbar />

<main id="main" class="min-h-screen">
	{@render children()}
</main>

<Footer />
