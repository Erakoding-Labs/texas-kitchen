export interface FeaturedProduct {
	name: string;
	tagline: string;
	price: string;
	image: string;
	badge?: string;
}

const img = (id: string, w = 800) =>
	`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Hero-tier products surfaced on the home page. */
export const featured: FeaturedProduct[] = [
	{
		name: 'Country Sourdough',
		tagline: 'Naturally leavened over 24 hours for a deep, tangy crumb.',
		price: '$8.00',
		image: img('photo-1585478259715-876acc5be8eb'),
		badge: 'Signature'
	},
	{
		name: 'Butter Croissant',
		tagline: '27 buttery layers, shattering crust, baked at dawn.',
		price: '$3.95',
		image: img('photo-1555507036-ab1f4038808a'),
		badge: 'Bestseller'
	},
	{
		name: 'Classic Cinnamon Roll',
		tagline: 'Pillowy brioche swirl finished with cream cheese frosting.',
		price: '$5.50',
		image: img('photo-1509365465985-25d11c17e812'),
		badge: 'Fan Favorite'
	},
	{
		name: 'Texas Peach Galette',
		tagline: 'Free-form summer tart with Fredericksburg peaches.',
		price: '$6.50',
		image: img('photo-1621743478914-cc8a86d7e9b5'),
		badge: 'Seasonal'
	}
];

/** Trust-building stat strip. */
export const highlights = [
	{ value: '4.9★', label: '112 Google reviews' },
	{ value: '100%', label: 'Baked from scratch daily' },
	{ value: '6am', label: 'Fresh out of the oven' },
	{ value: 'Local', label: 'Texas-sourced ingredients' }
];
