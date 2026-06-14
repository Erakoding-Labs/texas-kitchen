<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
	import { inview } from '$lib/actions/inview';
	import { breadcrumbSchema } from '$lib/config/schema';
	import { Wheat, Heart, Sprout, Sun, Clock, Hand } from 'lucide-svelte';

	const values = [
		{
			icon: Sprout,
			title: 'Real Ingredients',
			body: 'Stone-milled flour, cultured butter, local eggs, and Texas-grown produce. If we cannot pronounce it, it does not go in the dough.'
		},
		{
			icon: Hand,
			title: 'Made By Hand',
			body: 'Every loaf is shaped, scored, and baked by hand. No mixes, no freezers, no shortcuts — just the honest craft of scratch baking.'
		},
		{
			icon: Heart,
			title: 'For The Community',
			body: 'We are a gathering place first. A spot for neighbors to meet, travelers to rest, and Menard to feel a little more like home.'
		}
	];

	const steps = [
		{ icon: Sprout, title: 'Mill & Mix', body: 'We start before sunrise, mixing flour, water, and wild starter into living dough.' },
		{ icon: Clock, title: 'Slow Ferment', body: 'Our sourdough proofs for up to 24 hours, developing deep flavor and an open crumb.' },
		{ icon: Hand, title: 'Shape By Hand', body: 'Each loaf and pastry is shaped individually — laminated, folded, and scored with care.' },
		{ icon: Sun, title: 'Bake Fresh', body: 'Into the stone deck oven at dawn, so the case is full and warm when the doors open.' }
	];

	const team = [
		{ name: 'The Head Baker', role: 'Sourdough & Breads', image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80' },
		{ name: 'The Pastry Chef', role: 'Croissants & Danish', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80' },
		{ name: 'The Barista', role: 'Coffee & Hospitality', image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80' },
		{ name: 'The Market Lead', role: 'Local Goods', image: 'https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&w=600&q=80' }
	];
</script>

<Seo
	title="Our Story"
	description="The story of Texas Scratch Kitchen — an artisan bakery in Menard, TX built on real ingredients, slow fermentation, and a deep love for community."
	schema={breadcrumbSchema([
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' }
	])}
/>

<PageHero
	eyebrow="Our Story"
	title="Baked from scratch, rooted in Menard"
	subtitle="What started as a love letter to good bread became the heart of a small Texas town."
	image="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=2000&q=80"
/>

<!-- Story -->
<section class="bg-grain bg-cream py-24 md:py-32">
	<div class="container-wide grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
		<div class="reveal order-2 flex flex-col gap-6 lg:order-1" use:inview>
			<span class="eyebrow"><span class="h-px w-6 bg-clay-200"></span> How It Began</span>
			<h2 class="text-balance text-4xl leading-tight text-espresso md:text-5xl">
				A town this special deserves bread this good
			</h2>
			<p class="text-lg leading-relaxed text-muted-foreground">
				Texas Scratch Kitchen was born from a simple frustration: you shouldn't have to drive an hour
				to find a real croissant. So we built a bakery where everything — from the sourdough starter
				to the cinnamon swirl — is made by hand, in-house, every single day.
			</p>
			<p class="leading-relaxed text-muted-foreground">
				We took over a storefront on Ellis Street, fired up a stone deck oven, and started baking
				before the sun came up. Word traveled fast. Today, locals plan their mornings around our
				fresh-out-of-the-oven schedule, and travelers passing through the Hill Country make a point to
				stop — many of them twice.
			</p>
			<p class="leading-relaxed text-muted-foreground">
				We're more than a bakery. We're a market stocked with local goods, a coffee bar with
				small-batch roasts, and a gathering table for the whole community. That's the Menard way.
			</p>
		</div>
		<div class="reveal order-1 lg:order-2" use:inview={{ delay: 120 }}>
			<div class="grid grid-cols-2 gap-4">
				<img src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=600&q=80" alt="A tray of golden croissants fresh from the oven" loading="lazy" class="aspect-[3/4] w-full rounded-2xl object-cover shadow-soft" />
				<img src="https://images.unsplash.com/photo-1620921568790-c1cf8984624c?auto=format&fit=crop&w=600&q=80" alt="A golden loaf cooling fresh from the oven" loading="lazy" class="mt-8 aspect-[3/4] w-full rounded-2xl object-cover shadow-soft" />
			</div>
		</div>
	</div>
</section>

<!-- Values -->
<section class="bg-sand-100 py-24 md:py-32">
	<div class="container-wide">
		<SectionHeading
			eyebrow="What We Stand For"
			title="Our commitment to quality"
			description="Three promises baked into everything we make."
		/>
		<div class="mt-14 grid gap-6 md:grid-cols-3">
			{#each values as value, i (value.title)}
				<div class="reveal flex flex-col gap-4 rounded-2xl bg-cream-50 p-8 shadow-soft ring-1 ring-sand-200/60" use:inview={{ delay: i * 100 }}>
					<span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-espresso text-gold">
						<value.icon size={26} aria-hidden="true" />
					</span>
					<h3 class="font-display text-2xl text-espresso">{value.title}</h3>
					<p class="leading-relaxed text-muted-foreground">{value.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Process -->
<section class="relative overflow-hidden bg-espresso py-24 text-cream md:py-32">
	<div class="bg-grain absolute inset-0 opacity-30"></div>
	<div class="container-wide relative">
		<SectionHeading
			eyebrow="The Artisan Process"
			title="From starter to slice"
			description="Good bread can't be rushed. Here's how a loaf finds its way to your hands."
			light
		/>
		<div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each steps as step, i (step.title)}
				<div class="reveal relative flex flex-col gap-4" use:inview={{ delay: i * 110 }}>
					<div class="flex items-center gap-4">
						<span class="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold">
							<step.icon size={24} aria-hidden="true" />
						</span>
						<span class="font-display text-5xl text-cream/15">0{i + 1}</span>
					</div>
					<h3 class="font-display text-xl text-cream">{step.title}</h3>
					<p class="text-sm leading-relaxed text-cream/70">{step.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Team -->
<section class="bg-cream py-24 md:py-32">
	<div class="container-wide">
		<SectionHeading
			eyebrow="The Hands Behind It"
			title="Meet the makers"
			description="A small crew of bakers, brewers, and neighbors who show up before dawn so your morning starts right."
		/>
		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each team as member, i (member.name)}
				<div class="reveal group flex flex-col gap-4" use:inview={{ delay: i * 90 }}>
					<div class="relative overflow-hidden rounded-2xl shadow-soft">
						<img src={member.image} alt={member.name} loading="lazy" class="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
						<div class="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
					</div>
					<div>
						<h3 class="font-display text-lg text-espresso">{member.name}</h3>
						<p class="flex items-center gap-1.5 text-sm text-clay-300"><Wheat size={14} aria-hidden="true" /> {member.role}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<CTASection />
