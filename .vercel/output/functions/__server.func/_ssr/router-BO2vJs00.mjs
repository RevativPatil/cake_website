import { a as GOOGLE_MAPS_URL, i as GEO_COORDS, m as STORE_PHONE, n as BRAND_SHORT, o as GOOGLE_RATING, p as STORE_ADDRESS, r as BUSINESS_NAME } from "./cake-store-BFG24zfK.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BO2vJs00.js
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-DqgOQrZE.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error("Root boundary error:", error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Cake Crafts – Customised Cake Studio | Kharadi, Pune | Top-Rated Cake Studio" },
			{
				name: "description",
				content: "Cake Crafts is a premier customised cake studio in Kharadi, Pune (Shop No. 2, Alcon Rethos, EON Free Zone Road). Specialising in designer birthday cakes, walnut brownies, chocolate truffle cakes & eggless creations. Rated 4.9⭐ on Google."
			},
			{
				name: "keywords",
				content: "cake crafts kharadi, customised cake studio pune, cake shop kharadi, designer cakes kharadi, eggless cakes pune, walnut brownie kharadi, chocolate truffle cake pune, cake delivery kharadi eon free zone"
			},
			{
				name: "author",
				content: "Cake Crafts – Customised Cake Studio"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				name: "googlebot",
				content: "index, follow"
			},
			{
				name: "geo.region",
				content: "IN-MH"
			},
			{
				name: "geo.placename",
				content: "Kharadi, Pune, Maharashtra, India"
			},
			{
				name: "geo.position",
				content: "18.5530;73.9412"
			},
			{
				name: "ICBM",
				content: "18.5530, 73.9412"
			},
			{
				property: "og:site_name",
				content: "Cake Crafts – Customised Cake Studio"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				property: "og:title",
				content: "Cake Crafts – Customised Cake Studio | Kharadi, Pune"
			},
			{
				property: "og:description",
				content: "Customised cake studio in Kharadi, Pune. Shop No. 2, Alcon Rethos, EON Free Zone Road. Rated 4.9⭐ on Google Business Profile."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Cake Crafts – Customised Cake Studio | Kharadi, Pune"
			},
			{
				name: "twitter:description",
				content: "Customised cakes, walnut brownies & eggless creations in Kharadi, Pune. Rated 4.9⭐ on Google Business Profile."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "bottom-right" })]
	});
}
var bakerySchema = {
	"@context": "https://schema.org",
	"@type": "Bakery",
	"@id": `${GOOGLE_MAPS_URL}#bakery`,
	name: BUSINESS_NAME,
	image: "/og-image.png",
	description: `${BUSINESS_NAME} — Top-rated customised cake studio in Kharadi, Pune. Fresh eggless and vegetarian cakes, designer birthday cakes, wedding cakes, walnut brownies, chocolate truffle cakes, and same-day delivery. Located at Alcon Rethos, opposite Forest County, EON Free Zone Road.`,
	priceRange: "₹180–₹2,500+",
	telephone: STORE_PHONE,
	keywords: [
		"cake shop near me",
		"customised cake studio Kharadi",
		"cake shop Kharadi Pune",
		"best cake shop in Pune",
		"eggless cake shop near me",
		"custom birthday cake Pune",
		"same day cake delivery Kharadi",
		"walnut brownie Kharadi",
		"chocolate truffle cake Pune",
		"wedding cake Pune",
		"Cake Crafts Pune",
		"cakecraftspune"
	],
	areaServed: [
		"Kharadi, Pune",
		"Viman Nagar, Pune",
		"Wagholi, Pune",
		"Hadapsar, Pune",
		"Pune, Maharashtra"
	],
	servesCuisine: [
		"Bakery",
		"Custom Cakes",
		"Designer Birthday Cakes",
		"Eggless Cakes",
		"Brownies",
		"Pastries",
		"Desserts"
	],
	address: {
		"@type": "PostalAddress",
		streetAddress: "Shop No. 2, Alcon Rethos, EON Free Zone Road, opposite Forest County",
		addressLocality: "Kharadi, Pune",
		addressRegion: "Maharashtra",
		postalCode: "411014",
		addressCountry: "IN"
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: GEO_COORDS.lat,
		longitude: GEO_COORDS.lng
	},
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: String(GOOGLE_RATING),
		reviewCount: "1,000+".replace(/[^0-9]/g, "") || "1000",
		bestRating: "5",
		worstRating: "1"
	},
	openingHoursSpecification: [{
		"@type": "OpeningHoursSpecification",
		dayOfWeek: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday"
		],
		opens: "10:00",
		closes: "23:00"
	}]
};
var faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: `How far in advance should I place a custom cake request at ${BRAND_SHORT}?`,
			acceptedAnswer: {
				"@type": "Answer",
				text: "For standard menu cakes, same-day delivery or pickup is often available (with 2-4 hours advance notice). For custom bespoke designs or multi-tiered cakes, we recommend placing your request 24 to 48 hours in advance."
			}
		},
		{
			"@type": "Question",
			name: "Are eggless cake options available?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Yes! Cake Crafts offers 100% pure eggless and vegetarian cake options across our entire menu."
			}
		},
		{
			"@type": "Question",
			name: "Can I collect my order directly from the store or order on Swiggy / Zomato?",
			acceptedAnswer: {
				"@type": "Answer",
				text: `Absolutely! You can choose in-store pickup at our Kharadi location (${STORE_ADDRESS}), order on Swiggy and Zomato, or contact us directly on WhatsApp (+91 85309 14747).`
			}
		},
		{
			"@type": "Question",
			name: "What are the opening hours?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "We are open daily from 10:00 AM to 11:00 PM. You can reach us on WhatsApp for orders and custom cake enquiries."
			}
		}
	]
};
var itemListSchema = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			item: {
				"@type": "Product",
				name: "Royal Champagne Gold & Ruby Designer Cake",
				description: "Handcrafted tall cream cake featuring rich ruby velvet texture, gold leaf fault line edging, gold metallic spheres & mini champagne bottle accent.",
				offers: {
					"@type": "Offer",
					price: "1350",
					priceCurrency: "INR",
					availability: "https://schema.org/InStock"
				}
			}
		},
		{
			"@type": "ListItem",
			position: 2,
			item: {
				"@type": "Product",
				name: "Signature Cookies & Cream Oreo Cake",
				description: "Multi-layered dark chocolate sponge filled with crunchy crushed Oreos and fluffy vanilla cream frosting.",
				offers: {
					"@type": "Offer",
					price: "850",
					priceCurrency: "INR",
					availability: "https://schema.org/InStock"
				}
			}
		},
		{
			"@type": "ListItem",
			position: 3,
			item: {
				"@type": "Product",
				name: "Custom BT21 Character Theme Birthday Cake ('OVEE')",
				description: "Bespoke lavender & blush pink fondant cake with handcrafted 3D BT21 character figurines.",
				offers: {
					"@type": "Offer",
					price: "1280",
					priceCurrency: "INR",
					availability: "https://schema.org/InStock"
				}
			}
		},
		{
			"@type": "ListItem",
			position: 4,
			item: {
				"@type": "Product",
				name: "Gourmet Red Velvet Heart Cake",
				description: "Heart-shaped 100% eggless red velvet sponge layered with silky cream cheese frosting border.",
				offers: {
					"@type": "Offer",
					price: "890",
					priceCurrency: "INR",
					availability: "https://schema.org/InStock"
				}
			}
		},
		{
			"@type": "ListItem",
			position: 5,
			item: {
				"@type": "Product",
				name: "Double Chocolate Chocochip Rosette Cake",
				description: "Decadent Belgian chocolate ganache cake surrounded by dark & white chocolate chips.",
				offers: {
					"@type": "Offer",
					price: "820",
					priceCurrency: "INR",
					availability: "https://schema.org/InStock"
				}
			}
		}
	]
};
var $$splitComponentImporter = () => import("./routes-CRnYjTDU.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: `${BUSINESS_NAME} | Best Customised Cake Studio in Kharadi, Pune | 100% Eggless` },
			{
				name: "description",
				content: `${BUSINESS_NAME} — Pune's top-rated 100% eggless customised cake studio located exclusively at Shop No. 2, Alcon Rethos, EON Free Zone Road, Kharadi, Pune. Specialising in 2-tier wedding cakes, Lotus Biscoff drip cakes, rasmalai tacos, dessert jars & same-day delivery. Call/WhatsApp ${STORE_PHONE}!`
			},
			{
				name: "keywords",
				content: "cake crafts kharadi, customised cake studio pune, cake shop kharadi, designer birthday cakes pune, eggless cakes pune, lotus biscoff cake kharadi, wedding cake pune, cake delivery kharadi eon free zone, rasmalai taco pune"
			},
			{
				name: "author",
				content: BUSINESS_NAME
			}
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(bakerySchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqSchema)
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(itemListSchema)
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
