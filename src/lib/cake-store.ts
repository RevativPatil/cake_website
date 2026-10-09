import { z } from "zod";

// Real studio photos provided directly by Cake Crafts
import champagneGoldCakeImage from "@/assets/cake-champagne-gold.png";
import cookiesCreamCakeImage from "@/assets/cake-cookies-cream.png";
import bt21OveeCakeImage from "@/assets/cake-bt21-ovee.png";
import redVelvetHeartCakeImage from "@/assets/cake-red-velvet-heart.jpg";
import chocoChipRosetteCakeImage from "@/assets/cake-choco-chip-rosette.jpg";
import halfWayToOneImage from "@/assets/cake-half-way-to-one.jpg";
import rainbowUnicornImage from "@/assets/cake-rainbow-unicorn.jpg";
import realStorefrontInterior from "@/assets/storefront-real-interior.jpg";
import teddyBearFirstBdayImage from "@/assets/cake-teddy-bear-first-bday.png";
import mangoJarDessertImage from "@/assets/cake-mango-jar-dessert.png";

// Additional real studio creations & storefront photos
import frenchMacaronsImage from "@/assets/french-macarons-box.jpg";
import blueOrchidBouquetImage from "@/assets/blue-orchid-chocolate-bouquet.png";
import ohBabyShowerCakeImage from "@/assets/cake-oh-baby-shower.jpg";
import storefrontExteriorKharadi from "@/assets/storefront-exterior-kharadi.jpg";
import twinMinnieMouseCakeImage from "@/assets/cake-twin-minnie-mouse.jpg";
import sam8GoldLadderImage from "@/assets/cake-sam-8-gold-ladder.png";
import pinkBlueBrushstrokeImage from "@/assets/cake-pink-blue-brushstroke.jpg";
import peachUnicornNivaImage from "@/assets/cake-peach-unicorn-niva.png";
import storefrontCounterDisplay from "@/assets/storefront-counter-display.jpg";

// Latest studio photos
import dessertRasmalaiTaco from "@/assets/dessert-rasmalai-taco.png";
import cakeLotusBiscoffDrip from "@/assets/cake-lotus-biscoff-drip.png";
import dessertMangoJarFloral from "@/assets/dessert-mango-jar-floral.png";
import cakeEngagedPowderBlue from "@/assets/cake-engaged-powder-blue.jpg";
import masterChefWeddingCake from "@/assets/master-chef-wedding-cake.jpg";

export {
  realStorefrontInterior,
  storefrontExteriorKharadi,
  storefrontCounterDisplay,
  masterChefWeddingCake,
  cakeLotusBiscoffDrip,
};

import rasmalaiImage from "@/assets/cake-rasmalai.png";
import chocolateBerryImage from "@/assets/cake-truffle.png";
import reviewRasmalaiPhoto from "@/assets/review-rasmalai.png";
import reviewChocolatePhoto from "@/assets/review-chocolate.png";
import pinkMarbleImage from "@/assets/cake-pink-marble.png";

// ─────────────────────────────────────────────────────────────────────────────
// BUSINESS IDENTITY — CAKE CRAFTS – CUSTOMISED CAKE STUDIO, KHARADI, PUNE
// ─────────────────────────────────────────────────────────────────────────────

/** Official business name */
export const BUSINESS_NAME = "Cake Crafts – Customised Cake Studio";

/** Short brand name for UI headings */
export const BRAND_SHORT = "Cake Crafts";

/** Local development domain */
export const SITE_URL = "http://localhost:8081";

/** Complete verified single studio address */
export const STORE_ADDRESS =
  "Shop No. 2, Alcon Rethos, EON Free Zone Road, opposite Forest County, Kharadi, Pune, Maharashtra 411014";

/** Verified phone numbers */
export const STORE_PHONE = "+91 85309 14747";
export const ALT_STORE_PHONE = "+91 78752 71027";

/** WhatsApp number (primary order hotline) */
export const WHATSAPP_NUMBER = "918530914747";

/** Instagram handle */
export const INSTAGRAM_HANDLE = "cakecraftspune";
export const INSTAGRAM_URL = "https://www.instagram.com/cakecraftspune/";

/** Opening hours */
export const OPENING_HOURS = "10:00 AM – 11:00 PM, Daily";

export const OPENING_HOURS_STRUCTURED: { day: string; hours: string }[] = [
  { day: "Monday", hours: "10:00 AM – 11:00 PM" },
  { day: "Tuesday", hours: "10:00 AM – 11:00 PM" },
  { day: "Wednesday", hours: "10:00 AM – 11:00 PM" },
  { day: "Thursday", hours: "10:00 AM – 11:00 PM" },
  { day: "Friday", hours: "10:00 AM – 11:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 11:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 11:00 PM" },
];

