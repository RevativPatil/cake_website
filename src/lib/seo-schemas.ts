import {
  BRAND_SHORT,
  BUSINESS_NAME,
  GEO_COORDS,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  STORE_ADDRESS,
  STORE_PHONE,
  GOOGLE_MAPS_URL,
} from "./cake-store";

export const bakerySchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "@id": `${GOOGLE_MAPS_URL}#bakery`,
  name: BUSINESS_NAME,
  image: "/og-image.png",
  description:
    `${BUSINESS_NAME} — Top-rated customised cake studio in Kharadi, Pune. Fresh eggless and vegetarian cakes, designer birthday cakes, wedding cakes, walnut brownies, chocolate truffle cakes, and same-day delivery. Located at Alcon Rethos, opposite Forest County, EON Free Zone Road.`,
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
    "cakecraftspune",
  ],
  areaServed: [
    "Kharadi, Pune",
    "Viman Nagar, Pune",
    "Wagholi, Pune",
    "Hadapsar, Pune",
    "Pune, Maharashtra",
  ],
  servesCuisine: [
    "Bakery",
    "Custom Cakes",
    "Designer Birthday Cakes",
    "Eggless Cakes",
    "Brownies",
    "Pastries",
    "Desserts",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 2, Alcon Rethos, EON Free Zone Road, opposite Forest County",
    addressLocality: "Kharadi, Pune",
    addressRegion: "Maharashtra",
    postalCode: "411014",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO_COORDS.lat,
    longitude: GEO_COORDS.lng,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(GOOGLE_RATING),
    reviewCount: GOOGLE_REVIEW_COUNT.replace(/[^0-9]/g, "") || "1000",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "23:00",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: `How far in advance should I place a custom cake request at ${BRAND_SHORT}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: "For standard menu cakes, same-day delivery or pickup is often available (with 2-4 hours advance notice). For custom bespoke designs or multi-tiered cakes, we recommend placing your request 24 to 48 hours in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Are eggless cake options available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Cake Crafts offers 100% pure eggless and vegetarian cake options across our entire menu.",
      },
    },
    {
      "@type": "Question",
      name: "Can I collect my order directly from the store or order on Swiggy / Zomato?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Absolutely! You can choose in-store pickup at our Kharadi location (${STORE_ADDRESS}), order on Swiggy and Zomato, or contact us directly on WhatsApp (+91 85309 14747).`,
      },
    },
    {
      "@type": "Question",
      name: "What are the opening hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are open daily from 10:00 AM to 11:00 PM. You can reach us on WhatsApp for orders and custom cake enquiries.",
      },
    },
  ],
};

export const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Royal Champagne Gold & Ruby Designer Cake",
        description:
          "Handcrafted tall cream cake featuring rich ruby velvet texture, gold leaf fault line edging, gold metallic spheres & mini champagne bottle accent.",
        offers: {
          "@type": "Offer",
          price: "1350",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Signature Cookies & Cream Oreo Cake",
        description:
          "Multi-layered dark chocolate sponge filled with crunchy crushed Oreos and fluffy vanilla cream frosting.",
        offers: {
          "@type": "Offer",
          price: "850",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Custom BT21 Character Theme Birthday Cake ('OVEE')",
        description:
          "Bespoke lavender & blush pink fondant cake with handcrafted 3D BT21 character figurines.",
        offers: {
          "@type": "Offer",
          price: "1280",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Gourmet Red Velvet Heart Cake",
        description:
          "Heart-shaped 100% eggless red velvet sponge layered with silky cream cheese frosting border.",
        offers: {
          "@type": "Offer",
          price: "890",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Product",
        name: "Double Chocolate Chocochip Rosette Cake",
        description:
          "Decadent Belgian chocolate ganache cake surrounded by dark & white chocolate chips.",
        offers: {
          "@type": "Offer",
          price: "820",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
};
