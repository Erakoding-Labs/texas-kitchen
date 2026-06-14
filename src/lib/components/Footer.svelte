<script lang="ts">
	import { nav, site } from '$lib/config/site';
	import { Wheat, MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-svelte';
	import Stars from './ui/Stars.svelte';

	const year = 2026;
</script>

<footer class="relative overflow-hidden bg-espresso text-cream/80">
	<div class="bg-grain absolute inset-0 opacity-40"></div>
	<div class="container-wide relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
		<!-- Brand -->
		<div class="flex flex-col gap-4">
			<a href="/" class="flex items-center gap-2.5 text-cream" aria-label="{site.name} home">
				<span class="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-espresso">
					<Wheat size={20} aria-hidden="true" />
				</span>
				<span class="flex flex-col leading-none">
					<span class="font-display text-lg font-bold">Texas Scratch</span>
					<span class="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">Kitchen</span>
				</span>
			</a>
			<p class="text-sm leading-relaxed text-cream/70">
				An artisan bakery & market in the heart of Menard, Texas. Everything baked from scratch, every single morning.
			</p>
			<div class="flex items-center gap-3">
				<Stars rating={5} size={15} />
				<span class="text-sm text-cream/70">{site.rating}/5 · {site.reviewCount} reviews</span>
			</div>
		</div>

		<!-- Explore -->
		<div class="flex flex-col gap-4">
			<h3 class="font-display text-base text-cream">Explore</h3>
			<ul class="flex flex-col gap-2.5 text-sm">
				{#each nav as item (item.href)}
					<li>
						<a href={item.href} class="link-underline text-cream/70 transition-colors hover:text-gold">
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Visit -->
		<div class="flex flex-col gap-4">
			<h3 class="font-display text-base text-cream">Visit Us</h3>
			<ul class="flex flex-col gap-3 text-sm text-cream/70">
				<li class="flex items-start gap-3">
					<MapPin size={17} class="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
					<a href={site.mapsUrl} target="_blank" rel="noopener" class="hover:text-gold">
						{site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
					</a>
				</li>
				<li class="flex items-center gap-3">
					<Phone size={17} class="shrink-0 text-gold" aria-hidden="true" />
					<a href={site.phoneHref} class="hover:text-gold">{site.phone}</a>
				</li>
				<li class="flex items-center gap-3">
					<Mail size={17} class="shrink-0 text-gold" aria-hidden="true" />
					<a href={`mailto:${site.email}`} class="hover:text-gold">{site.email}</a>
				</li>
			</ul>
		</div>

		<!-- Hours -->
		<div class="flex flex-col gap-4">
			<h3 class="flex items-center gap-2 font-display text-base text-cream">
				<Clock size={16} class="text-gold" aria-hidden="true" /> Hours
			</h3>
			<ul class="flex flex-col gap-1.5 text-sm text-cream/70">
				{#each site.hours as h (h.day)}
					<li class="flex items-center justify-between gap-4">
						<span>{h.day.slice(0, 3)}</span>
						<span class={h.open === 'Closed' ? 'text-cream/40' : ''}>
							{h.open === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="relative border-t border-cream/10">
		<div class="container-wide flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
			<p class="text-xs text-cream/50">
				© {year} {site.name}. Handcrafted in Menard, Texas.
			</p>
			<div class="flex items-center gap-3">
				<a href={site.social.instagram} target="_blank" rel="noopener" aria-label="Instagram" class="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream/70 transition-colors hover:bg-gold hover:text-espresso">
					<Instagram size={17} />
				</a>
				<a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" class="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream/70 transition-colors hover:bg-gold hover:text-espresso">
					<Facebook size={17} />
				</a>
			</div>
		</div>
	</div>
</footer>
