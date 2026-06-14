<script lang="ts">
	import { Wheat } from 'lucide-svelte';

	const words = [
		'Sourdough',
		'Croissants',
		'Cinnamon Rolls',
		'Pour-Over Coffee',
		'Fresh Danish',
		'Local Market',
		'Seasonal Galettes',
		'Baked From Scratch'
	];
	// Duplicate for a seamless -50% loop.
	const loop = [...words, ...words];
</script>

<div class="overflow-hidden border-y border-sand-200 bg-espresso py-5" aria-hidden="true">
	<div class="flex w-max animate-marquee items-center gap-8">
		{#each loop as word, i (i)}
			<span class="flex items-center gap-8">
				<span class="font-display text-xl text-cream/90 md:text-2xl">{word}</span>
				<Wheat size={18} class="text-gold" />
			</span>
		{/each}
	</div>
</div>
