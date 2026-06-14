export interface GalleryImage {
	src: string;
	alt: string;
	category: 'Atmosphere' | 'Pastries' | 'Bread' | 'Coffee' | 'Market';
	/** Visual span for the masonry grid. */
	tall?: boolean;
}

const img = (id: string, w = 900) =>
	`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const gallery: GalleryImage[] = [
	{ src: img('photo-1517433670267-08bbd4be890f'), alt: 'Golden scones cooling on a tray', category: 'Pastries', tall: true },
	{ src: img('photo-1554118811-1e0d58224f24'), alt: 'Warm, inviting cafe seating area', category: 'Atmosphere' },
	{ src: img('photo-1586444248902-2f64eddc13df'), alt: 'Rustic sourdough boule with a blistered crust', category: 'Bread', tall: true },
	{ src: img('photo-1495474472287-4d71bcdd2085'), alt: 'Pour-over coffee being brewed', category: 'Coffee' },
	{ src: img('photo-1555507036-ab1f4038808a'), alt: 'Flaky butter croissants stacked on a board', category: 'Pastries' },
	{ src: img('photo-1606101273945-e9eba91c0dc4'), alt: 'Tray of freshly iced cinnamon rolls', category: 'Pastries', tall: true },
	{ src: img('photo-1521017432531-fbd92d768814'), alt: 'Cozy bakery interior with shelves of bread', category: 'Atmosphere' },
	{ src: img('photo-1509440159596-0249088772ff'), alt: 'Assorted artisan pastries in a display case', category: 'Pastries' },
	{ src: img('photo-1592415486689-125cbbfcbee2'), alt: 'Rosemary focaccia studded with sea salt', category: 'Bread' },
	{ src: img('photo-1461023058943-07fcbe16d735'), alt: 'Latte with delicate rosetta art', category: 'Coffee', tall: true },
	{ src: img('photo-1488477181946-6428a0291777'), alt: 'Glossy fruit tarts on a marble counter', category: 'Pastries' },
	{ src: img('photo-1534432182912-63863115e106'), alt: 'Shelves of local jams and market goods', category: 'Market' },
	{ src: img('photo-1589367920969-ab8e050bbb04'), alt: 'Sliced seeded multigrain loaf', category: 'Bread' },
	{ src: img('photo-1559925393-8be0ec4767c8'), alt: 'Barista handing a coffee across the counter', category: 'Atmosphere', tall: true },
	{ src: img('photo-1620921568790-c1cf8984624c'), alt: 'Golden artisan loaf fresh from the oven', category: 'Bread' },
	{ src: img('photo-1464195244916-405fa0a82545'), alt: 'Fruit danish dusted with sugar', category: 'Pastries' }
];

export const galleryCategories = ['All', 'Atmosphere', 'Pastries', 'Bread', 'Coffee', 'Market'] as const;
