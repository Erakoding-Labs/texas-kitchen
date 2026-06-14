<script lang="ts">
	import { site } from '$lib/config/site';
	import { inview } from '$lib/actions/inview';
	import Button from '$lib/components/ui/Button.svelte';
	import { MapPin, Phone, Clock, Utensils, ShoppingBag } from 'lucide-svelte';

	const services = [
		{ icon: Utensils, label: 'Dine-in', available: site.service.dineIn },
		{ icon: ShoppingBag, label: 'Takeout', available: site.service.takeout }
	];
</script>

<section class="bg-cream py-24 md:py-32">
	<div class="container-wide grid gap-12 lg:grid-cols-2 lg:gap-16">
		<!-- Details -->
		<div class="reveal flex flex-col gap-7" use:inview>
			<div class="flex flex-col gap-4">
				<span class="eyebrow"><span class="h-px w-6 bg-clay-200"></span> Find Us</span>
				<h2 class="text-balance text-4xl leading-tight text-espresso md:text-5xl">
					Right in downtown Menard
				</h2>
				<p class="text-lg leading-relaxed text-muted-foreground">
					Pull up on Ellis Street and follow the smell of fresh bread. There's always a warm welcome
					and a fuller-than-it-should-be pastry case waiting.
				</p>
			</div>

			<ul class="flex flex-col gap-5">
				<li class="flex items-start gap-4">
					<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand-100 text-clay-300">
						<MapPin size={20} aria-hidden="true" />
					</span>
					<div>
						<p class="font-display text-base text-espresso">Address</p>
						<a href={site.mapsUrl} target="_blank" rel="noopener" class="text-muted-foreground hover:text-clay-300">
							{site.fullAddress}
						</a>
					</div>
				</li>
				<li class="flex items-start gap-4">
					<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand-100 text-clay-300">
						<Phone size={20} aria-hidden="true" />
					</span>
					<div>
						<p class="font-display text-base text-espresso">Phone</p>
						<a href={site.phoneHref} class="text-muted-foreground hover:text-clay-300">{site.phone}</a>
					</div>
				</li>
				<li class="flex items-start gap-4">
					<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand-100 text-clay-300">
						<Clock size={20} aria-hidden="true" />
					</span>
					<div class="w-full">
						<p class="font-display text-base text-espresso">Hours</p>
						<ul class="mt-1 grid max-w-sm gap-1 text-sm text-muted-foreground">
							{#each site.hours as h (h.day)}
								<li class="flex items-center justify-between gap-4">
									<span>{h.day}</span>
									<span class={h.open === 'Closed' ? 'text-clay-200' : ''}>
										{h.open === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}
									</span>
								</li>
							{/each}
						</ul>
					</div>
				</li>
			</ul>

			<div class="flex flex-wrap items-center gap-3">
				{#each services as s (s.label)}
					<span class="inline-flex items-center gap-2 rounded-full bg-sand-100 px-4 py-2 text-sm font-medium text-espresso">
						<s.icon size={16} class="text-clay-300" aria-hidden="true" /> {s.label}
					</span>
				{/each}
				<span class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground line-through">
					No Delivery
				</span>
			</div>

			<div>
				<Button href={site.mapsUrl} size="lg">
					<MapPin size={18} aria-hidden="true" /> Get Directions
				</Button>
			</div>
		</div>

		<!-- Map -->
		<div class="reveal min-h-[420px] overflow-hidden rounded-2xl shadow-lift ring-1 ring-sand-200 lg:min-h-full" use:inview={{ delay: 120 }}>
			<iframe
				title="Map showing {site.name} at {site.fullAddress}"
				src={site.mapsEmbed}
				class="h-full min-h-[420px] w-full"
				style="border:0; filter: sepia(8%) saturate(115%);"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				allowfullscreen
			></iframe>
		</div>
	</div>
</section>
