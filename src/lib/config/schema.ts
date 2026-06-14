import { site } from './site';

/** Maps day labels to schema.org day URIs, skipping closed days. */
function openingHours() {
	return site.hours
		.filter((h) => h.open !== 'Closed')
		.map((h) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: `https://schema.org/${h.day}`,
			opens: to24h(h.open),
			closes: to24h(h.close)
		}));
}

function to24h(t: string): string {
	const m = t.match(/(\d+):(\d+)\s*(AM|PM)/i);
	if (!m) return '00:00';
	let h = parseInt(m[1], 10);
	const min = m[2];
	const mer = m[3].toUpperCase();
	if (mer === 'PM' && h !== 12) h += 12;
	if (mer === 'AM' && h === 12) h = 0;
	return `${String(h).padStart(2, '0')}:${min}`;
}

/** schema.org LocalBusiness / Bakery structured data. */
export const localBusinessSchema = {
	'@context': 'https://schema.org',
	'@type': 'Bakery',
	'@id': `${site.url}/#bakery`,
	name: site.name,
	description: site.description,
	url: site.url,
	telephone: site.phone,
	email: site.email,
	image: site.ogImage,
	priceRange: '$$',
	servesCuisine: ['Bakery', 'Coffee', 'Pastries', 'Sandwiches'],
	address: {
		'@type': 'PostalAddress',
		streetAddress: site.address.street,
		addressLocality: site.address.city,
		addressRegion: site.address.state,
		postalCode: site.address.zip,
		addressCountry: 'US'
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: site.geo.lat,
		longitude: site.geo.lng
	},
	hasMap: site.mapsUrl,
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: site.rating,
		reviewCount: site.reviewCount,
		bestRating: 5,
		worstRating: 1
	},
	openingHoursSpecification: openingHours(),
	makesOffer: {
		'@type': 'Offer',
		itemOffered: { '@type': 'Service', name: 'Dine-in & Takeout' }
	},
	sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok]
};

export const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: site.name,
	url: site.url
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((it, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: it.name,
			item: `${site.url}${it.path}`
		}))
	};
}
