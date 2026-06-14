<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { inview } from '$lib/actions/inview';
	import { site } from '$lib/config/site';
	import { breadcrumbSchema } from '$lib/config/schema';
	import { MapPin, Phone, Mail, Clock, Instagram, Facebook, CheckCircle2, Utensils, ShoppingBag } from 'lucide-svelte';

	let name = $state('');
	let email = $state('');
	let subject = $state('General Inquiry');
	let message = $state('');
	let submitted = $state(false);

	const subjects = ['General Inquiry', 'Custom Order', 'Catering', 'Large Order / Wholesale', 'Feedback'];

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		// Demo handler — wire to a form backend (Formspree, Resend, etc.) for production.
		submitted = true;
	}
</script>

<Seo
	title="Contact & Visit"
	description="Visit Texas Scratch Kitchen at 300 Ellis St, Menard, TX 76859. Call +1 325-396-8307, check our hours, or send us a message. Dine-in & takeout available."
	schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])}
/>

<PageHero
	eyebrow="Get In Touch"
	title="We'd love to see you"
	subtitle="Questions, custom orders, or just saying hello — reach out, or stop by the bakery on Ellis Street."
	image="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=2000&q=80"
/>

<section class="bg-grain bg-cream py-20 md:py-28">
	<div class="container-wide grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
		<!-- Form -->
		<div class="reveal" use:inview>
			<h2 class="font-display text-3xl text-espresso md:text-4xl">Send us a message</h2>
			<p class="mt-2 text-muted-foreground">We typically reply within one business day.</p>

			{#if submitted}
				<div class="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-sand-100 px-8 py-16 text-center">
					<CheckCircle2 size={48} class="text-clay-300" aria-hidden="true" />
					<h3 class="font-display text-2xl text-espresso">Thank you, {name || 'friend'}!</h3>
					<p class="max-w-sm text-muted-foreground">
						Your message is on its way. We'll be in touch soon — in the meantime, the cinnamon rolls aren't going to eat themselves.
					</p>
					<Button variant="outline" onclick={() => (submitted = false)}>Send another</Button>
				</div>
			{:else}
				<form class="mt-8 flex flex-col gap-5" onsubmit={handleSubmit}>
					<div class="grid gap-5 sm:grid-cols-2">
						<label class="flex flex-col gap-2">
							<span class="text-sm font-medium text-espresso">Name</span>
							<input
								bind:value={name}
								required
								type="text"
								placeholder="Your name"
								class="h-12 rounded-xl border border-sand-200 bg-cream-50 px-4 text-espresso outline-none transition-colors placeholder:text-clay-200 focus:border-clay-200 focus:ring-2 focus:ring-gold/40"
							/>
						</label>
						<label class="flex flex-col gap-2">
							<span class="text-sm font-medium text-espresso">Email</span>
							<input
								bind:value={email}
								required
								type="email"
								placeholder="you@example.com"
								class="h-12 rounded-xl border border-sand-200 bg-cream-50 px-4 text-espresso outline-none transition-colors placeholder:text-clay-200 focus:border-clay-200 focus:ring-2 focus:ring-gold/40"
							/>
						</label>
					</div>
					<label class="flex flex-col gap-2">
						<span class="text-sm font-medium text-espresso">Subject</span>
						<select
							bind:value={subject}
							class="h-12 rounded-xl border border-sand-200 bg-cream-50 px-4 text-espresso outline-none transition-colors focus:border-clay-200 focus:ring-2 focus:ring-gold/40"
						>
							{#each subjects as s (s)}
								<option>{s}</option>
							{/each}
						</select>
					</label>
					<label class="flex flex-col gap-2">
						<span class="text-sm font-medium text-espresso">Message</span>
						<textarea
							bind:value={message}
							required
							rows="5"
							placeholder="How can we help?"
							class="rounded-xl border border-sand-200 bg-cream-50 px-4 py-3 text-espresso outline-none transition-colors placeholder:text-clay-200 focus:border-clay-200 focus:ring-2 focus:ring-gold/40"
						></textarea>
					</label>
					<Button type="submit" size="lg" class="w-full sm:w-auto">Send Message</Button>
				</form>
			{/if}
		</div>

		<!-- Contact details -->
		<div class="reveal flex flex-col gap-5" use:inview={{ delay: 120 }}>
			<div class="flex flex-col gap-4 rounded-2xl bg-espresso p-8 text-cream shadow-soft">
				<h3 class="font-display text-2xl">Visit the bakery</h3>
				<ul class="flex flex-col gap-4 text-cream/80">
					<li class="flex items-start gap-3">
						<MapPin size={20} class="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
						<a href={site.mapsUrl} target="_blank" rel="noopener" class="hover:text-gold">{site.fullAddress}</a>
					</li>
					<li class="flex items-center gap-3">
						<Phone size={20} class="shrink-0 text-gold" aria-hidden="true" />
						<a href={site.phoneHref} class="hover:text-gold">{site.phone}</a>
					</li>
					<li class="flex items-center gap-3">
						<Mail size={20} class="shrink-0 text-gold" aria-hidden="true" />
						<a href={`mailto:${site.email}`} class="hover:text-gold">{site.email}</a>
					</li>
				</ul>
				<div class="mt-2 flex gap-3">
					<a href={site.social.instagram} target="_blank" rel="noopener" aria-label="Instagram" class="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-gold hover:text-espresso">
						<Instagram size={18} />
					</a>
					<a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" class="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-gold hover:text-espresso">
						<Facebook size={18} />
					</a>
				</div>
			</div>

			<div class="flex flex-col gap-3 rounded-2xl bg-sand-100 p-8">
				<h3 class="flex items-center gap-2 font-display text-xl text-espresso">
					<Clock size={18} class="text-clay-300" aria-hidden="true" /> Hours
				</h3>
				<ul class="flex flex-col gap-1.5 text-sm">
					{#each site.hours as h (h.day)}
						<li class="flex items-center justify-between gap-4 text-espresso-100">
							<span>{h.day}</span>
							<span class={h.open === 'Closed' ? 'text-clay-200' : 'font-medium'}>
								{h.open === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}
							</span>
						</li>
					{/each}
				</ul>
				<div class="mt-2 flex flex-wrap gap-2 border-t border-sand-200 pt-4">
					<span class="inline-flex items-center gap-1.5 rounded-full bg-cream-50 px-3 py-1.5 text-xs font-medium text-espresso"><Utensils size={13} class="text-clay-300" aria-hidden="true" /> Dine-in</span>
					<span class="inline-flex items-center gap-1.5 rounded-full bg-cream-50 px-3 py-1.5 text-xs font-medium text-espresso"><ShoppingBag size={13} class="text-clay-300" aria-hidden="true" /> Takeout</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Map -->
	<div class="container-wide mt-12">
		<div class="reveal overflow-hidden rounded-2xl shadow-lift ring-1 ring-sand-200" use:inview>
			<iframe
				title="Map showing {site.name} at {site.fullAddress}"
				src={site.mapsEmbed}
				class="h-[400px] w-full md:h-[460px]"
				style="border:0; filter: sepia(8%) saturate(115%);"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				allowfullscreen
			></iframe>
		</div>
	</div>
</section>
