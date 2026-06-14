<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/Button.svelte';
	import { Wheat, Home } from 'lucide-svelte';
</script>

<section class="flex min-h-[80vh] items-center justify-center bg-grain bg-cream px-6 pt-20">
	<div class="flex max-w-lg flex-col items-center gap-6 text-center">
		<span class="flex h-16 w-16 items-center justify-center rounded-full bg-espresso text-gold">
			<Wheat size={30} aria-hidden="true" />
		</span>
		<p class="font-display text-7xl text-clay-300">{$page.status}</p>
		<h1 class="text-balance text-3xl text-espresso md:text-4xl">
			{$page.status === 404 ? 'This page is still in the oven' : 'Something went wrong'}
		</h1>
		<p class="text-muted-foreground">
			{$page.status === 404
				? "We couldn't find that page — but there's always fresh bread back home."
				: $page.error?.message ?? 'Please try again in a moment.'}
		</p>
		<Button href="/" size="lg"><Home size={18} aria-hidden="true" /> Back to Home</Button>
	</div>
</section>
