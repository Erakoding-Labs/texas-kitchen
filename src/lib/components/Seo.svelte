<script lang="ts">
	import { site } from '$lib/config/site';
	import { page } from '$app/stores';

	interface Props {
		title?: string;
		description?: string;
		image?: string;
		type?: 'website' | 'article';
		/** JSON-LD structured data object(s) to inject. */
		schema?: Record<string, unknown> | Record<string, unknown>[];
		noindex?: boolean;
	}

	let {
		title,
		description = site.description,
		image = site.ogImage,
		type = 'website',
		schema,
		noindex = false
	}: Props = $props();

	const fullTitle = $derived(title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`);
	const canonical = $derived(`${site.url}${$page.url.pathname === '/' ? '' : $page.url.pathname}`);
	const schemaJson = $derived(schema ? JSON.stringify(schema) : null);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{:else}
		<meta name="robots" content="index, follow, max-image-preview:large" />
	{/if}

	<!-- Open Graph -->
	<meta property="og:site_name" content={site.name} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:url" content={canonical} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{#if schemaJson}
		{@html `<script type="application/ld+json">${schemaJson}<\/script>`}
	{/if}
</svelte:head>
