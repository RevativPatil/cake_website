import { r as __toESM } from "../_runtime.mjs";
import { S as storeLocation, _ as cakeWeights, a as GOOGLE_MAPS_URL, b as estimateLineTotal, c as INSTAGRAM_HANDLE, d as OPENING_HOURS, f as SERVICES, g as cakeCatalog, h as WHATSAPP_NUMBER, l as INSTAGRAM_URL, m as STORE_PHONE, n as BRAND_SHORT, o as GOOGLE_RATING, p as STORE_ADDRESS, r as BUSINESS_NAME, s as GOOGLE_REVIEWS_URL, t as ALT_STORE_PHONE, u as MAP_EMBED_URL, v as cake_lotus_biscoff_drip_default, x as formatRupees, y as customerReviews } from "./cake-store-BFG24zfK.mjs";
import { _ as require_jsx_runtime, a as AccordionTrigger$1, f as Slot, i as AccordionItem$1, n as AccordionContent$1, r as AccordionHeader, t as Accordion$1, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as ArrowRight, S as ArrowUp, _ as Clock, a as Sparkles, b as CakeSlice, c as Quote, d as Menu, f as MapPin, g as ExternalLink, h as Eye, i as Star, l as Phone, m as Heart, n as WandSparkles, o as ShieldCheck, p as Instagram, r as Truck, s as Search, t as X, u as MessageSquare, v as CircleCheck, x as Award, y as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQe9NwGw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var storefront_real_interior_default = "/assets/storefront-real-interior-C-7fd5Xn.jpg";
var storefront_exterior_kharadi_default = "/assets/storefront-exterior-kharadi-CQDFmndf.jpg";
var storefront_counter_display_default = "/assets/storefront-counter-display-66NQ-Odj.jpg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
var occasions = [
	"All Creations",
	"Wedding & Tiered",
	"Birthday Showstoppers",
	"Dessert Tacos & Jars",
	"Floral & Gift Combos",
	"Anniversary & Romantic"
];
function triggerConfetti() {
	if (typeof window === "undefined") return;
	const count = 35;
	for (let i = 0; i < count; i++) {
		const el = document.createElement("div");
		el.className = "fixed z-50 pointer-events-none rounded-full animate-ping";
		const colors = [
			"#D4AF37",
			"#E11D48",
			"#10B981",
			"#F59E0B",
			"#8B5CF6",
			"#3B82F6"
		];
		const color = colors[Math.floor(Math.random() * colors.length)] ?? "#D4AF37";
		const size = Math.random() * 9 + 6;
		el.style.width = `${size}px`;
		el.style.height = `${size}px`;
		el.style.backgroundColor = color;
		el.style.left = `${Math.random() * 80 + 10}vw`;
		el.style.top = `${Math.random() * 40 + 20}vh`;
		el.style.transition = "all 1s ease-out";
		document.body.appendChild(el);
		setTimeout(() => el.remove(), 1e3);
	}
}
function IndexPage() {
	const [selectedOccasion, setSelectedOccasion] = (0, import_react.useState)("All Creations");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [bestsellersOnly, setBestsellersOnly] = (0, import_react.useState)(false);
	const [mobileNavOpen, setMobileNavOpen] = (0, import_react.useState)(false);
	const [customBuilderOpen, setCustomBuilderOpen] = (0, import_react.useState)(false);
	const [selectedCakeModal, setSelectedCakeModal] = (0, import_react.useState)(null);
	const [modalWeight, setModalWeight] = (0, import_react.useState)("500 g");
	const [builderOccasion, setBuilderOccasion] = (0, import_react.useState)("Birthday");
	const [builderFlavour, setBuilderFlavour] = (0, import_react.useState)("Belgian Chocolate Truffle");
	const [builderSponge, setBuilderSponge] = (0, import_react.useState)("Belgian Dark Cocoa Sponge");
	const [builderFilling, setBuilderFilling] = (0, import_react.useState)("Lotus Biscoff Speculoos Crunch");
	const [builderFrosting, setBuilderFrosting] = (0, import_react.useState)("Smooth Fresh Whipped Cream");
	const [builderWeight, setBuilderWeight] = (0, import_react.useState)("500 g");
	const [builderNameTag, setBuilderNameTag] = (0, import_react.useState)("");
	const [quizOccasion, setQuizOccasion] = (0, import_react.useState)("Birthday");
	const [quizFlavor, setQuizFlavor] = (0, import_react.useState)("Chocolate");
	const [quizRecommendedCake, setQuizRecommendedCake] = (0, import_react.useState)(null);
	const [reviewsList, setReviewsList] = (0, import_react.useState)(customerReviews);
	const [isReviewDialogOpen, setIsReviewDialogOpen] = (0, import_react.useState)(false);
	const [reviewAuthor, setReviewAuthor] = (0, import_react.useState)("");
	const [reviewRating, setReviewRating] = (0, import_react.useState)(5);
	const [reviewComment, setReviewComment] = (0, import_react.useState)("");
	const [reviewCakeOrdered, setReviewCakeOrdered] = (0, import_react.useState)("");
	const [reviewPhotoUrl, setReviewPhotoUrl] = (0, import_react.useState)(null);
	const [activeStudioPhoto, setActiveStudioPhoto] = (0, import_react.useState)(storefront_exterior_kharadi_default);
	const [scrollProgress, setScrollProgress] = (0, import_react.useState)(0);
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [showBackToTop, setShowBackToTop] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
			if (totalHeight > 0) {
				const progress = window.scrollY / totalHeight * 100;
				setScrollProgress(progress);
			}
			setIsScrolled(window.scrollY > 40);
			setShowBackToTop(window.scrollY > 400);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const handleReviewSubmit = (e) => {
		e.preventDefault();
		if (!reviewAuthor.trim() || !reviewComment.trim()) {
			toast.error("Please enter your name and review comment");
			return;
		}
		const newReview = {
			id: `rev-${Date.now()}`,
			author: reviewAuthor.trim(),
			locationId: storeLocation.id,
			locationName: storeLocation.area,
			rating: reviewRating,
			date: "Just now",
			comment: reviewComment.trim(),
			cakeOrdered: reviewCakeOrdered.trim() || "Artisan Cake",
			verified: true,
			source: "website",
			sourceUrl: GOOGLE_MAPS_URL,
			...reviewPhotoUrl ? { photoUrl: reviewPhotoUrl } : {}
		};
		setReviewsList((prev) => [newReview, ...prev]);
		setIsReviewDialogOpen(false);
		setReviewAuthor("");
		setReviewComment("");
		setReviewCakeOrdered("");
		setReviewPhotoUrl(null);
		triggerConfetti();
		toast.success("Thank you! Your review has been added to our studio feed.");
	};
	const filteredCakes = (0, import_react.useMemo)(() => {
		return cakeCatalog.filter((cake) => {
			if (selectedOccasion !== "All Creations") {
				const cakeOccasions = cake.occasions;
				if (selectedOccasion === "Wedding & Tiered") {
					if (!cakeOccasions.includes("Wedding") && !cake.name.toLowerCase().includes("2-tier")) return false;
				} else if (selectedOccasion === "Birthday Showstoppers") {
					if (!cakeOccasions.includes("Birthday")) return false;
				} else if (selectedOccasion === "Dessert Tacos & Jars") {
					if (!cake.name.toLowerCase().includes("taco") && !cake.name.toLowerCase().includes("jar")) return false;
				} else if (selectedOccasion === "Floral & Gift Combos") {
					if (!cake.name.toLowerCase().includes("bouquet") && !cake.name.toLowerCase().includes("macaron") && !cake.name.toLowerCase().includes("arch")) return false;
				} else if (selectedOccasion === "Anniversary & Romantic") {
					if (!cakeOccasions.includes("Anniversary") && !cake.name.toLowerCase().includes("heart")) return false;
				}
			}
			if (bestsellersOnly && !("bestseller" in cake && cake.bestseller)) return false;
			if (searchQuery.trim()) {
				const query = searchQuery.toLowerCase();
				const matchName = cake.name.toLowerCase().includes(query);
				const matchDesc = cake.description.toLowerCase().includes(query);
				if (!matchName && !matchDesc) return false;
			}
			return true;
		});
	}, [
		selectedOccasion,
		bestsellersOnly,
		searchQuery
	]);
	const runQuizRecommendation = () => {
		let match = cakeCatalog.find((c) => c.name.toLowerCase().includes(quizFlavor.toLowerCase()));
		if (!match) match = cakeCatalog[0];
		setQuizRecommendedCake(match);
		setSelectedCakeModal(match);
		triggerConfetti();
		toast.success(`We found your dream cake: ${match.name}!`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-[#FFFDFB] dark:bg-[#140F0D] text-foreground transition-colors duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-rose-600 via-amber-500 to-emerald-500 transition-all duration-150",
				style: { width: `${scrollProgress}%` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: `sticky top-0 z-40 border-b transition-all duration-300 ${isScrolled ? "border-border/80 bg-background/95 backdrop-blur-md shadow-md py-3" : "border-border/40 bg-background/80 backdrop-blur-sm py-5 lg:py-6"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#home",
								className: "flex items-center gap-3 group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-vault-rose to-rose-700 text-white shadow-lg transition-transform duration-300 group-hover:scale-105",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, {
										className: "size-6",
										strokeWidth: 2.2
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-col leading-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "vault-serif-luxury text-[22px] sm:text-[24px] font-bold tracking-tight text-primary",
										children: BRAND_SHORT
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 text-[9px] font-bold uppercase tracking-[0.25em] text-vault-rose truncate",
										children: "100% Eggless Customised Cake Studio · Kharadi"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#find-us",
								className: "hidden xl:inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs text-amber-900 dark:text-amber-300 font-medium transition-all hover:bg-amber-500/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-vault-rose shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate max-w-[260px] font-semibold",
									children: "Alcon Rethos, Kharadi Studio"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							"aria-label": "Main navigation",
							className: "hidden items-center gap-8 text-[14px] font-semibold text-muted-foreground lg:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "transition-colors hover:text-vault-rose",
									href: "#cakes",
									children: "Menu Catalogue"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setCustomBuilderOpen(true),
									className: "inline-flex items-center gap-1.5 text-vault-rose transition-colors hover:text-rose-700 font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bespoke Customizer" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "transition-colors hover:text-vault-rose",
									href: "#find-us",
									children: "Studio Location"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "transition-colors hover:text-vault-rose flex items-center gap-1",
									href: "#reviews",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reviews" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400 group-hover:bg-amber-500/30",
										children: [GOOGLE_RATING, "⭐"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "transition-colors hover:text-vault-rose",
									href: "#faq",
									children: "FAQ"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => setIsReviewDialogOpen(true),
									className: "hidden xl:inline-flex h-10 gap-1.5 border-vault-rose/30 bg-vault-rose/10 px-4 text-xs font-bold text-vault-rose hover:bg-vault-rose hover:text-white transition-all rounded-xl btn-spring",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-vault-rose" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Review Studio" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "hidden sm:inline-flex h-10 gap-2 rounded-xl bg-[#10B981] hover:bg-[#059669] px-4.5 text-xs font-extrabold text-white shadow-sm transition-all btn-spring border-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order or customize a cake!`)}`,
										target: "_blank",
										rel: "noreferrer",
										onClick: () => triggerConfetti(),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp Order" })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "h-10 gap-2 rounded-xl bg-black text-white hover:bg-zinc-800 px-4 text-xs font-extrabold shadow-md shadow-black/20 transition-all hover:scale-105 active:scale-95 border border-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${STORE_PHONE}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call Studio" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "hidden xl:inline text-[11px] opacity-90",
												children: [
													"(",
													STORE_PHONE,
													")"
												]
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => setMobileNavOpen(true),
									className: "h-10 size-10 lg:hidden rounded-xl btn-spring",
									"aria-label": "Open navigation menu",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: mobileNavOpen,
				onOpenChange: setMobileNavOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "right",
					className: "w-[300px] sm:w-[360px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
							className: "border-b border-border pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
								className: "vault-serif-luxury text-2xl font-bold text-primary flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, { className: "size-6 text-vault-rose" }), BRAND_SHORT]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, {
								className: "text-xs text-muted-foreground",
								children: "Shop No. 2, Alcon Rethos, Kharadi, Pune"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 py-6 text-sm font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#cakes",
									onClick: () => setMobileNavOpen(false),
									className: "flex items-center justify-between border-b border-border/60 pb-3 text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Menu Catalogue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted-foreground" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										setMobileNavOpen(false);
										setCustomBuilderOpen(true);
									},
									className: "flex items-center justify-between border-b border-border/60 pb-3 text-left text-vault-rose font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-4" }), " Bespoke Customizer"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#find-us",
									onClick: () => setMobileNavOpen(false),
									className: "flex items-center justify-between border-b border-border/60 pb-3 text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kharadi Studio Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted-foreground" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#reviews",
									onClick: () => setMobileNavOpen(false),
									className: "flex items-center justify-between border-b border-border/60 pb-3 text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Customer Reviews (",
										GOOGLE_RATING,
										"⭐)"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted-foreground" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#faq",
									onClick: () => setMobileNavOpen(false),
									className: "flex items-center justify-between border-b border-border/60 pb-3 text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FAQ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted-foreground" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto space-y-3 pt-6 border-t border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "w-full h-11 gap-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-xs font-extrabold text-white shadow-sm border-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order a cake!`)}`,
									target: "_blank",
									rel: "noreferrer",
									onClick: () => triggerConfetti(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), " Order on WhatsApp"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "w-full h-11 gap-2 rounded-xl bg-black text-white hover:bg-zinc-800 shadow-md shadow-black/20 text-xs font-extrabold transition-all border border-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${STORE_PHONE}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
										" Call Studio (",
										STORE_PHONE,
										")"
									]
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "home",
				className: "relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 min-h-[85vh] flex items-center scroll-reveal-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-0 overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: storefront_counter_display_default,
							alt: "Cake Crafts Bakery Studio Display Counter",
							className: "size-full object-cover object-center opacity-100 dark:opacity-85 filter brightness-[0.95] contrast-[1.05] blur-[3px] scale-[1.02]",
							fetchPriority: "high"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/90 via-background/65 to-transparent dark:from-[#140F0D]/90 dark:via-[#140F0D]/70 dark:to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background dark:from-[#140F0D]/40 dark:to-[#140F0D]" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 relative z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-12 gap-10 lg:gap-14 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7 space-y-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-amber-500/35 bg-amber-500/15 px-4 py-1 text-xs font-bold text-amber-950 dark:text-amber-200 backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-amber-500 animate-spin-slow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Freshly Baked Daily in Kharadi · 100% Pure Eggless" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "vault-serif-luxury text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-primary",
									children: [
										"Freshly Baked Every Morning.",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block vault-handwritten text-2xl sm:text-3xl text-vault-rose font-normal mt-1",
											children: "100% Pure Eggless Customised Cakes in Kharadi."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "max-w-[660px] text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium",
									children: [
										"Welcome to ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: BUSINESS_NAME }),
										" at Shop No. 2, Alcon Rethos, Kharadi. Every cake is baked fresh to order with real Belgian dark chocolate, Alphonso mangoes, organic saffron, and pure butter — zero egg substitutes, premixes, or preservatives."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-rose-500/30 bg-background/90 dark:bg-card/90 p-4 max-w-[620px] flex items-center gap-3.5 shadow-md backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-vault-rose to-rose-700 text-white font-bold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-5 fill-white" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "vault-handwritten text-lg text-foreground/95 leading-snug",
										children: "\"A celebration cake should be genuine, fresh, and delicious. We bake every order from scratch in our Kharadi studio.\""
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[10px] font-bold text-vault-rose uppercase tracking-wider",
										children: "— Master Pastry Chef · Cake Crafts Kharadi"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2.5 pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-900 dark:text-emerald-300",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-emerald-600 dark:text-emerald-400" }), " 100% Pure Eggless"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-bold text-amber-900 dark:text-amber-300",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-3.5 text-amber-500" }), " Express Delivery in Kharadi"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 text-xs font-bold text-rose-900 dark:text-rose-300",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-rose-500 text-rose-500" }), " Rated 4.9★ on Google"]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "h-12 gap-2 rounded-xl px-7 text-xs font-extrabold bg-[#10B981] hover:bg-[#059669] text-white shadow-md btn-spring border-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order or inquire about a custom cake!`)}`,
											target: "_blank",
											rel: "noreferrer",
											onClick: () => triggerConfetti(),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), " Order on WhatsApp"]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										onClick: () => setCustomBuilderOpen(true),
										className: "h-12 gap-2 rounded-xl px-6 text-xs font-bold border-amber-600/35 bg-amber-500/10 text-amber-950 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-all backdrop-blur-xs btn-spring",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-4" }), " Design Custom Cake"]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-5 relative perspective-container",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-amber-500/35 bg-card/90 backdrop-blur-md p-6 shadow-2xl card-3d glare-sweep relative overflow-hidden animate-swing-revolve",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-12 right-4 z-20 pointer-events-none",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-black/75 text-amber-300 px-3 py-1 text-[10px] font-bold backdrop-blur-md shadow-lg border border-amber-400/30 animate-float-bubble",
											children: "🍫 70% Belgian Dark Cocoa"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-20 left-4 z-20 pointer-events-none",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-black/75 text-rose-300 px-3 py-1 text-[10px] font-bold backdrop-blur-md shadow-lg border border-rose-400/30 animate-float-bubble delay-200",
											children: "🍪 Lotus Biscoff Speculoos Crunch"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "aspect-[1.1/1] overflow-hidden rounded-2xl bg-secondary relative group cursor-pointer",
										onClick: () => {
											setModalWeight("500 g");
											setSelectedCakeModal(cakeCatalog[0]);
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: cake_lotus_biscoff_drip_default,
												alt: "Lotus Biscoff Speculoos Drip Cake - Cake Crafts Kharadi",
												className: "size-full object-cover transition-transform duration-700 card-3d-img group-hover:scale-105"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute bottom-4 left-4 right-4 text-white",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] font-bold uppercase tracking-wider text-amber-300",
														children: "Studio Bestseller #1 · Revolving Stand"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "vault-serif-luxury text-xl font-bold leading-tight",
														children: "Lotus Biscoff Speculoos Drip"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] text-white/80 line-clamp-1 mt-0.5",
														children: "Belgian dark chocolate sponge, speculoos caramel drip & Oreo crunch"
													})
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex items-center justify-between pt-1 border-t border-border/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground block font-semibold",
											children: "100% Eggless Studio Price"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xl font-extrabold text-primary",
											children: ["₹749 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-normal text-muted-foreground",
												children: "/ 500g"
											})]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: () => {
												triggerConfetti();
												setModalWeight("500 g");
												setSelectedCakeModal(cakeCatalog[0]);
											},
											className: "h-10.5 rounded-xl px-5 text-xs font-extrabold bg-vault-rose text-white hover:bg-rose-600 shadow-md btn-spring",
											children: "Quick Order"
										})]
									})
								]
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 lg:py-28 bg-gradient-to-b from-secondary/40 via-background to-secondary/30 border-y border-amber-500/20 scroll-reveal relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-[750px] mx-auto mb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block rounded-full bg-vault-rose/10 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.25em] text-vault-rose border border-vault-rose/20 mb-2",
								children: "Studio Craftsmanship & Specialties"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "vault-serif-luxury text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl",
								children: "Our 4 Signature Bake Collections"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium",
								children: "Every creation is prepared fresh on order in our Kharadi studio using 100% pure eggless sponges, pure Belgian cocoa, Alphonso pulp, and organic saffron."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 perspective-container",
						children: [
							{
								icon: Award,
								title: "Couture Wedding & Tiered Cakes",
								desc: "Grand multi-tier wedding showstoppers adorned with handcrafted sugar roses, gold metallic spheres & custom topper sketches.",
								tag: "Wedding & Milestones",
								badge: "👑 Grand Showstopper",
								color: "from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/30 text-amber-600 dark:text-amber-300",
								accent: "bg-amber-500 text-white",
								occasionFilter: "Wedding & Tiered"
							},
							{
								icon: Sparkles,
								title: "Rasmalai Tacos & Cheesecake Jars",
								desc: "Puneri fusion white chocolate tacos filled with cardamom rasmalai mousse & fresh Alphonso mango cheesecake jars.",
								tag: "Dessert Specialties",
								badge: "🌶️ Puneri Fusion",
								color: "from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/30 text-emerald-600 dark:text-emerald-300",
								accent: "bg-emerald-600 text-white",
								occasionFilter: "Dessert Tacos & Jars"
							},
							{
								icon: Heart,
								title: "Lotus Biscoff & Belgian Ganache",
								desc: "Moist dark chocolate sponge layered with speculoos Biscoff caramel drip, Oreo crunch & silky whipped ganache.",
								tag: "Bestselling Drips",
								badge: "⭐ Studio #1 Bestseller",
								color: "from-rose-500/10 via-rose-500/5 to-transparent border-rose-500/30 text-rose-600 dark:text-rose-300",
								accent: "bg-vault-rose text-white",
								occasionFilter: "Birthday Showstoppers"
							},
							{
								icon: ShieldCheck,
								title: "Artisan Macarons & Floral Combos",
								desc: "French almond macaron gift boxes paired with fresh blue orchid flower bouquets & luxury chocolate hampers.",
								tag: "Gifting & Celebrations",
								badge: "💐 Luxury Gifting",
								color: "from-sky-500/10 via-sky-500/5 to-transparent border-sky-500/30 text-sky-600 dark:text-sky-300",
								accent: "bg-sky-600 text-white",
								occasionFilter: "Floral & Gift Combos"
							}
						].map((pillar, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `group flex flex-col justify-between rounded-3xl border bg-gradient-to-b ${pillar.color} p-6 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 card-3d glare-sweep relative overflow-hidden`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-0 right-0 z-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-bl-xl shadow-xs bg-black text-amber-400 border-b border-l border-amber-500/30",
										children: pillar.badge
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-between mb-4 pt-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `flex size-12 items-center justify-center rounded-2xl ${pillar.accent} shadow-md transition-transform duration-300 group-hover:scale-110`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(pillar.icon, { className: "size-6" })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground block mb-1",
										children: pillar.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "vault-serif-luxury text-xl font-bold text-primary leading-snug group-hover:text-vault-rose transition-colors",
										children: pillar.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2.5 text-xs leading-relaxed text-muted-foreground font-medium",
										children: pillar.desc
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 pt-3 border-t border-border/60 flex items-center justify-between",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setSelectedOccasion(pillar.occasionFilter);
											const cakesEl = document.getElementById("cakes");
											if (cakesEl) cakesEl.scrollIntoView({ behavior: "smooth" });
										},
										className: "inline-flex items-center gap-1.5 text-xs font-extrabold text-vault-rose hover:text-rose-700 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Collection" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 group-hover:translate-x-1 transition-transform" })]
									})
								})
							]
						}, idx))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 bg-gradient-to-b from-background via-secondary/20 to-background border-y border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-12 gap-8 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7 relative overflow-hidden rounded-3xl border border-border/80 shadow-2xl group aspect-[1.3/1]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: storefront_counter_display_default,
									alt: "Cake Crafts Bakery Fresh Display Counter in Kharadi Pune",
									className: "size-full object-cover transition-transform duration-700 group-hover:scale-103"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-black/60 px-3.5 py-1 text-xs font-bold text-amber-300 backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our Fresh Bakery Display Counter" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 border border-white/20 backdrop-blur-md text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "vault-serif-luxury text-lg font-bold",
										children: "Step Inside Our Studio Lounge in Kharadi"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-white/80 mt-1",
										children: "Freshly baked signature pastries, rasmalai tacos, jar desserts & custom sample display cases updated every morning!"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-[0.22em] text-vault-rose",
									children: "Artisanal Studio Atmosphere"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "vault-serif-luxury text-3xl font-bold text-primary sm:text-4xl",
									children: "Freshly Baked Every Morning with 100% Pure Passion"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: [
										"When you visit ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Cake Crafts" }),
										" at Shop No. 2, Alcon Rethos, Kharadi, you enter a warm, fragrant space dedicated to pure eggless pastry perfection. Walk in to sample our daily specials or schedule a private custom wedding consultation with our pastry chef."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 border-t border-border/60 pt-4 text-xs font-semibold text-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4.5 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100% Pure Vegetarian & Eggless Preparation Guarantee" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4.5 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pure Belgian Dark Chocolate, Alphonso Pulp & Organic Saffron" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4.5 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "In-Store Consultations & Custom Sketch Preview" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "h-11 rounded-xl bg-primary text-primary-foreground px-6 text-xs font-bold shadow-md hover:opacity-90",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#find-us",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), " Visit Kharadi Studio"]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										className: "h-11 rounded-xl border-border px-5 text-xs font-semibold hover:bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to schedule a custom cake tasting!`)}`,
											target: "_blank",
											rel: "noreferrer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4 text-emerald-600" }), " WhatsApp Tasting Inquiry"]
										})
									})]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-8 bg-amber-500/10 border-y border-amber-500/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col lg:flex-row items-center justify-between gap-6 bg-card rounded-3xl p-6 border border-amber-500/30 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "vault-serif-luxury text-xl font-bold text-primary",
								children: "Interactive Taste Finder — Find Your Perfect Bake"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Select your occasion and flavor preference to reveal our pastry chef's recommendation!"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3 w-full lg:w-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: quizOccasion,
									onChange: (e) => setQuizOccasion(e.target.value),
									className: "h-10.5 rounded-xl border border-input bg-background px-3.5 text-xs font-semibold text-foreground outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Birthday",
											children: "Birthday Celebration"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Wedding",
											children: "Couture Wedding / Engagement"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Anniversary",
											children: "Anniversary & Romance"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Just because",
											children: "Sweet Craving / Gift"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: quizFlavor,
									onChange: (e) => setQuizFlavor(e.target.value),
									className: "h-10.5 rounded-xl border border-input bg-background px-3.5 text-xs font-semibold text-foreground outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Chocolate",
											children: "Belgian Dark Chocolate"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Lotus",
											children: "Lotus Biscoff Caramel"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Rasmalai",
											children: "Saffron Cardamom Rasmalai"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Mango",
											children: "Alphonso Mango Mousse"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Velvet",
											children: "Red Velvet Cream Cheese"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: runQuizRecommendation,
									className: "h-10.5 rounded-xl px-6 text-xs font-bold bg-amber-500 text-white hover:bg-amber-600 shadow-md",
									children: "Reveal Recommendation"
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "cakes",
				className: "py-20 lg:py-28 bg-gradient-to-b from-background via-secondary/20 to-background border-b border-border/60 scroll-reveal-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[1500px] px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-0.5 text-xs font-bold text-vault-rose",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, { className: "size-3 text-vault-rose" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Baked Fresh Daily · 100% Pure Eggless" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "vault-serif-luxury text-2xl sm:text-3xl font-bold text-primary",
										children: "Our Daily Bake Menu"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground max-w-[580px] font-medium",
										children: "Choose your flavor and size for fresh delivery in Kharadi & EON Free Zone."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground shadow-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500 animate-pulse" }),
										"Showing ",
										filteredCakes.length,
										" Creation",
										filteredCakes.length === 1 ? "" : "s"
									]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border/80 bg-card/90 backdrop-blur-md p-4 shadow-lg mb-10 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative w-full sm:w-auto sm:min-w-[320px] flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-3.5 size-4 text-muted-foreground" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "Search cake flavor, style, or occasion...",
											value: searchQuery,
											onChange: (e) => setSearchQuery(e.target.value),
											className: "h-11 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-10 text-xs font-medium text-foreground outline-none transition-colors focus:border-vault-rose/60 focus:bg-background"
										}),
										searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setSearchQuery(""),
											className: "absolute right-3.5 top-3.5 text-muted-foreground hover:text-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 w-full sm:w-auto justify-end",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: bestsellersOnly ? "default" : "outline",
										size: "sm",
										onClick: () => setBestsellersOnly((prev) => !prev),
										className: `h-11 gap-2 text-xs font-extrabold rounded-2xl px-5 transition-all btn-spring ${bestsellersOnly ? "bg-amber-500 text-white hover:bg-amber-600 shadow-md" : "border-border bg-background hover:bg-secondary text-foreground"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-4 ${bestsellersOnly ? "fill-white text-white" : "fill-amber-500 text-amber-500"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bestsellers Only" })]
									}), (selectedOccasion !== "All Creations" || searchQuery || bestsellersOnly) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => {
											setSelectedOccasion("All Creations");
											setSearchQuery("");
											setBestsellersOnly(false);
										},
										className: "h-11 text-xs font-bold text-vault-rose hover:bg-vault-rose/10 rounded-2xl px-4 btn-spring",
										children: "Reset"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-border/50 pt-3",
								children: occasions.map((occ) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSelectedOccasion(occ),
									className: `h-9.5 shrink-0 rounded-full px-4.5 text-xs font-bold transition-all btn-spring ${selectedOccasion === occ ? "bg-vault-rose text-white shadow-md shadow-vault-rose/20 scale-102" : "border border-border/70 bg-background/60 text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
									children: occ
								}, occ))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
							children: filteredCakes.map((cake, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeCard, {
								cake,
								index,
								onQuickView: () => {
									setModalWeight("500 g");
									setSelectedCakeModal(cake);
								}
							}, cake.id))
						}),
						filteredCakes.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-20 text-center rounded-3xl border border-dashed border-border bg-card/50 p-8 max-w-[500px] mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, { className: "mx-auto size-14 text-vault-rose/40 animate-bounce" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "vault-serif-luxury mt-4 text-2xl font-bold text-primary",
									children: "No artisan bakes found"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground leading-relaxed",
									children: "We couldn't find any cakes matching your search criteria. Try clearing your filters or search terms."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => {
										setSelectedOccasion("All Creations");
										setSearchQuery("");
										setBestsellersOnly(false);
									},
									className: "mt-5 text-xs font-extrabold rounded-2xl bg-vault-rose text-white hover:bg-rose-600 px-6 h-11 shadow-md btn-spring",
									children: "Show All Studio Bakes"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "find-us",
				className: "py-20 lg:py-28 bg-background scroll-reveal-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[1500px] px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 text-center max-w-[680px] mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block rounded-full bg-rose-500/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-vault-rose mb-1.5",
								children: "Our Kharadi Studio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "vault-serif-luxury text-2xl sm:text-3xl font-bold text-primary",
								children: "Visit Us in Kharadi, Pune"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs text-muted-foreground leading-relaxed font-medium",
								children: "Visit our bakery studio at Shop No. 2, Alcon Rethos for custom consultations or fresh pickups."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-12 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "overflow-hidden rounded-3xl border border-border/80 bg-card p-7 shadow-md space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-between border-b border-border/60 pb-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 mb-1",
											children: "Verified Google Listing (4.9⭐)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "vault-serif-luxury text-2xl font-bold text-primary",
											children: BUSINESS_NAME
										})] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4 text-xs leading-relaxed text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4.5 shrink-0 text-vault-rose mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-foreground block mb-0.5 text-xs",
														children: "Exact Studio Address:"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: STORE_ADDRESS }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-[11px] font-semibold text-vault-rose",
														children: "📍 Landmark: Opposite Forest County, Near EON Free Zone IT Park"
													})
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4.5 shrink-0 text-amber-500 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-foreground block mb-0.5 text-xs",
														children: "Studio Operating Hours:"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: OPENING_HOURS }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-0.5 text-[11px] text-muted-foreground",
														children: "Open 365 Days a Year"
													})
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4.5 shrink-0 text-emerald-600 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-foreground block mb-0.5 text-xs",
														children: "Direct Studio Hotline:"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-bold text-foreground",
														children: STORE_PHONE
													}),
													" /",
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ALT_STORE_PHONE })
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4.5 shrink-0 text-pink-600 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground block mb-0.5 text-xs",
													children: "Official Instagram:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: INSTAGRAM_URL,
													target: "_blank",
													rel: "noreferrer",
													className: "text-vault-rose font-bold hover:underline",
													children: ["@", INSTAGRAM_HANDLE]
												})] })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-3 border-t border-border/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2",
											children: "Studio Facilities & Services:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-1.5",
											children: SERVICES.map((srv, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-[10.5px] font-semibold text-secondary-foreground",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3 text-emerald-600" }),
													" ",
													srv
												]
											}, idx))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-4 border-t border-border/60 flex flex-wrap gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											className: "flex-1 h-11 gap-2 rounded-xl bg-gradient-to-r from-vault-rose to-rose-700 text-xs font-bold text-white hover:from-rose-700 hover:to-rose-800 shadow-md border-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I am planning to visit your Kharadi studio!`)}`,
												target: "_blank",
												rel: "noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), " Visit Consultation"]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "outline",
											className: "h-11 gap-2 rounded-xl border-border px-4 text-xs font-semibold hover:bg-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: GOOGLE_MAPS_URL,
												target: "_blank",
												rel: "noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-primary" }), " Open Maps"]
											})
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs font-bold text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "REAL KHARADI STUDIO PHOTOS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-vault-rose",
										children: "4 Photos"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm aspect-[4/3] group relative cursor-pointer",
										onClick: () => setActiveStudioPhoto(storefront_exterior_kharadi_default),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: storefront_exterior_kharadi_default,
											alt: "Cake Crafts Studio Exterior Kharadi Shop Front",
											className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 bg-black/40 flex items-end p-2 text-[10px] font-bold text-white opacity-90",
											children: "Storefront Exterior"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm aspect-[4/3] group relative cursor-pointer",
										onClick: () => setActiveStudioPhoto(storefront_real_interior_default),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: storefront_real_interior_default,
											alt: "Cake Crafts Bakery Glass Display Counter Interior",
											className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 bg-black/40 flex items-end p-2 text-[10px] font-bold text-white opacity-90",
											children: "Studio Interior Lounge"
										})]
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7 overflow-hidden rounded-3xl border border-border bg-card shadow-xl h-[560px] relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								src: MAP_EMBED_URL,
								title: "Cake Crafts Kharadi Google Map Location",
								className: "size-full border-0",
								loading: "lazy",
								allowFullScreen: true,
								referrerPolicy: "no-referrer-when-downgrade"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-4 right-4 bg-background/95 backdrop-blur-md p-3.5 rounded-2xl border border-border text-xs font-bold shadow-lg flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-emerald-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kharadi Flagship Studio" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: GOOGLE_MAPS_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "rounded-xl bg-primary px-3.5 py-1.5 text-[11px] font-bold text-primary-foreground hover:opacity-90",
									children: "Get Driving Directions"
								})]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "reviews",
				className: "py-20 lg:py-28 bg-secondary/30 border-t border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-[0.2em] text-vault-rose",
								children: "Verified Customer Feedback"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "vault-serif-luxury mt-2 text-3xl font-bold text-primary sm:text-4xl",
								children: [
									"Google Business Reviews (",
									GOOGLE_RATING,
									"⭐)"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground max-w-[600px]",
								children: "Read genuine customer experiences from our Kharadi customized cake studio."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "h-10 gap-2 rounded-xl text-xs font-semibold border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: GOOGLE_REVIEWS_URL,
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" }), " Read All Reviews on Google"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => setIsReviewDialogOpen(true),
								className: "h-10 gap-2 rounded-xl text-xs font-bold bg-vault-rose text-white hover:bg-rose-600 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-white" }), " Write a Review"]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: reviewsList.map((rev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm hover:shadow-md transition-shadow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1",
									children: Array.from({ length: rev.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-amber-500 text-amber-500" }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded",
									children: "Verified Review"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs leading-relaxed text-foreground italic",
								children: [
									"\"",
									rev.comment,
									"\""
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 border-t border-border/60 pt-4 flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-primary",
									children: rev.author
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: rev.cakeOrdered || "Custom Bake"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: rev.sourceUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "text-[11px] text-vault-rose font-bold hover:underline",
									children: "Google Review"
								})]
							})]
						}, rev.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "faq",
				className: "py-24 lg:py-32 bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[900px] px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-vault-rose",
							children: "Got Questions?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "vault-serif-luxury mt-2 text-3xl font-bold text-primary sm:text-4xl",
							children: "Frequently Asked Questions"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
						type: "single",
						collapsible: true,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: "item-1",
								className: "rounded-2xl border border-border bg-card px-5 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-base font-bold text-primary hover:no-underline",
									children: "Are all cakes at Cake Crafts 100% eggless?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
									className: "text-xs leading-relaxed text-muted-foreground",
									children: "Yes, absolutely! Every single cake, dessert jar, brownie, and custom bake at Cake Crafts is strictly 100% pure vegetarian and eggless."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: "item-2",
								className: "rounded-2xl border border-border bg-card px-5 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-base font-bold text-primary hover:no-underline",
									children: "How far in advance should I order a custom design cake?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
									className: "text-xs leading-relaxed text-muted-foreground",
									children: "For standard signature menu cakes, same-day pickup or delivery (with 2–4 hours advance notice) is available. For custom 2-tier designs or fondant cakes, we recommend ordering 24–48 hours in advance."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: "item-3",
								className: "rounded-2xl border border-border bg-card px-5 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-base font-bold text-primary hover:no-underline",
									children: "Where is your shop located in Pune?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
									className: "text-xs leading-relaxed text-muted-foreground",
									children: "We operate exclusively from Shop No. 2, Alcon Rethos, EON Free Zone Road, opposite Forest County, Kharadi, Pune, Maharashtra 411014. Open daily from 10:00 AM to 11:00 PM."
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-slate-950 text-white py-20 lg:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 flex flex-col md:flex-row items-start justify-between gap-6 border-b border-white/10 pb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-vault-rose/40 bg-vault-rose/20 px-3.5 py-1 text-xs font-bold text-rose-300",
								children: "Kharadi, Pune · 100% Pure Eggless"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "vault-serif-luxury mt-3 text-3xl font-bold text-white sm:text-4xl",
								children: "Ready to Order Your Dream Cake?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-slate-400 max-w-[500px]",
								children: "Contact our Kharadi studio directly on WhatsApp or Call us. Same-day delivery available across Kharadi & EON Free Zone."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "h-12 rounded-xl px-6 gap-2 text-xs font-bold bg-gradient-to-r from-vault-rose to-rose-700 text-white hover:from-rose-700 hover:to-rose-800 shadow-lg border-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order a cake!`)}`,
									target: "_blank",
									rel: "noreferrer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }),
										" WhatsApp Order (",
										STORE_PHONE,
										")"
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "h-12 rounded-xl px-6 gap-2 text-xs font-bold border-white/20 text-white hover:bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${STORE_PHONE}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
										" Call ",
										STORE_PHONE
									]
								})
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ",
							BUSINESS_NAME,
							". All rights reserved."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: STORE_ADDRESS })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!selectedCakeModal,
				onOpenChange: (open) => !open && setSelectedCakeModal(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "sm:max-w-[660px] p-0 overflow-hidden rounded-3xl border border-border shadow-2xl",
					children: selectedCakeModal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aspect-square relative bg-secondary overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: selectedCakeModal.image,
								alt: selectedCakeModal.name,
								className: "size-full object-cover transition-transform duration-700 hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute top-3 left-3 rounded-full border border-emerald-500/30 bg-background/90 text-emerald-700 dark:text-emerald-400 px-3 py-1 text-[10px] font-bold backdrop-blur-md shadow-xs flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3 text-emerald-600 dark:text-emerald-400" }), " 100% Eggless"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-vault-rose",
									children: "Artisan Studio Speciality"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "vault-serif-luxury text-2xl font-bold text-primary mt-1",
									children: selectedCakeModal.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground leading-relaxed",
									children: selectedCakeModal.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 pt-3 border-t border-border space-y-1.5 text-[11px] text-muted-foreground font-medium",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 shrink-0" }), " Baked fresh on order in Kharadi Studio"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 shrink-0 text-vault-rose" }), " 100% Pure Vegetarian & Eggless"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 shrink-0 text-amber-500" }), " Free custom handwritten message tag"]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 pt-4 border-t border-border space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1",
										children: "Select Cake Size:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: modalWeight,
										onChange: (e) => setModalWeight(e.target.value),
										className: "h-9.5 rounded-xl border border-input bg-card px-3 text-xs font-bold text-foreground outline-none transition-colors hover:border-vault-rose",
										children: cakeWeights.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: w,
											children: w
										}, w))
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[10px] text-muted-foreground",
											children: "Estimated Total"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xl font-extrabold text-primary tabular-nums",
											children: formatRupees(estimateLineTotal(selectedCakeModal.id, modalWeight))
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "h-11 gap-1.5 rounded-xl bg-gradient-to-r from-vault-rose to-rose-700 text-xs font-extrabold text-white hover:from-rose-700 hover:to-rose-800 shadow-md btn-spring border-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `https://wa.me/918530914747?text=${encodeURIComponent(`Hi Cake Crafts, I would like to order the ${selectedCakeModal.name} (${modalWeight}). Please confirm availability.`)}`,
											target: "_blank",
											rel: "noreferrer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), " WhatsApp Order"]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										className: "h-11 gap-1.5 rounded-xl border-border px-3 text-xs font-bold hover:bg-secondary btn-spring",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `tel:+91 85309 14747`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 text-primary" }), " Call Studio"]
										})
									})]
								})]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: customBuilderOpen,
				onOpenChange: setCustomBuilderOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-[620px] rounded-3xl border border-border shadow-2xl p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "vault-serif-luxury text-2xl text-primary flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-6 text-vault-rose" }), " Interactive Cake Layer Builder"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs text-muted-foreground",
						children: "Select your custom 100% eggless sponge, filling, and frosting layers for a personalized bakery masterpiece."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 via-rose-500/5 to-background p-4 text-center space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 block",
									children: "Live Layer Stack Preview:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1 max-w-[400px] mx-auto text-xs font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-rose-500/20 text-vault-rose py-2 px-3 border border-rose-500/30 shadow-xs flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✨ Top Frosting:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate max-w-[200px]",
												children: builderFrosting
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 py-2 px-3 border border-amber-500/30 shadow-xs flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍯 Flavor Filling:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate max-w-[200px]",
												children: builderFilling
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 py-2 px-3 border border-emerald-500/30 shadow-xs flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍰 100% Eggless Sponge Base:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate max-w-[200px]",
												children: builderSponge
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5",
								children: "Step 1: Choose Sponge Base"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									"Belgian Dark Cocoa Sponge",
									"Royal Saffron Sponge",
									"Red Velvet Berry Sponge",
									"Vanilla Bean Sponge"
								].map((sp) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setBuilderSponge(sp),
									className: `h-9 px-3.5 rounded-xl text-xs font-semibold transition-all btn-spring ${builderSponge === sp ? "bg-emerald-600 text-white shadow-sm" : "border border-border bg-card text-muted-foreground hover:bg-secondary"}`,
									children: sp
								}, sp))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5",
								children: "Step 2: Choose Filling Layer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									"Lotus Biscoff Speculoos Crunch",
									"Alphonso Mango Puree Mousse",
									"Dark Chocolate Truffle Ganache",
									"Cardamom Saffron Cream"
								].map((fl) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setBuilderFilling(fl),
									className: `h-9 px-3.5 rounded-xl text-xs font-semibold transition-all btn-spring ${builderFilling === fl ? "bg-amber-500 text-white shadow-sm" : "border border-border bg-card text-muted-foreground hover:bg-secondary"}`,
									children: fl
								}, fl))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1",
									children: "Cake Weight:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: builderWeight,
									onChange: (e) => setBuilderWeight(e.target.value),
									className: "h-10 w-full rounded-xl border border-input bg-card px-3 text-xs font-bold text-foreground outline-none",
									children: cakeWeights.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: w,
										children: w
									}, w))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1",
									children: "Occasion:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: builderOccasion,
									onChange: (e) => setBuilderOccasion(e.target.value),
									className: "h-10 w-full rounded-xl border border-input bg-card px-3 text-xs font-bold text-foreground outline-none",
									children: occasions.filter((o) => o !== "All Creations").map((occ) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: occ,
										children: occ
									}, occ))
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1",
								children: "Handwritten Message Tag on Cake (Optional):"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "e.g., Happy Birthday Sanvi!",
								value: builderNameTag,
								onChange: (e) => setBuilderNameTag(e.target.value),
								className: "h-10 w-full rounded-xl border border-input bg-card px-3.5 text-xs outline-none focus:border-ring"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "h-12 w-full gap-2 rounded-2xl bg-gradient-to-r from-vault-rose to-rose-700 text-xs font-extrabold text-white hover:from-rose-700 hover:to-rose-800 shadow-xl btn-spring mt-2 border-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I built a custom cake on your website:\n\n• Sponge Base: ${builderSponge}\n• Filling: ${builderFilling}\n• Frosting: ${builderFrosting}\n• Weight: ${builderWeight}\n• Occasion: ${builderOccasion}\n• Name Tag: ${builderNameTag || "N/A"}`)}`,
									target: "_blank",
									rel: "noreferrer",
									onClick: () => triggerConfetti(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4.5" }), " Send Custom Layer Request on WhatsApp"]
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isReviewDialogOpen,
				onOpenChange: setIsReviewDialogOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-[500px] rounded-3xl border border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "vault-serif-luxury text-2xl text-primary flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-5 text-vault-rose" }), " Share Your Review"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs text-muted-foreground",
						children: "Share your experience with Cake Crafts Kharadi studio."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleReviewSubmit,
						className: "space-y-4 pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold text-muted-foreground mb-1",
								children: "Your Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: reviewAuthor,
								onChange: (e) => setReviewAuthor(e.target.value),
								placeholder: "e.g., Ananya P.",
								className: "h-10.5 w-full rounded-xl border border-input bg-card px-3.5 text-xs outline-none focus:border-ring"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold text-muted-foreground mb-1",
								children: "Rating"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1",
								children: [
									1,
									2,
									3,
									4,
									5
								].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setReviewRating(star),
									className: "p-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-6 ${star <= reviewRating ? "fill-amber-500 text-amber-500" : "text-muted-foreground/40"}` })
								}, star))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold text-muted-foreground mb-1",
								children: "Your Feedback"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								rows: 3,
								value: reviewComment,
								onChange: (e) => setReviewComment(e.target.value),
								placeholder: "Tell us about the taste, design, and service...",
								className: "w-full rounded-xl border border-input bg-card p-3.5 text-xs outline-none focus:border-ring"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "h-11 w-full text-xs font-bold bg-vault-rose text-white hover:bg-rose-600 rounded-xl",
								children: "Submit Review"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3",
				children: [showBackToTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					onClick: () => window.scrollTo({
						top: 0,
						behavior: "smooth"
					}),
					className: "size-11 rounded-full border-border bg-background/90 text-foreground shadow-xl backdrop-blur-md hover:bg-secondary transition-all animate-bounce",
					"aria-label": "Scroll back to top",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order or customize a cake!`)}`,
					target: "_blank",
					rel: "noreferrer",
					className: "group flex items-center gap-2.5 rounded-full bg-[#10B981] hover:bg-[#059669] px-5 py-3.5 text-xs font-extrabold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ring-4 ring-emerald-500/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4 animate-pulse text-emerald-200" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-extrabold tracking-wide",
						children: "WhatsApp Order"
					})]
				})]
			})
		]
	});
}
function CakeCard({ cake, index, onQuickView }) {
	const [weight, setWeight] = (0, import_react.useState)("500 g");
	const [peekSlice, setPeekSlice] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `group flex flex-col justify-between h-full min-w-0 rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xs p-4.5 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-vault-rose/50 card-3d glare-sweep stagger-card-scroll stagger-delay-${index % 8} relative overflow-hidden`,
		children: [
			"bestseller" in cake && cake.bestseller && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-3 -right-8 rotate-45 gold-ribbon-badge text-[9px] font-black uppercase tracking-wider py-0.5 px-8 z-20 shadow-md pointer-events-none",
				children: "⭐ BESTSELLER"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[0.98/1] overflow-hidden rounded-2xl bg-secondary cursor-pointer",
				onClick: onQuickView,
				children: [!peekSlice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cake.image,
						alt: `${cake.name} - Cake Crafts Kharadi Pune`,
						loading: index < 4 ? "eager" : "lazy",
						className: "size-full object-cover transition-transform duration-700 card-3d-img group-hover:scale-105"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute left-3 top-3 rounded-full border border-emerald-500/40 bg-background/90 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 backdrop-blur-md shadow-xs flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-2.5 text-emerald-600 dark:text-emerald-400" }), " 100% Eggless"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-3 left-3 right-3 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-black/70 text-amber-300 px-2.5 py-0.5 text-[9.5px] font-bold backdrop-blur-md animate-float-bubble",
							children: "🍫 Belgian Cocoa"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-black/70 text-rose-300 px-2.5 py-0.5 text-[9.5px] font-bold backdrop-blur-md animate-float-bubble delay-100",
							children: "✨ Fresh Dairy Butter"
						})]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "size-full bg-gradient-to-b from-amber-500/10 via-rose-500/10 to-emerald-500/10 p-4 flex flex-col justify-center gap-2 text-center text-xs font-bold border border-amber-500/30 rounded-2xl animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-wider text-vault-rose font-black",
							children: "🔪 Insider Cake Slice Layers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-rose-500/20 text-vault-rose py-2 px-3 border border-rose-500/30 shadow-xs",
							children: "✨ Top Drip: Rich Belgian Ganache Glaze"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 py-2 px-3 border border-amber-500/30 shadow-xs",
							children: "🍯 Middle Layer: Lotus Biscoff / Fresh Mango Mousse"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 py-2 px-3 border border-emerald-500/30 shadow-xs",
							children: "🍰 Base Layer: 100% Eggless Moist Sponge"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						onQuickView();
					},
					className: "absolute right-3 top-3 size-8.5 rounded-full bg-black/60 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110 z-20",
					title: "Quick View Details",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between flex-1 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						onClick: onQuickView,
						className: "vault-serif-luxury text-lg font-bold leading-snug text-primary group-hover:text-vault-rose transition-colors cursor-pointer flex-1",
						children: cake.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setPeekSlice((prev) => !prev),
						className: "text-[10px] font-bold text-vault-rose border border-vault-rose/30 bg-vault-rose/10 px-2 py-0.5 rounded-full hover:bg-vault-rose hover:text-white transition-all shrink-0",
						title: "Toggle Slice Layer Diagram",
						children: peekSlice ? "View Photo 📷" : "Peek Slice 🔪"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 min-h-[2.5rem] text-xs leading-relaxed text-muted-foreground line-clamp-2",
					children: cake.description
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-3 border-t border-border/60 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5",
								children: "Size"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: weight,
								onChange: (e) => setWeight(e.target.value),
								className: "h-8 rounded-lg border border-input bg-secondary/50 px-2 text-xs font-bold text-foreground outline-none transition-colors hover:border-vault-rose/50 cursor-pointer",
								children: cakeWeights.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: size,
									children: size
								}, size))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5 block",
								children: "Price"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-extrabold tabular-nums text-primary leading-none",
								children: formatRupees(estimateLineTotal(cake.id, weight))
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "h-10 flex-1 gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-xs font-extrabold text-white shadow-md shadow-emerald-500/25 transition-all hover:scale-102 active:scale-98 border-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order the ${cake.name} (${weight}).`)}`,
								target: "_blank",
								rel: "noreferrer",
								onClick: () => triggerConfetti(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), " Order Now"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "size-10 shrink-0 rounded-xl bg-black text-white hover:bg-zinc-800 shadow-md shadow-black/20 transition-all hover:scale-105 active:scale-95 border border-white/10 p-0 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${STORE_PHONE}`,
								title: `Call ${BRAND_SHORT} Studio`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
							})
						})]
					})]
				})]
			})
		]
	});
}
//#endregion
export { IndexPage as component };
