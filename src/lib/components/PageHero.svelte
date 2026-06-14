<script lang="ts">
	import { inview } from '$lib/actions/inview';

	interface Props {
		eyebrow?: string;
		title: string;
		subtitle?: string;
		image: string;
	}

	let { eyebrow, title, subtitle, image }: Props = $props();
</script>

<section class="relative flex min-h-[58vh] items-end overflow-hidden pb-16 pt-32 md:min-h-[64vh] md:pb-20">
	<img
		src={image}
		alt=""
		aria-hidden="true"
		class="absolute inset-0 h-full w-full object-cover"
		fetchpriority="high"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/55 to-espresso/35"></div>
	<div class="container-wide relative">
		<div class="reveal max-w-2xl" use:inview>
			{#if eyebrow}
				<span class="eyebrow text-gold-100">
					<span class="h-px w-6 bg-gold"></span>
					{eyebrow}
				</span>
			{/if}
			<h1 class="mt-4 text-balance text-5xl leading-[1.05] text-cream md:text-6xl lg:text-7xl">
				{title}
			</h1>
			{#if subtitle}
				<p class="mt-5 max-w-xl text-balance text-lg leading-relaxed text-cream/80">
					{subtitle}
				</p>
			{/if}
		</div>
	</div>
</section>
