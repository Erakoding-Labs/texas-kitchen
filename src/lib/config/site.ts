/** Central business + brand metadata. Single source of truth for NAP/SEO. */
export const site = {
	name: 'Texas Scratch Kitchen',
	tagline: 'Freshly Baked. Locally Loved.',
	description:
		'Texas Scratch Kitchen is an artisan bakery & market in Menard, Texas — handcrafting sourdough, flaky croissants, cinnamon rolls, and fresh pastries from scratch every morning.',
	category: 'Bakery & Market',
	url: 'https://texasscratchkitchen.com',
	ogImage:
		'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
	phone: '+1 325-396-8307',
	phoneHref: 'tel:+13253968307',
	email: 'hello@texasscratchkitchen.com',
	rating: 4.9,
	reviewCount: 112,
	address: {
		street: '300 Ellis St',
		city: 'Menard',
		state: 'TX',
		zip: '76859',
		country: 'United States'
	},
	get fullAddress() {
		return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`;
	},
	geo: { lat: 30.9176, lng: -99.7868 },
	mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Texas+Scratch+Kitchen+300+Ellis+St+Menard+TX',
	mapsEmbed:
		'https://www.google.com/maps?q=300+Ellis+St,+Menard,+TX+76859&output=embed',
	service: { dineIn: true, takeout: true, delivery: false },
	hours: [
		{ day: 'Monday', open: 'Closed', close: '' },
		{ day: 'Tuesday', open: '7:00 AM', close: '3:00 PM' },
		{ day: 'Wednesday', open: '7:00 AM', close: '3:00 PM' },
		{ day: 'Thursday', open: '7:00 AM', close: '3:00 PM' },
		{ day: 'Friday', open: '7:00 AM', close: '5:00 PM' },
		{ day: 'Saturday', open: '8:00 AM', close: '5:00 PM' },
		{ day: 'Sunday', open: '8:00 AM', close: '2:00 PM' }
	],
	social: {
		instagram: 'https://instagram.com',
		facebook: 'https://facebook.com',
		tiktok: 'https://tiktok.com'
	}
} as const;

export const nav = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Menu', href: '/menu' },
	{ label: 'Reviews', href: '/reviews' },
	{ label: 'Gallery', href: '/gallery' },
	{ label: 'Contact', href: '/contact' }
] as const;