/** Google Business Profile rating & review count */
export const GOOGLE_RATING = 4.9;
export const GOOGLE_REVIEW_COUNT = "1,000+";

/** Verified Google Maps URL */
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Cake+Crafts+Customised+Cake+Studio+Shop+2+Alcon+Rethos+EON+Free+Zone+Road+Kharadi+Pune+411014";

export const GOOGLE_REVIEWS_URL = GOOGLE_MAPS_URL;

/** Embedded Google Map URL */
export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Cake%20Crafts%20Customised%20Cake%20Studio%20Alcon%20Rethos%20Kharadi%20Pune&t=&z=16&ie=UTF8&iwloc=&output=embed";

/** Coordinates */
export const GEO_COORDS = { lat: 18.553, lng: 73.9412 };

/** Studio services */
export const SERVICES = [
  "In-store pickup & consultation",
  "Swiggy & Zomato Delivery",
  "Custom Birthday & Wedding Cake Design",
  "Bespoke Dessert Catering",
] as const;

export type StoreLocation = {
  id: string;
  name: string;
  rating: number;
  reviewCount: string;
  category: string;
  priceRange?: string;
  address: string;
  area: string;
  phone: string;
  services?: string[];
  googleMapsUrl: string;
  mapEmbedUrl: string;
};

export const storeLocation: StoreLocation = {
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
  mapEmbedUrl: MAP_EMBED_URL,
};

// ─────────────────────────────────────────────────────────────────────────────
// CAKE CATALOGUE — Featuring 100% Real Cake Crafts Creations
// ─────────────────────────────────────────────────────────────────────────────

