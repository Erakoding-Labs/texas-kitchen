export interface Review {
	quote: string;
	author: string;
	location: string;
	rating: number;
	source: string;
	highlight?: boolean;
}

export const reviews: Review[] = [
	{
		quote:
			"Fresh, flaky pastries and a wonderful stop while traveling through Texas. We went out of our way to come back the next morning.",
		author: 'Hannah M.',
		location: 'Austin, TX',
		rating: 5,
		source: 'Google Review',
		highlight: true
	},
	{
		quote: "The cutest bakery I've ever visited. Every detail is thoughtful and the sourdough is unreal.",
		author: 'Priya S.',
		location: 'San Angelo, TX',
		rating: 5,
		source: 'Google Review',
		highlight: true
	},
	{
		quote: 'A game changer for the Menard community. We finally have a place to gather over great coffee and fresh bread.',
		author: 'David R.',
		location: 'Menard, TX',
		rating: 5,
		source: 'Google Review',
		highlight: true
	},
	{
		quote: 'The cinnamon rolls are worth the drive from anywhere in the Hill Country. Warm, gooey, perfect.',
		author: 'Megan T.',
		location: 'Fredericksburg, TX',
		rating: 5,
		source: 'Google Review'
	},
	{
		quote: 'Genuine small-town hospitality and big-city pastry quality. The croissants rival anything in the city.',
		author: 'Carlos V.',
		location: 'San Antonio, TX',
		rating: 5,
		source: 'Google Review'
	},
	{
		quote: 'We stopped on a road trip and stayed an extra hour. The market shelves are full of local treasures too.',
		author: 'Laura B.',
		location: 'Lubbock, TX',
		rating: 5,
		source: 'Google Review'
	},
	{
		quote: 'You can taste that everything is made from scratch. The seasonal peach galette made my whole week.',
		author: 'James K.',
		location: 'Mason, TX',
		rating: 5,
		source: 'Google Review'
	},
	{
		quote: 'Friendly faces, beautiful space, and the best pour-over coffee in West Texas. A true gem.',
		author: 'Anita G.',
		location: 'Brady, TX',
		rating: 5,
		source: 'Google Review'
	}
];

export const reviewStats = [
	{ label: 'Average Rating', value: '4.9', suffix: '/5' },
	{ label: 'Verified Reviews', value: '112', suffix: '+' },
	{ label: '5-Star Ratings', value: '96', suffix: '%' },
	{ label: 'Would Return', value: '99', suffix: '%' }
];
