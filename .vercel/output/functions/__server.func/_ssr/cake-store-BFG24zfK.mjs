import { a as stringType, i as objectType, n as enumType, r as numberType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cake-store-BFG24zfK.js
var cake_champagne_gold_default = "/assets/cake-champagne-gold-DbxAdxee.png";
var cake_cookies_cream_default = "/assets/cake-cookies-cream-BdBYmr3k.png";
var cake_bt21_ovee_default = "/assets/cake-bt21-ovee-C7SpmS8b.png";
var cake_red_velvet_heart_default = "/assets/cake-red-velvet-heart-nsZeRdO6.jpg";
var cake_half_way_to_one_default = "/assets/cake-half-way-to-one-BdJUdvvb.jpg";
var cake_rainbow_unicorn_default = "/assets/cake-rainbow-unicorn-BkqN-NIf.jpg";
var cake_teddy_bear_first_bday_default = "/assets/cake-teddy-bear-first-bday-CiTdGo8k.png";
var french_macarons_box_default = "/assets/french-macarons-box-B_2FGCs0.jpg";
var blue_orchid_chocolate_bouquet_default = "/assets/blue-orchid-chocolate-bouquet-CGWOoPIS.png";
var cake_oh_baby_shower_default = "/assets/cake-oh-baby-shower-DX8WTIuO.jpg";
var cake_twin_minnie_mouse_default = "/assets/cake-twin-minnie-mouse-4j4oUXZK.jpg";
var cake_sam_8_gold_ladder_default = "/assets/cake-sam-8-gold-ladder-SQrdwnRu.png";
var cake_pink_blue_brushstroke_default = "/assets/cake-pink-blue-brushstroke-BLrGz-bF.jpg";
var cake_peach_unicorn_niva_default = "/assets/cake-peach-unicorn-niva-BMlV60Kk.png";
var dessert_rasmalai_taco_default = "/assets/dessert-rasmalai-taco-DRo266W3.png";
var cake_lotus_biscoff_drip_default = "/assets/cake-lotus-biscoff-drip-B44fo3Rk.png";
var dessert_mango_jar_floral_default = "/assets/dessert-mango-jar-floral-WeM9Yseb.png";
var cake_engaged_powder_blue_default = "/assets/cake-engaged-powder-blue-D2G0XDX3.jpg";
var master_chef_wedding_cake_default = "/assets/master-chef-wedding-cake-DWniTN2y.jpg";
var review_rasmalai_default = "/assets/review-rasmalai-WrZtupbu.png";
var review_chocolate_default = "/assets/review-chocolate-Ba2-QuJK.png";
/** Official business name */
var BUSINESS_NAME = "Cake Crafts – Customised Cake Studio";
/** Short brand name for UI headings */
var BRAND_SHORT = "Cake Crafts";
/** Complete verified single studio address */
var STORE_ADDRESS = "Shop No. 2, Alcon Rethos, EON Free Zone Road, opposite Forest County, Kharadi, Pune, Maharashtra 411014";
/** Verified phone numbers */
var STORE_PHONE = "+91 85309 14747";
var ALT_STORE_PHONE = "+91 78752 71027";
/** WhatsApp number (primary order hotline) */
var WHATSAPP_NUMBER = "918530914747";
/** Instagram handle */
var INSTAGRAM_HANDLE = "cakecraftspune";
var INSTAGRAM_URL = "https://www.instagram.com/cakecraftspune/";
/** Opening hours */
var OPENING_HOURS = "10:00 AM – 11:00 PM, Daily";
/** Google Business Profile rating & review count */
var GOOGLE_RATING = 4.9;
var GOOGLE_REVIEW_COUNT = "1,000+";
/** Verified Google Maps URL */
var GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Cake+Crafts+Customised+Cake+Studio+Shop+2+Alcon+Rethos+EON+Free+Zone+Road+Kharadi+Pune+411014";
var GOOGLE_REVIEWS_URL = GOOGLE_MAPS_URL;
/** Embedded Google Map URL */
var MAP_EMBED_URL = "https://maps.google.com/maps?q=Cake%20Crafts%20Customised%20Cake%20Studio%20Alcon%20Rethos%20Kharadi%20Pune&t=&z=16&ie=UTF8&iwloc=&output=embed";
/** Coordinates */
var GEO_COORDS = {
	lat: 18.553,
	lng: 73.9412
};
/** Studio services */
var SERVICES = [
	"In-store pickup & consultation",
	"Swiggy & Zomato Delivery",
	"Custom Birthday & Wedding Cake Design",
	"Bespoke Dessert Catering"
];
var storeLocation = {
	id: "kharadi-studio",
	name: BRAND_SHORT,
	rating: GOOGLE_RATING,
	reviewCount: GOOGLE_REVIEW_COUNT,
	category: "Customised Cake Studio",
	priceRange: "₹180–₹3,500+",
	address: STORE_ADDRESS,
	area: "Kharadi, EON Free Zone Road, Pune",
	phone: STORE_PHONE,
	services: [...SERVICES],
	googleMapsUrl: GOOGLE_MAPS_URL,
	mapEmbedUrl: MAP_EMBED_URL
};
var cakeCatalog = [
	{
		id: "master-chef-grand-wedding",
		name: "Grand Floral Arch 2-Tier Wedding Cake",
		description: "Handcrafted 2-tier white wedding cake surrounded by a golden hoop floral arch with fresh purple & pink orchids, gold metallic spheres & pearl garlands.",
		image: master_chef_wedding_cake_default,
		estimateFor500g: 1750,
		occasions: ["Wedding", "Anniversary"],
		bestseller: true
	},
	{
		id: "engaged-powder-blue-2tier",
		name: "Royal 'Engaged' Powder Blue 2-Tier Cake",
		description: "Elegant 2-tier white & powder blue engagement cake featuring a gold diamond ring 'Engaged' topper, cascading yellow roses & white baby's breath.",
		image: cake_engaged_powder_blue_default,
		estimateFor500g: 1550,
		occasions: ["Wedding", "Anniversary"],
		bestseller: true
	},
	{
		id: "rasmalai-cream-taco-dessert",
		name: "Gourmet Saffron Rasmalai Cream Taco",
		description: "Signature dessert taco crafted from white chocolate, filled with cardamom rasmalai mousse, sliced pistachios & organic rose petals.",
		image: dessert_rasmalai_taco_default,
		estimateFor500g: 220,
		occasions: ["Just because", "Birthday"],
		bestseller: true
	},
	{
		id: "lotus-biscoff-caramel-drip",
		name: "Lotus Biscoff Salted Caramel Drip Cake",
		description: "Creamy vanilla sponge infused with speculoos Biscoff spread, caramel drip, and topped with crunchy Lotus Biscoff biscuits on a wooden platter.",
		image: cake_lotus_biscoff_drip_default,
		estimateFor500g: 890,
		occasions: ["Birthday", "Just because"],
		bestseller: true
	},
	{
		id: "peach-unicorn-niva-custom",
		name: "Peach Unicorn Gold Sphere Designer Cake",
		description: "Soft peach buttercream cake crowned with a 3D sitting unicorn figurine, golden metallic spheres & custom edible bow plaque ('Happy Birthday Niva!').",
		image: cake_peach_unicorn_niva_default,
		estimateFor500g: 1150,
		occasions: ["Birthday", "Just because"],
		bestseller: true
	},
	{
		id: "oh-baby-gold-silhouette-cake",
		name: "Tall 'Oh Baby' Gold Silhouette Shower Cake",
		description: "Elegant white & teal cylindrical shower cake featuring a gold mother-to-be silhouette, metallic spheres, gold leaf foil & white roses.",
		image: cake_oh_baby_shower_default,
		estimateFor500g: 1290,
		occasions: ["Birthday", "Just because"],
		bestseller: true
	},
	{
		id: "twin-minnie-mouse-double-cake",
		name: "Twin Minnie Mouse Double Celebration Cake",
		description: "Twin lilac & blush pink birthday cakes connected by a 3D colorful butterfly arch with handcrafted 3D Minnie Mouse figurines.",
		image: cake_twin_minnie_mouse_default,
		estimateFor500g: 1650,
		occasions: ["Birthday", "Just because"],
		bestseller: true
	},
	{
		id: "sam8-sky-blue-gold-ball-2tier",
		name: "Royal 2-Tier Sky Blue Gold Ball Birthday Cake",
		description: "2-tier sky blue & quilted white cake decorated with gold metallic spheres, gold ladder & custom 3D 'SAM 8' lettering.",
		image: cake_sam_8_gold_ladder_default,
		estimateFor500g: 1450,
		occasions: ["Birthday", "Just because"],
		bestseller: true
	},
	{
		id: "pink-blue-brushstroke-pastels",
		name: "Pink & Sky Blue Pastel Brushstroke Cake",
		description: "Smooth white cream cake decorated with artistic pink & sky blue painterly brushstrokes, topped with a gold mirror 'Happy Birthday' topper.",
		image: cake_pink_blue_brushstroke_default,
		estimateFor500g: 920,
		occasions: ["Birthday", "Just because"],
		bestseller: true
	},
	{
		id: "french-macarons-assorted-box",
		name: "Artisan French Macarons Gift Box",
		description: "Assorted box of handcrafted French almond macarons in pink strawberry, teal coconut, vanilla bean, chocolate fudge & mocha flavours.",
		image: french_macarons_box_default,
		estimateFor500g: 350,
		occasions: [
			"Just because",
			"Anniversary",
			"Birthday"
		],
		bestseller: true
	},
	{
		id: "blue-orchid-chocolate-bouquet",
		name: "Exotic Blue Orchid & Chocolate Gift Bouquet",
		description: "Stunning blue orchid flower bouquet paired with Cadbury Dairy Milk chocolates & white baby's breath — perfect gift combo for celebrations.",
		image: blue_orchid_chocolate_bouquet_default,
		estimateFor500g: 650,
		occasions: [
			"Anniversary",
			"Birthday",
			"Just because"
		],
		bestseller: true
	},
	{
		id: "rainbow-unicorn-2tier",
		name: "Magical 2-Tier Rainbow Unicorn Cake",
		description: "Handcrafted 2-tier pastel rainbow birthday cake crowned with a 3D golden unicorn horn, pastel sugar roses, rainbow arch & custom 3D name plaque.",
		image: cake_rainbow_unicorn_default,
		estimateFor500g: 1390,
		occasions: ["Birthday", "Just because"],
		bestseller: true
	},
	{
		id: "half-way-to-one-milestone",
		name: "Half-Way To One 6-Month Milestone Cake",
		description: "Charming turquoise & white 3D half-cake design with tall candle topper, edible sugar sprinkles & gold 'Half Way to One' ribbon plaque.",
		image: cake_half_way_to_one_default,
		estimateFor500g: 880,
		occasions: ["Birthday", "Just because"],
		bestseller: true
	},
	{
		id: "teddy-bear-cloud-1st-bday",
		name: "Teddy Bear & Cloud First Birthday Cake",
		description: "Sky-blue tall designer cake adorned with a handcrafted 3D teddy bear holding baby bear, blue isomalt crystal lollipops & wooden ladder.",
		image: cake_teddy_bear_first_bday_default,
		estimateFor500g: 1180,
		occasions: ["Birthday", "Just because"],
		bestseller: true
	},
	{
		id: "gourmet-mango-cheesecake-jar",
		name: "Gourmet Alphonso Mango Cheesecake Jar",
		description: "Luscious multi-layer dessert jar filled with pure Alphonso mango pulp, velvet cream cheese mousse, crushed cookie crust & fresh mint leaves.",
		image: dessert_mango_jar_floral_default,
		estimateFor500g: 240,
		occasions: ["Just because", "Birthday"],
		bestseller: true
	},
	{
		id: "champagne-gold-luxury",
		name: "Royal Champagne Gold & Ruby Designer Cake",
		description: "Handcrafted tall cream cake featuring rich ruby velvet texture, gold leaf fault line edging, gold metallic spheres, isomalt glass crystal crest & mini champagne bottle accent.",
		image: cake_champagne_gold_default,
		estimateFor500g: 1350,
		occasions: [
			"Birthday",
			"Anniversary",
			"Wedding"
		],
		bestseller: true
	},
	{
		id: "cookies-cream-oreo",
		name: "Signature Cookies & Cream Oreo Cake",
		description: "Multi-layered dark chocolate sponge filled with crunchy crushed Oreos and fluffy vanilla cream frosting, topped with whole Oreos & chocolate crumbs.",
		image: cake_cookies_cream_default,
		estimateFor500g: 850,
		occasions: ["Birthday", "Just because"],
		bestseller: true
	},
	{
		id: "bt21-ovee-custom",
		name: "Custom BT21 Character Theme Birthday Cake",
		description: "Bespoke lavender & blush pink fondant cake with handcrafted 3D BT21 character figurines (Tata, Mang, RJ, Cooky, Shooky, Chimmy, Koya) and custom 3D name plaque.",
		image: cake_bt21_ovee_default,
		estimateFor500g: 1280,
		occasions: ["Birthday", "Just because"],
		bestseller: true
	},
	{
		id: "red-velvet-heart-gourmet",
		name: "Red Velvet Heart Cake",
		description: "Heart-shaped 100% eggless red velvet cake with smooth cream cheese piping and soft cake crumbs.",
		image: cake_red_velvet_heart_default,
		estimateFor500g: 890,
		occasions: [
			"Anniversary",
			"Birthday",
			"Just because"
		],
		bestseller: true
	}
];
var cakeWeights = ["500 g", "1 kg"];
var cakeOrderItemSchema = objectType({
	productId: stringType(),
	weight: enumType(cakeWeights),
	quantity: numberType().int().positive().default(1)
});
objectType({
	customerName: stringType().trim().min(2, "Name must be at least 2 characters."),
	customerEmail: stringType().trim().email("Please enter a valid email address."),
	customerPhone: stringType().trim().min(10, "Please enter a valid phone number."),
	deliveryAddress: stringType().trim().optional(),
	requestedDate: stringType().optional(),
	customerNote: stringType().trim().optional(),
	items: arrayType(cakeOrderItemSchema).min(1, "Please select at least one cake.")
});
function formatRupees(amount) {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0
	}).format(amount);
}
var customerReviews = [
	{
		id: "rev-cc-1",
		author: "Arjun M.",
		locationId: "kharadi-studio",
		locationName: "Kharadi, Pune",
		rating: 5,
		date: "Recent",
		comment: "Ordered a customised cake for my daughter's birthday from Cake Crafts in Kharadi. The design was exactly what we asked for and the taste was delicious. Highly recommend!",
		cakeOrdered: "Cookies & Cream Oreo Cake",
		verified: true,
		photoUrl: review_rasmalai_default,
		source: "google",
		sourceUrl: GOOGLE_MAPS_URL
	},
	{
		id: "rev-cc-2",
		author: "Priya S.",
		locationId: "kharadi-studio",
		locationName: "Kharadi, Pune",
		rating: 5,
		date: "Recent",
		comment: "Amazing chocolate truffle cake! Super fresh and 100% eggless. The staff at Alcon Rethos shop in Kharadi was very friendly and helped us choose the perfect design.",
		cakeOrdered: "Dark Chocolate Truffle Cake",
		verified: true,
		photoUrl: review_chocolate_default,
		source: "google",
		sourceUrl: GOOGLE_MAPS_URL
	},
	{
		id: "rev-cc-3",
		author: "Sneha K.",
		locationId: "kharadi-studio",
		locationName: "Kharadi, Pune",
		rating: 5,
		date: "Recent",
		comment: "Cake Crafts made the most beautiful BT21 custom theme cake for my sister's birthday! Perfect finish and moist sponge. Will definitely order again.",
		cakeOrdered: "Custom BT21 Theme Birthday Cake",
		verified: true,
		source: "google",
		sourceUrl: GOOGLE_MAPS_URL
	}
];
function getCake(id) {
	return cakeCatalog.find((cake) => cake.id === id);
}
function estimateLineTotal(cakeId, weight, quantity = 1) {
	const cake = getCake(cakeId);
	if (!cake) return 0;
	const multiplier = weight === "1 kg" ? 1.75 : 1;
	return Math.round(cake.estimateFor500g * multiplier * quantity);
}
//#endregion
export { storeLocation as S, cakeWeights as _, GOOGLE_MAPS_URL as a, estimateLineTotal as b, INSTAGRAM_HANDLE as c, OPENING_HOURS as d, SERVICES as f, cakeCatalog as g, WHATSAPP_NUMBER as h, GEO_COORDS as i, INSTAGRAM_URL as l, STORE_PHONE as m, BRAND_SHORT as n, GOOGLE_RATING as o, STORE_ADDRESS as p, BUSINESS_NAME as r, GOOGLE_REVIEWS_URL as s, ALT_STORE_PHONE as t, MAP_EMBED_URL as u, cake_lotus_biscoff_drip_default as v, formatRupees as x, customerReviews as y };
