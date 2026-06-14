<script lang="ts">
	import { page } from '$app/stores';
	import { nav, site } from '$lib/config/site';
	import { Menu, X, Phone, Wheat } from 'lucide-svelte';
	import Button from './ui/Button.svelte';
	import { cn } from '$lib/utils';

	let scrolled = $state(false);
	let open = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 24;
	}

	$effect(() => {
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	// Lock body scroll while the mobile menu is open.
	$effect(() => {
		if (typeof document !== 'undefined') {
			document.body.style.overflow = open ? 'hidden' : '';
		}
	});

	const current = $derived($page.url.pathname);
</script>

<header
	class={cn(
		'fixed inset-x-0 top-0 z-50 transition-all duration-500',
		scrolled || open
			? 'bg-cream/85 shadow-soft backdrop-blur-md'
			: 'bg-transparent'
	)}
>
	<nav class="container-wide flex h-20 items-center justify-between" aria-label="Primary">
		<a href="/" class="flex items-center gap-2.5 text-espresso" aria-label="{site.name} home" onclick={() => (open = false)}>
			<span class="flex h-10 w-10 items-center justify-center rounded-full bg-espresso text-gold">
				<Wheat size={20} aria-hidden="true" />
			</span>
			<span class="flex flex-col leading-none">
				<span class="font-display text-lg font-bold tracking-tight">Texas Scratch</span>
				<span class="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-clay-300">Kitchen</span>
			</span>
		</a>

		<ul class="hidden items-center gap-8 lg:flex">
			{#each nav as item (item.href)}
				<li>
					<a
						href={item.href}
						class={cn(
							'link-underline text-sm font-medium transition-colors',
							current === item.href ? 'text-clay-300' : 'text-espresso hover:text-clay-300'
						)}
						aria-current={current === item.href ? 'page' : undefined}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="hidden items-center gap-3 lg:flex">
			<a
				href={site.phoneHref}
				class="flex items-center gap-2 text-sm font-medium text-espresso transition-colors hover:text-clay-300"
			>
				<Phone size={15} aria-hidden="true" />
				{site.phone}
			</a>
			<Button href="/contact" size="sm">Visit Us</Button>
		</div>

		<button
			class="flex h-11 w-11 items-center justify-center rounded-full text-espresso transition-colors hover:bg-sand-100 lg:hidden"
			onclick={() => (open = !open)}
			aria-label={open ? 'Close menu' : 'Open menu'}
			aria-expanded={open}
		>
			{#if open}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</nav>

	<!-- Mobile menu -->
	{#if open}
		<div class="border-t border-sand-200 bg-cream/95 backdrop-blur-md lg:hidden">
			<ul class="container-wide flex flex-col py-4">
				{#each nav as item (item.href)}
					<li>
						<a
							href={item.href}
							class={cn(
								'flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors',
								current === item.href ? 'bg-sand-100 text-clay-300' : 'text-espresso hover:bg-sand-100'
							)}
							onclick={() => (open = false)}
							aria-current={current === item.href ? 'page' : undefined}
						>
							{item.label}
						</a>
					</li>
				{/each}
				<li class="mt-3 flex flex-col gap-3 px-4">
					<a href={site.phoneHref} class="flex items-center gap-2 text-sm font-medium text-clay-300">
						<Phone size={16} aria-hidden="true" />
						{site.phone}
					</a>
					<Button href="/contact" class="w-full" onclick={() => (open = false)}>Visit Us Today</Button>
				</li>
			</ul>
		</div>
	{/if}
</header>
