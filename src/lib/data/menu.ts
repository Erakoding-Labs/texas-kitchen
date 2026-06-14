export interface MenuItem {
	name: string;
	description: string;
	price: string;
	image: string;
	popular?: boolean;
	dietary?: string[];
}

export interface MenuCategory {
	id: string;
	title: string;
	blurb: string;
	items: MenuItem[];
}

const img = (id: string, w = 800) =>
	`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const menu: MenuCategory[] = [
	{
		id: 'pastries',
		title: 'Pastries',
		blurb: 'Buttery, laminated layers baked to a golden crackle every morning.',
		items: [
			{
				name: 'Almond Frangipane Bear Claw',
				description: 'Flaky pastry filled with house almond cream and toasted sliced almonds.',
				price: '$5.50',
				image: img('photo-1612203985729-70726954388c'),
				popular: true
			},
			{
				name: 'Pain au Chocolat',
				description: 'Twin batons of dark Belgian chocolate folded into 27 buttery layers.',
				price: '$4.75',
				image: img('photo-1623334044303-241021148842')
			},
			{
				name: 'Lemon Cream Puff',
				description: 'Crisp choux shell, Meyer lemon curd, and vanilla bean Chantilly.',
				price: '$4.25',
				image: img('photo-1488477181946-6428a0291777')
			},
			{
				name: 'Maple Pecan Kouign-Amann',
				description: 'Caramelized Breton pastry with Texas pecans and a maple glaze.',
				price: '$5.25',
				image: img('photo-1509440159596-0249088772ff'),
				popular: true
			}
		]
	},
	{
		id: 'croissants',
		title: 'Croissants',
		blurb: 'Slow-fermented dough, European butter, a 48-hour craft.',
		items: [
			{
				name: 'Classic Butter Croissant',
				description: 'Honeycomb crumb, shattering crust, pure cultured butter flavor.',
				price: '$3.95',
				image: img('photo-1555507036-ab1f4038808a'),
				popular: true
			},
			{
				name: 'Ham & Gruyère Croissant',
				description: 'Black forest ham, aged Gruyère, and a whisper of Dijon béchamel.',
				price: '$6.50',
				image: img('photo-1530610476181-d83430b64dcd')
			},
			{
				name: 'Everything Croissant',
				description: 'Cream cheese, scallion, and our house everything blend.',
				price: '$5.75',
				image: img('photo-1620921575116-fb8902865800')
			},
			{
				name: 'Raspberry Almond Croissant',
				description: 'Twice-baked with frangipane, tart raspberry, and powdered sugar.',
				price: '$5.95',
				image: img('photo-1568254183919-78a4f43a2877')
			}
		]
	},
	{
		id: 'cinnamon-rolls',
		title: 'Cinnamon Rolls',
		blurb: 'Pillowy, generously swirled, finished while still warm.',
		items: [
			{
				name: 'Classic Cinnamon Roll',
				description: 'Soft brioche spiral, Saigon cinnamon, cream cheese frosting.',
				price: '$5.50',
				image: img('photo-1509365465985-25d11c17e812'),
				popular: true
			},
			{
				name: 'Brown Butter Pecan Roll',
				description: 'Sticky caramel base, toasted pecans, brown-butter glaze.',
				price: '$6.25',
				image: img('photo-1583529245888-d9d70d0a4ef0')
			},
			{
				name: 'Texas Sheet Roll',
				description: 'Cocoa-laced swirl with a fudge ribbon — a Hill Country favorite.',
				price: '$6.00',
				image: img('photo-1606101273945-e9eba91c0dc4')
			}
		]
	},
	{
		id: 'danish',
		title: 'Danish',
		blurb: 'Seasonal fruit, silky pastry cream, jewel-like finishes.',
		items: [
			{
				name: 'Seasonal Berry Danish',
				description: 'Vanilla custard and a rotating mix of just-picked berries.',
				price: '$5.25',
				image: img('photo-1597403491447-3ab08f8e44dc'),
				popular: true
			},
			{
				name: 'Apricot & Honey Danish',
				description: 'Roasted apricot, local wildflower honey, and pistachio crumble.',
				price: '$5.25',
				image: img('photo-1464195244916-405fa0a82545')
			},
			{
				name: 'Cream Cheese Danish',
				description: 'A timeless square of tangy cheese custard and laminated dough.',
				price: '$4.75',
				image: img('photo-1550617931-e17a7b70dce2')
			}
		]
	},
	{
		id: 'sourdough',
		title: 'Sourdough Bread',
		blurb: 'Wild-yeast loaves, naturally leavened over 24 hours.',
		items: [
			{
				name: 'Country Sourdough Boule',
				description: 'Blistered crust, open crumb, a gentle tang. Our daily staple.',
				price: '$8.00',
				image: img('photo-1585478259715-876acc5be8eb'),
				popular: true
			},
			{
				name: 'Seeded Multigrain Loaf',
				description: 'Flax, sunflower, and millet folded through a hearty crumb.',
				price: '$9.00',
				image: img('photo-1589367920969-ab8e050bbb04')
			},
			{
				name: 'Rosemary Sea Salt Focaccia',
				description: 'Olive-oil rich, dimpled, with flaky salt and fresh rosemary.',
				price: '$7.50',
				image: img('photo-1592415486689-125cbbfcbee2')
			},
			{
				name: 'Jalapeño Cheddar Sourdough',
				description: 'Sharp cheddar and roasted jalapeño in a tangy Texas twist.',
				price: '$9.50',
				image: img('photo-1601000938259-9e92002320b2')
			}
		]
	},
	{
		id: 'salads',
		title: 'Salads',
		blurb: 'Garden-fresh plates built around local produce.',
		items: [
			{
				name: 'Hill Country Harvest Bowl',
				description: 'Mixed greens, roasted squash, pepitas, goat cheese, honey vinaigrette.',
				price: '$12.50',
				image: img('photo-1512621776951-a57141f2eefd'),
				popular: true
			},
			{
				name: 'Heirloom Tomato & Burrata',
				description: 'Creamy burrata, basil, aged balsamic, grilled sourdough.',
				price: '$13.00',
				image: img('photo-1546793665-c74683f339c1')
			},
			{
				name: 'Pecan Chicken Salad Plate',
				description: 'House chicken salad with Texas pecans on a bed of greens.',
				price: '$13.50',
				image: img('photo-1505253716362-afaea1d3d1af')
			}
		]
	},
	{
		id: 'coffee-tea',
		title: 'Coffee & Tea',
		blurb: 'Small-batch roasts and loose-leaf blends, pulled with care.',
		items: [
			{
				name: 'Single-Origin Pour Over',
				description: 'Rotating beans from Texas roasters, brewed cup by cup.',
				price: '$4.50',
				image: img('photo-1495474472287-4d71bcdd2085'),
				popular: true
			},
			{
				name: 'Brown Sugar Oat Latte',
				description: 'Double espresso, oat milk, house brown-sugar cinnamon syrup.',
				price: '$5.75',
				image: img('photo-1461023058943-07fcbe16d735')
			},
			{
				name: 'Spiced Chai Latte',
				description: 'Hand-blended masala chai steamed with your choice of milk.',
				price: '$5.25',
				image: img('photo-1571934811356-5cc061b6821f')
			},
			{
				name: 'Loose-Leaf Herbal Tea',
				description: 'Caffeine-free botanical blends served by the pot.',
				price: '$4.00',
				image: img('photo-1564890369478-c89ca6d9cde9')
			}
		]
	},
	{
		id: 'seasonal',
		title: 'Seasonal Specials',
		blurb: 'A rotating chalkboard celebrating what is fresh right now.',
		items: [
			{
				name: 'Texas Peach Galette',
				description: 'Free-form summer tart with Fredericksburg peaches and vanilla.',
				price: '$6.50',
				image: img('photo-1621743478914-cc8a86d7e9b5'),
				popular: true
			},
			{
				name: 'Lavender Honey Scone',
				description: 'Tender scone scented with culinary lavender and local honey.',
				price: '$4.50',
				image: img('photo-1517433670267-08bbd4be890f')
			},
			{
				name: 'Strawberry Shortcake Box',
				description: 'Buttermilk biscuit, macerated berries, whipped cream — seasonal.',
				price: '$7.00',
				image: img('photo-1565958011703-44f9829ba187')
			}
		]
	}
];