export const cakeCatalog = [
  {
    id: "master-chef-grand-wedding",
    name: "Grand Floral Arch 2-Tier Wedding Cake",
    description:
      "Handcrafted 2-tier white wedding cake surrounded by a golden hoop floral arch with fresh purple & pink orchids, gold metallic spheres & pearl garlands.",
    image: masterChefWeddingCake,
    estimateFor500g: 1750,
    occasions: ["Wedding", "Anniversary"],
    bestseller: true,
  },
  {
    id: "engaged-powder-blue-2tier",
    name: "Royal 'Engaged' Powder Blue 2-Tier Cake",
    description:
      "Elegant 2-tier white & powder blue engagement cake featuring a gold diamond ring 'Engaged' topper, cascading yellow roses & white baby's breath.",
    image: cakeEngagedPowderBlue,
    estimateFor500g: 1550,
    occasions: ["Wedding", "Anniversary"],
    bestseller: true,
  },
  {
    id: "rasmalai-cream-taco-dessert",
    name: "Gourmet Saffron Rasmalai Cream Taco",
    description:
      "Signature dessert taco crafted from white chocolate, filled with cardamom rasmalai mousse, sliced pistachios & organic rose petals.",
    image: dessertRasmalaiTaco,
    estimateFor500g: 220,
    occasions: ["Just because", "Birthday"],
    bestseller: true,
  },
  {
    id: "lotus-biscoff-caramel-drip",
    name: "Lotus Biscoff Salted Caramel Drip Cake",
    description:
      "Creamy vanilla sponge infused with speculoos Biscoff spread, caramel drip, and topped with crunchy Lotus Biscoff biscuits on a wooden platter.",
    image: cakeLotusBiscoffDrip,
    estimateFor500g: 890,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "peach-unicorn-niva-custom",
    name: "Peach Unicorn Gold Sphere Designer Cake",
    description:
      "Soft peach buttercream cake crowned with a 3D sitting unicorn figurine, golden metallic spheres & custom edible bow plaque ('Happy Birthday Niva!').",
    image: peachUnicornNivaImage,
    estimateFor500g: 1150,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "oh-baby-gold-silhouette-cake",
    name: "Tall 'Oh Baby' Gold Silhouette Shower Cake",
    description:
      "Elegant white & teal cylindrical shower cake featuring a gold mother-to-be silhouette, metallic spheres, gold leaf foil & white roses.",
    image: ohBabyShowerCakeImage,
    estimateFor500g: 1290,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "twin-minnie-mouse-double-cake",
    name: "Twin Minnie Mouse Double Celebration Cake",
    description:
      "Twin lilac & blush pink birthday cakes connected by a 3D colorful butterfly arch with handcrafted 3D Minnie Mouse figurines.",
    image: twinMinnieMouseCakeImage,
    estimateFor500g: 1650,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "sam8-sky-blue-gold-ball-2tier",
    name: "Royal 2-Tier Sky Blue Gold Ball Birthday Cake",
    description:
      "2-tier sky blue & quilted white cake decorated with gold metallic spheres, gold ladder & custom 3D 'SAM 8' lettering.",
    image: sam8GoldLadderImage,
    estimateFor500g: 1450,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "pink-blue-brushstroke-pastels",
    name: "Pink & Sky Blue Pastel Brushstroke Cake",
    description:
      "Smooth white cream cake decorated with artistic pink & sky blue painterly brushstrokes, topped with a gold mirror 'Happy Birthday' topper.",
    image: pinkBlueBrushstrokeImage,
    estimateFor500g: 920,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "french-macarons-assorted-box",
    name: "Artisan French Macarons Gift Box",
    description:
      "Assorted box of handcrafted French almond macarons in pink strawberry, teal coconut, vanilla bean, chocolate fudge & mocha flavours.",
    image: frenchMacaronsImage,
    estimateFor500g: 350,
    occasions: ["Just because", "Anniversary", "Birthday"],
    bestseller: true,
  },
  {
    id: "blue-orchid-chocolate-bouquet",
    name: "Exotic Blue Orchid & Chocolate Gift Bouquet",
    description:
      "Stunning blue orchid flower bouquet paired with Cadbury Dairy Milk chocolates & white baby's breath — perfect gift combo for celebrations.",
    image: blueOrchidBouquetImage,
    estimateFor500g: 650,
    occasions: ["Anniversary", "Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "rainbow-unicorn-2tier",
    name: "Magical 2-Tier Rainbow Unicorn Cake",
    description:
      "Handcrafted 2-tier pastel rainbow birthday cake crowned with a 3D golden unicorn horn, pastel sugar roses, rainbow arch & custom 3D name plaque.",
    image: rainbowUnicornImage,
    estimateFor500g: 1390,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "half-way-to-one-milestone",
    name: "Half-Way To One 6-Month Milestone Cake",
    description:
      "Charming turquoise & white 3D half-cake design with tall candle topper, edible sugar sprinkles & gold 'Half Way to One' ribbon plaque.",
    image: halfWayToOneImage,
    estimateFor500g: 880,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "teddy-bear-cloud-1st-bday",
    name: "Teddy Bear & Cloud First Birthday Cake",
    description:
      "Sky-blue tall designer cake adorned with a handcrafted 3D teddy bear holding baby bear, blue isomalt crystal lollipops & wooden ladder.",
    image: teddyBearFirstBdayImage,
    estimateFor500g: 1180,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "gourmet-mango-cheesecake-jar",
    name: "Gourmet Alphonso Mango Cheesecake Jar",
    description:
      "Luscious multi-layer dessert jar filled with pure Alphonso mango pulp, velvet cream cheese mousse, crushed cookie crust & fresh mint leaves.",
    image: dessertMangoJarFloral,
    estimateFor500g: 240,
    occasions: ["Just because", "Birthday"],
    bestseller: true,
  },
  {
    id: "champagne-gold-luxury",
    name: "Royal Champagne Gold & Ruby Designer Cake",
    description:
      "Handcrafted tall cream cake featuring rich ruby velvet texture, gold leaf fault line edging, gold metallic spheres, isomalt glass crystal crest & mini champagne bottle accent.",
    image: champagneGoldCakeImage,
    estimateFor500g: 1350,
    occasions: ["Birthday", "Anniversary", "Wedding"],
    bestseller: true,
  },
  {
    id: "cookies-cream-oreo",
    name: "Signature Cookies & Cream Oreo Cake",
    description:
      "Multi-layered dark chocolate sponge filled with crunchy crushed Oreos and fluffy vanilla cream frosting, topped with whole Oreos & chocolate crumbs.",
    image: cookiesCreamCakeImage,
    estimateFor500g: 850,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "bt21-ovee-custom",
    name: "Custom BT21 Character Theme Birthday Cake",
    description:
      "Bespoke lavender & blush pink fondant cake with handcrafted 3D BT21 character figurines (Tata, Mang, RJ, Cooky, Shooky, Chimmy, Koya) and custom 3D name plaque.",
    image: bt21OveeCakeImage,
    estimateFor500g: 1280,
    occasions: ["Birthday", "Just because"],
    bestseller: true,
  },
  {
    id: "red-velvet-heart-gourmet",
    name: "Red Velvet Heart Cake",
    description:
      "Heart-shaped 100% eggless red velvet cake with smooth cream cheese piping and soft cake crumbs.",
    image: redVelvetHeartCakeImage,
    estimateFor500g: 890,
    occasions: ["Anniversary", "Birthday", "Just because"],
    bestseller: true,
  },
] as const;

export const cakeWeights = ["500 g", "1 kg"] as const;
export type CakeWeight = (typeof cakeWeights)[number];

export const customCakeFlavours = [
  "Belgian Chocolate Truffle",
  "Fresh Fruit & Cream",
  "Lotus Biscoff Caramel",
  "Dutch Chocolate Fudge",
  "Red Velvet Cheese",
  "Saffron Rasmalai Fusion",
  "Cookies & Cream Oreo",
  "Alphonso Mango Mousse",
] as const;

export const customCakeFrostings = [
  "Smooth Fresh Whipped Cream",
  "Rich Chocolate Ganache",
  "Silky Buttercream",
  "Pastel Fondant Finish",
] as const;

export const cakeOrderItemSchema = z.object({
  productId: z.string(),
  weight: z.enum(cakeWeights),
  quantity: z.number().int().positive().default(1),
});

export const cakeOrderRequestSchema = z.object({
  customerName: z.string().trim().min(2, "Name must be at least 2 characters."),
  customerEmail: z.string().trim().email("Please enter a valid email address."),
  customerPhone: z.string().trim().min(10, "Please enter a valid phone number."),
  deliveryAddress: z.string().trim().optional(),
  requestedDate: z.string().optional(),
  customerNote: z.string().trim().optional(),
  items: z.array(cakeOrderItemSchema).min(1, "Please select at least one cake."),
});

export type CakeOrderRequestInput = z.infer<typeof cakeOrderRequestSchema>;

export function formatRupees(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export type CustomerReview = {
  id: string;
  author: string;
  locationId: string;
  locationName: string;
  rating: number;
  date: string;
  comment: string;
  cakeOrdered?: string;
  verified: boolean;
  photoUrl?: string;
  source: "google" | "justdial" | "website";
  sourceUrl: string;
};

export const customerReviews: CustomerReview[] = [
  {
    id: "rev-cc-1",
    author: "Arjun M.",
    locationId: "kharadi-studio",
    locationName: "Kharadi, Pune",
    rating: 5,
    date: "Recent",
    comment:
      "Ordered a customised cake for my daughter's birthday from Cake Crafts in Kharadi. The design was exactly what we asked for and the taste was delicious. Highly recommend!",
    cakeOrdered: "Cookies & Cream Oreo Cake",
    verified: true,
    photoUrl: reviewRasmalaiPhoto,
    source: "google",
    sourceUrl: GOOGLE_MAPS_URL,
  },
  {
    id: "rev-cc-2",
    author: "Priya S.",
    locationId: "kharadi-studio",
    locationName: "Kharadi, Pune",
    rating: 5,
    date: "Recent",
    comment:
      "Amazing chocolate truffle cake! Super fresh and 100% eggless. The staff at Alcon Rethos shop in Kharadi was very friendly and helped us choose the perfect design.",
    cakeOrdered: "Dark Chocolate Truffle Cake",
    verified: true,
    photoUrl: reviewChocolatePhoto,
    source: "google",
    sourceUrl: GOOGLE_MAPS_URL,
  },
  {
    id: "rev-cc-3",
    author: "Sneha K.",
    locationId: "kharadi-studio",
    locationName: "Kharadi, Pune",
    rating: 5,
    date: "Recent",
    comment:
      "Cake Crafts made the most beautiful BT21 custom theme cake for my sister's birthday! Perfect finish and moist sponge. Will definitely order again.",
    cakeOrdered: "Custom BT21 Theme Birthday Cake",
    verified: true,
    source: "google",
    sourceUrl: GOOGLE_MAPS_URL,
  },
];

export function getCake(id: string) {
  return cakeCatalog.find((cake) => cake.id === id);
}

export function estimateLineTotal(
  cakeId: string,
  weight: CakeWeight,
  quantity: number = 1,
): number {
  const cake = getCake(cakeId);
  if (!cake) return 0;
  const multiplier = weight === "1 kg" ? 1.75 : 1.0;
  return Math.round(cake.estimateFor500g * multiplier * quantity);
}

export function estimateCartTotal(
  items: Array<{ productId: string; weight: CakeWeight; quantity: number }>,
): number {
  return items.reduce(
    (total, item) => total + estimateLineTotal(item.productId, item.weight, item.quantity),
    0,
  );
}
