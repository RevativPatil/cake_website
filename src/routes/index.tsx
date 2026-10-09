import { useEffect, useMemo, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUp,
  Award,
  BadgeCheck,
  CakeSlice,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  Eye,
  Filter,
  Heart,
  HelpCircle,
  Instagram,
  MapPin,
  Menu,
  MessageSquare,
  Moon,
  Phone,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Truck,
  Upload,
  Wand2,
  X,
} from "lucide-react";
import { toast } from "sonner";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { bakerySchema, faqSchema, itemListSchema } from "@/lib/seo-schemas";
import {
  ALT_STORE_PHONE,
  BRAND_SHORT,
  BUSINESS_NAME,
  cakeCatalog,
  cakeLotusBiscoffDrip,
  cakeWeights,
  customCakeFlavours,
  customCakeFrostings,
  customerReviews,
  estimateLineTotal,
  formatRupees,
  getCake,
  GOOGLE_MAPS_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAP_EMBED_URL,
  masterChefWeddingCake,
  OPENING_HOURS,
  OPENING_HOURS_STRUCTURED,
  realStorefrontInterior,
  SERVICES,
  storefrontCounterDisplay,
  storefrontExteriorKharadi,
  STORE_ADDRESS,
  STORE_PHONE,
  storeLocation,
  WHATSAPP_NUMBER,
  type CakeWeight,
  type CustomerReview,
} from "@/lib/cake-store";

const occasions = [
  "All Creations",
  "Wedding & Tiered",
  "Birthday Showstoppers",
  "Dessert Tacos & Jars",
  "Floral & Gift Combos",
  "Anniversary & Romantic",
] as const;
type Occasion = (typeof occasions)[number];

function triggerConfetti() {
  if (typeof window === "undefined") return;
  const count = 35;
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "fixed z-50 pointer-events-none rounded-full animate-ping";
    const colors = ["#D4AF37", "#E11D48", "#10B981", "#F59E0B", "#8B5CF6", "#3B82F6"];
    const color = colors[Math.floor(Math.random() * colors.length)] ?? "#D4AF37";
    const size = Math.random() * 9 + 6;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundColor = color;
    el.style.left = `${Math.random() * 80 + 10}vw`;
    el.style.top = `${Math.random() * 40 + 20}vh`;
    el.style.transition = "all 1s ease-out";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${BUSINESS_NAME} | Best Customised Cake Studio in Kharadi, Pune | 100% Eggless`,
      },
      {
        name: "description",
        content: `${BUSINESS_NAME} — Pune's top-rated 100% eggless customised cake studio located exclusively at Shop No. 2, Alcon Rethos, EON Free Zone Road, Kharadi, Pune. Specialising in 2-tier wedding cakes, Lotus Biscoff drip cakes, rasmalai tacos, dessert jars & same-day delivery. Call/WhatsApp ${STORE_PHONE}!`,
      },
      {
        name: "keywords",
        content:
          "cake crafts kharadi, customised cake studio pune, cake shop kharadi, designer birthday cakes pune, eggless cakes pune, lotus biscoff cake kharadi, wedding cake pune, cake delivery kharadi eon free zone, rasmalai taco pune",
      },
      { name: "author", content: BUSINESS_NAME },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(bakerySchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(itemListSchema),
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  const [selectedOccasion, setSelectedOccasion] = useState<Occasion>("All Creations");
  const [searchQuery, setSearchQuery] = useState("");
  const [bestsellersOnly, setBestsellersOnly] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [customBuilderOpen, setCustomBuilderOpen] = useState(false);
  const [selectedCakeModal, setSelectedCakeModal] = useState<(typeof cakeCatalog)[number] | null>(null);
  const [modalWeight, setModalWeight] = useState<CakeWeight>("500 g");

  // Customizer state
  const [builderOccasion, setBuilderOccasion] = useState<string>("Birthday");
  const [builderFlavour, setBuilderFlavour] = useState<string>("Belgian Chocolate Truffle");
  const [builderSponge, setBuilderSponge] = useState<string>("Belgian Dark Cocoa Sponge");
  const [builderFilling, setBuilderFilling] = useState<string>("Lotus Biscoff Speculoos Crunch");
  const [builderFrosting, setBuilderFrosting] = useState<string>("Smooth Fresh Whipped Cream");
  const [builderWeight, setBuilderWeight] = useState<CakeWeight>("500 g");
  const [builderNameTag, setBuilderNameTag] = useState<string>("");

  // Quiz State
  const [quizOccasion, setQuizOccasion] = useState("Birthday");
  const [quizFlavor, setQuizFlavor] = useState("Chocolate");
  const [quizRecommendedCake, setQuizRecommendedCake] = useState<(typeof cakeCatalog)[number] | null>(null);

  // Reviews State
  const [reviewsList, setReviewsList] = useState<CustomerReview[]>(customerReviews);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [reviewAuthor, setReviewAuthor] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewCakeOrdered, setReviewCakeOrdered] = useState("");
  const [reviewPhotoUrl, setReviewPhotoUrl] = useState<string | null>(null);

  // Location Studio Gallery active photo
  const [activeStudioPhoto, setActiveStudioPhoto] = useState<string>(storefrontExteriorKharadi);

  // Scroll FX State
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setIsScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleReviewPhotoSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file (JPG, PNG, WebP)");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image file size must be less than 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setReviewPhotoUrl(result);
      toast.success("Photo attached successfully!");
    };
    reader.readAsDataURL(file);
  };

  const handleReviewSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor.trim() || !reviewComment.trim()) {
      toast.error("Please enter your name and review comment");
      return;
    }

    const newReview: CustomerReview = {
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
      ...(reviewPhotoUrl ? { photoUrl: reviewPhotoUrl } : {}),
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

  const filteredCakes = useMemo(() => {
    return cakeCatalog.filter((cake) => {
      if (selectedOccasion !== "All Creations") {
        const cakeOccasions = cake.occasions as readonly string[];
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

      if (bestsellersOnly && !("bestseller" in cake && cake.bestseller)) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = cake.name.toLowerCase().includes(query);
        const matchDesc = cake.description.toLowerCase().includes(query);
        if (!matchName && !matchDesc) return false;
      }
      return true;
    });
  }, [selectedOccasion, bestsellersOnly, searchQuery]);

  const runQuizRecommendation = () => {
    let match = cakeCatalog.find((c) =>
      c.name.toLowerCase().includes(quizFlavor.toLowerCase())
    );
    if (!match) match = cakeCatalog[0];
    setQuizRecommendedCake(match);
    setSelectedCakeModal(match);
    triggerConfetti();
    toast.success(`We found your dream cake: ${match.name}!`);
  };

  return (
    <main className="min-h-screen bg-[#FFFDFB] dark:bg-[#140F0D] text-foreground transition-colors duration-300">
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-rose-600 via-amber-500 to-emerald-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />



      {/* LUXURY STICKY NAVBAR */}
      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          isScrolled
            ? "border-border/80 bg-background/95 backdrop-blur-md shadow-md py-3"
            : "border-border/40 bg-background/80 backdrop-blur-sm py-5 lg:py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo & Location Pin */}
          <div className="flex items-center gap-4">
            <a href="#home" className="flex items-center gap-3 group">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-vault-rose to-rose-700 text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                <CakeSlice className="size-6" strokeWidth={2.2} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="vault-serif-luxury text-[22px] sm:text-[24px] font-bold tracking-tight text-primary">
                  {BRAND_SHORT}
                </span>
                <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.25em] text-vault-rose truncate">
                  100% Eggless Customised Cake Studio · Kharadi
                </span>
              </span>
            </a>

            <a
              href="#find-us"
              className="hidden xl:inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs text-amber-900 dark:text-amber-300 font-medium transition-all hover:bg-amber-500/20"
            >
              <MapPin className="size-3.5 text-vault-rose shrink-0" />
              <span className="truncate max-w-[260px] font-semibold">
                Alcon Rethos, Kharadi Studio
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 text-[14px] font-semibold text-muted-foreground lg:flex"
          >
            <a className="transition-colors hover:text-vault-rose" href="#cakes">
              Menu Catalogue
            </a>
            <button
              onClick={() => setCustomBuilderOpen(true)}
              className="inline-flex items-center gap-1.5 text-vault-rose transition-colors hover:text-rose-700 font-bold"
            >
              <Wand2 className="size-4" />
              <span>Bespoke Customizer</span>
            </button>
            <a className="transition-colors hover:text-vault-rose" href="#find-us">
              Studio Location
            </a>
            <a className="transition-colors hover:text-vault-rose flex items-center gap-1" href="#reviews">
              <span>Reviews</span>
              <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400 group-hover:bg-amber-500/30">
                {GOOGLE_RATING}⭐
              </span>
            </a>
            <a className="transition-colors hover:text-vault-rose" href="#faq">
              FAQ
            </a>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-2.5">

            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsReviewDialogOpen(true)}
              className="hidden xl:inline-flex h-10 gap-1.5 border-vault-rose/30 bg-vault-rose/10 px-4 text-xs font-bold text-vault-rose hover:bg-vault-rose hover:text-white transition-all rounded-xl btn-spring"
            >
              <Star className="size-3.5 fill-vault-rose" />
              <span>Review Studio</span>
            </Button>

            <Button
              asChild
              className="hidden sm:inline-flex h-10 gap-2 rounded-xl bg-[#10B981] hover:bg-[#059669] px-4.5 text-xs font-extrabold text-white shadow-sm transition-all btn-spring border-0"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order or customize a cake!`)}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => triggerConfetti()}
              >
                <MessageSquare className="size-4" />
                <span>WhatsApp Order</span>
              </a>
            </Button>

            <Button
              asChild
              className="h-10 gap-2 rounded-xl bg-black text-white hover:bg-zinc-800 px-4 text-xs font-extrabold shadow-md shadow-black/20 transition-all hover:scale-105 active:scale-95 border border-white/10"
            >
              <a href={`tel:${STORE_PHONE}`}>
                <Phone className="size-3.5" />
                <span>Call Studio</span>
                <span className="hidden xl:inline text-[11px] opacity-90">({STORE_PHONE})</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileNavOpen(true)}
              className="h-10 size-10 lg:hidden rounded-xl btn-spring"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION SHEET */}
      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[360px]">
          <SheetHeader className="border-b border-border pb-4">
            <SheetTitle className="vault-serif-luxury text-2xl font-bold text-primary flex items-center gap-2">
              <CakeSlice className="size-6 text-vault-rose" />
              {BRAND_SHORT}
            </SheetTitle>
            <SheetDescription className="text-xs text-muted-foreground">
              Shop No. 2, Alcon Rethos, Kharadi, Pune
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col gap-4 py-6 text-sm font-semibold">
            <a
              href="#cakes"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center justify-between border-b border-border/60 pb-3 text-foreground"
            >
              <span>Menu Catalogue</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
            <button
              onClick={() => {
                setMobileNavOpen(false);
                setCustomBuilderOpen(true);
              }}
              className="flex items-center justify-between border-b border-border/60 pb-3 text-left text-vault-rose font-bold"
            >
              <span className="flex items-center gap-2">
                <Wand2 className="size-4" /> Bespoke Customizer
              </span>
              <ArrowRight className="size-4" />
            </button>
            <a
              href="#find-us"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center justify-between border-b border-border/60 pb-3 text-foreground"
            >
              <span>Kharadi Studio Location</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center justify-between border-b border-border/60 pb-3 text-foreground"
            >
              <span>Customer Reviews ({GOOGLE_RATING}⭐)</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
            <a
              href="#faq"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center justify-between border-b border-border/60 pb-3 text-foreground"
            >
              <span>FAQ</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
          </div>

          <div className="mt-auto space-y-3 pt-6 border-t border-border">
            <Button
              asChild
              className="w-full h-11 gap-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-xs font-extrabold text-white shadow-sm border-0"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order a cake!`)}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => triggerConfetti()}
              >
                <MessageSquare className="size-4" /> Order on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              className="w-full h-11 gap-2 rounded-xl bg-black text-white hover:bg-zinc-800 shadow-md shadow-black/20 text-xs font-extrabold transition-all border border-white/10"
            >
              <a href={`tel:${STORE_PHONE}`}>
                <Phone className="size-4" /> Call Studio ({STORE_PHONE})
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* LUXURY SPLIT HERO WITH INTERACTIVE 3D SHOWCASE CARD */}
      <section id="home" className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 min-h-[85vh] flex items-center scroll-reveal-section">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={storefrontCounterDisplay}
            alt="Cake Crafts Bakery Studio Display Counter"
            className="size-full object-cover object-center opacity-100 dark:opacity-85 filter brightness-[0.95] contrast-[1.05]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/65 to-transparent dark:from-[#140F0D]/90 dark:via-[#140F0D]/70 dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background dark:from-[#140F0D]/40 dark:to-[#140F0D]" />
        </div>

        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/35 bg-amber-500/15 px-4 py-1 text-xs font-bold text-amber-950 dark:text-amber-200 backdrop-blur-md">
                <Sparkles className="size-3.5 text-amber-500 animate-spin-slow" />
                <span>Freshly Baked Daily in Kharadi · 100% Pure Eggless</span>
              </div>

              <h1 className="vault-serif-luxury text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-primary">
                Freshly Baked Every Morning.{" "}
                <span className="block vault-handwritten text-2xl sm:text-3xl text-vault-rose font-normal mt-1">
                  100% Pure Eggless Customised Cakes in Kharadi.
                </span>
              </h1>

              <p className="max-w-[660px] text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium">
                Welcome to <strong>{BUSINESS_NAME}</strong> at Shop No. 2, Alcon Rethos, Kharadi. Every cake is baked fresh to order with real Belgian dark chocolate, Alphonso mangoes, organic saffron, and pure butter — zero egg substitutes, premixes, or preservatives.
              </p>

              <div className="rounded-2xl border border-rose-500/30 bg-background/90 dark:bg-card/90 p-4 max-w-[620px] flex items-center gap-3.5 shadow-md backdrop-blur-md">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-vault-rose to-rose-700 text-white font-bold">
                  <Heart className="size-5 fill-white" />
                </span>
                <div>
                  <p className="vault-handwritten text-lg text-foreground/95 leading-snug">
                    "A celebration cake should be genuine, fresh, and delicious. We bake every order from scratch in our Kharadi studio."
                  </p>
                  <p className="mt-1 text-[10px] font-bold text-vault-rose uppercase tracking-wider">
                    — Master Pastry Chef · Cake Crafts Kharadi
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-900 dark:text-emerald-300">
                  <ShieldCheck className="size-3.5 text-emerald-600 dark:text-emerald-400" /> 100% Pure Eggless
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-bold text-amber-900 dark:text-amber-300">
                  <Truck className="size-3.5 text-amber-500" /> Express Delivery in Kharadi
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 text-xs font-bold text-rose-900 dark:text-rose-300">
                  <Star className="size-3.5 fill-rose-500 text-rose-500" /> Rated 4.9★ on Google
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  asChild
                  className="h-12 gap-2 rounded-xl px-7 text-xs font-extrabold bg-[#10B981] hover:bg-[#059669] text-white shadow-md btn-spring border-0"
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order or inquire about a custom cake!`)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => triggerConfetti()}
                  >
                    <MessageSquare className="size-4" /> Order on WhatsApp
                  </a>
                </Button>

                <Button
                  variant="outline"
                  onClick={() => setCustomBuilderOpen(true)}
                  className="h-12 gap-2 rounded-xl px-6 text-xs font-bold border-amber-600/35 bg-amber-500/10 text-amber-950 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-all backdrop-blur-xs btn-spring"
                >
                  <Wand2 className="size-4" /> Design Custom Cake
                </Button>
              </div>
            </div>

            {/* Right Interactive 3D Revolving Showcase Card */}
            <div className="lg:col-span-5 relative perspective-container">
              <div className="rounded-3xl border border-amber-500/35 bg-card/90 backdrop-blur-md p-6 shadow-2xl card-3d glare-sweep relative overflow-hidden animate-swing-revolve">
                {/* Floating Flavor Chips around display */}
                <div className="absolute top-12 right-4 z-20 pointer-events-none">
                  <span className="rounded-full bg-black/75 text-amber-300 px-3 py-1 text-[10px] font-bold backdrop-blur-md shadow-lg border border-amber-400/30 animate-float-bubble">
                    🍫 70% Belgian Dark Cocoa
                  </span>
                </div>
                <div className="absolute bottom-20 left-4 z-20 pointer-events-none">
                  <span className="rounded-full bg-black/75 text-rose-300 px-3 py-1 text-[10px] font-bold backdrop-blur-md shadow-lg border border-rose-400/30 animate-float-bubble delay-200">
                    🍪 Lotus Biscoff Speculoos Crunch
                  </span>
                </div>

                <div
                  className="aspect-[1.1/1] overflow-hidden rounded-2xl bg-secondary relative group cursor-pointer"
                  onClick={() => {
                    setModalWeight("500 g");
                    setSelectedCakeModal(cakeCatalog[0]);
                  }}
                >
                  <img
                    src={cakeLotusBiscoffDrip}
                    alt="Lotus Biscoff Speculoos Drip Cake - Cake Crafts Kharadi"
                    className="size-full object-cover transition-transform duration-700 card-3d-img group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      Studio Bestseller #1 · Revolving Stand
                    </span>
                    <h3 className="vault-serif-luxury text-xl font-bold leading-tight">
                      Lotus Biscoff Speculoos Drip
                    </h3>
                    <p className="text-[11px] text-white/80 line-clamp-1 mt-0.5">
                      Belgian dark chocolate sponge, speculoos caramel drip &amp; Oreo crunch
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between pt-1 border-t border-border/60">
                  <div>
                    <span className="text-[10px] text-muted-foreground block font-semibold">100% Eggless Studio Price</span>
                    <span className="text-xl font-extrabold text-primary">₹749 <span className="text-xs font-normal text-muted-foreground">/ 500g</span></span>
                  </div>

                  <Button
                    onClick={() => {
                      triggerConfetti();
                      setModalWeight("500 g");
                      setSelectedCakeModal(cakeCatalog[0]);
                    }}
                    className="h-10.5 rounded-xl px-5 text-xs font-extrabold bg-vault-rose text-white hover:bg-rose-600 shadow-md btn-spring"
                  >
                    Quick Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY INTERACTIVE SIGNATURE BAKERY SHOWCASE */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-secondary/40 via-background to-secondary/30 border-y border-amber-500/20 scroll-reveal relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-[750px] mx-auto mb-12">
            <span className="inline-block rounded-full bg-vault-rose/10 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.25em] text-vault-rose border border-vault-rose/20 mb-2">
              Studio Craftsmanship &amp; Specialties
            </span>
            <h2 className="vault-serif-luxury text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
              Our 4 Signature Bake Collections
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
              Every creation is prepared fresh on order in our Kharadi studio using 100% pure eggless sponges, pure Belgian cocoa, Alphonso pulp, and organic saffron.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 perspective-container">
            {[
              {
                icon: Award,
                title: "Couture Wedding & Tiered Cakes",
                desc: "Grand multi-tier wedding showstoppers adorned with handcrafted sugar roses, gold metallic spheres & custom topper sketches.",
                tag: "Wedding & Milestones",
                badge: "👑 Grand Showstopper",
                color: "from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/30 text-amber-600 dark:text-amber-300",
                accent: "bg-amber-500 text-white",
                occasionFilter: "Wedding & Tiered" as Occasion,
              },
              {
                icon: Sparkles,
                title: "Rasmalai Tacos & Cheesecake Jars",
                desc: "Puneri fusion white chocolate tacos filled with cardamom rasmalai mousse & fresh Alphonso mango cheesecake jars.",
                tag: "Dessert Specialties",
                badge: "🌶️ Puneri Fusion",
                color: "from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/30 text-emerald-600 dark:text-emerald-300",
                accent: "bg-emerald-600 text-white",
                occasionFilter: "Dessert Tacos & Jars" as Occasion,
              },
              {
                icon: Heart,
                title: "Lotus Biscoff & Belgian Ganache",
                desc: "Moist dark chocolate sponge layered with speculoos Biscoff caramel drip, Oreo crunch & silky whipped ganache.",
                tag: "Bestselling Drips",
                badge: "⭐ Studio #1 Bestseller",
                color: "from-rose-500/10 via-rose-500/5 to-transparent border-rose-500/30 text-rose-600 dark:text-rose-300",
                accent: "bg-vault-rose text-white",
                occasionFilter: "Birthday Showstoppers" as Occasion,
              },
              {
                icon: ShieldCheck,
                title: "Artisan Macarons & Floral Combos",
                desc: "French almond macaron gift boxes paired with fresh blue orchid flower bouquets & luxury chocolate hampers.",
                tag: "Gifting & Celebrations",
                badge: "💐 Luxury Gifting",
                color: "from-sky-500/10 via-sky-500/5 to-transparent border-sky-500/30 text-sky-600 dark:text-sky-300",
                accent: "bg-sky-600 text-white",
                occasionFilter: "Floral & Gift Combos" as Occasion,
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className={`group flex flex-col justify-between rounded-3xl border bg-gradient-to-b ${pillar.color} p-6 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 card-3d glare-sweep relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 z-10">
                  <span className="inline-block text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-bl-xl shadow-xs bg-black text-amber-400 border-b border-l border-amber-500/30">
                    {pillar.badge}
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4 pt-1">
                    <span className={`flex size-12 items-center justify-center rounded-2xl ${pillar.accent} shadow-md transition-transform duration-300 group-hover:scale-110`}>
                      <pillar.icon className="size-6" />
                    </span>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground block mb-1">
                    {pillar.tag}
                  </span>
                  <h3 className="vault-serif-luxury text-xl font-bold text-primary leading-snug group-hover:text-vault-rose transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground font-medium">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border/60 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedOccasion(pillar.occasionFilter);
                      const cakesEl = document.getElementById("cakes");
                      if (cakesEl) cakesEl.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-vault-rose hover:text-rose-700 transition-colors"
                  >
                    <span>View Collection</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL STUDIO DISPLAY COUNTER FEATURE BANNER */}
      <section className="py-14 bg-gradient-to-b from-background via-secondary/20 to-background border-y border-border/60">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-border/80 shadow-2xl group aspect-[1.3/1]">
              <img
                src={storefrontCounterDisplay}
                alt="Cake Crafts Bakery Fresh Display Counter in Kharadi Pune"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-black/60 px-3.5 py-1 text-xs font-bold text-amber-300 backdrop-blur-md">
                <Sparkles className="size-3.5 text-amber-400" />
                <span>Our Fresh Bakery Display Counter</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 border border-white/20 backdrop-blur-md text-white">
                <h4 className="vault-serif-luxury text-lg font-bold">
                  Step Inside Our Studio Lounge in Kharadi
                </h4>
                <p className="text-xs text-white/80 mt-1">
                  Freshly baked signature pastries, rasmalai tacos, jar desserts &amp; custom sample display cases updated every morning!
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-vault-rose">
                Artisanal Studio Atmosphere
              </span>
              <h2 className="vault-serif-luxury text-3xl font-bold text-primary sm:text-4xl">
                Freshly Baked Every Morning with 100% Pure Passion
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When you visit <strong>Cake Crafts</strong> at Shop No. 2, Alcon Rethos, Kharadi, you enter a warm, fragrant space dedicated to pure eggless pastry perfection. Walk in to sample our daily specials or schedule a private custom wedding consultation with our pastry chef.
              </p>

              <div className="space-y-3 border-t border-border/60 pt-4 text-xs font-semibold text-foreground">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-4.5 text-emerald-600 shrink-0" />
                  <span>100% Pure Vegetarian &amp; Eggless Preparation Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-4.5 text-emerald-600 shrink-0" />
                  <span>Pure Belgian Dark Chocolate, Alphonso Pulp &amp; Organic Saffron</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-4.5 text-emerald-600 shrink-0" />
                  <span>In-Store Consultations &amp; Custom Sketch Preview</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-11 rounded-xl bg-primary text-primary-foreground px-6 text-xs font-bold shadow-md hover:opacity-90"
                >
                  <a href="#find-us">
                    <MapPin className="size-4" /> Visit Kharadi Studio
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-xl border-border px-5 text-xs font-semibold hover:bg-secondary"
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to schedule a custom cake tasting!`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageSquare className="size-4 text-emerald-600" /> WhatsApp Tasting Inquiry
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TASTE FINDER QUIZ */}
      <section className="py-8 bg-amber-500/10 border-y border-amber-500/20">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-card rounded-3xl p-6 border border-amber-500/30 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-md">
                <Sparkles className="size-6" />
              </span>
              <div>
                <h3 className="vault-serif-luxury text-xl font-bold text-primary">
                  Interactive Taste Finder — Find Your Perfect Bake
                </h3>
                <p className="text-xs text-muted-foreground">
                  Select your occasion and flavor preference to reveal our pastry chef's recommendation!
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <select
                value={quizOccasion}
                onChange={(e) => setQuizOccasion(e.target.value)}
                className="h-10.5 rounded-xl border border-input bg-background px-3.5 text-xs font-semibold text-foreground outline-none"
              >
                <option value="Birthday">Birthday Celebration</option>
                <option value="Wedding">Couture Wedding / Engagement</option>
                <option value="Anniversary">Anniversary &amp; Romance</option>
                <option value="Just because">Sweet Craving / Gift</option>
              </select>

              <select
                value={quizFlavor}
                onChange={(e) => setQuizFlavor(e.target.value)}
                className="h-10.5 rounded-xl border border-input bg-background px-3.5 text-xs font-semibold text-foreground outline-none"
              >
                <option value="Chocolate">Belgian Dark Chocolate</option>
                <option value="Lotus">Lotus Biscoff Caramel</option>
                <option value="Rasmalai">Saffron Cardamom Rasmalai</option>
                <option value="Mango">Alphonso Mango Mousse</option>
                <option value="Velvet">Red Velvet Cream Cheese</option>
              </select>

              <Button
                onClick={runQuizRecommendation}
                className="h-10.5 rounded-xl px-6 text-xs font-bold bg-amber-500 text-white hover:bg-amber-600 shadow-md"
              >
                Reveal Recommendation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CAKE CATALOGUE SECTION */}
      <section id="cakes" className="py-20 lg:py-28 bg-gradient-to-b from-background via-secondary/20 to-background border-b border-border/60 scroll-reveal-section">
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-0.5 text-xs font-bold text-vault-rose">
                <CakeSlice className="size-3 text-vault-rose" />
                <span>Baked Fresh Daily · 100% Pure Eggless</span>
              </div>
              <h2 className="vault-serif-luxury text-2xl sm:text-3xl font-bold text-primary">
                Our Daily Bake Menu
              </h2>
              <p className="text-xs text-muted-foreground max-w-[580px] font-medium">
                Choose your flavor and size for fresh delivery in Kharadi &amp; EON Free Zone.
              </p>
            </div>

            {/* Live Result Count Pill */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground shadow-xs">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                Showing {filteredCakes.length} Creation{filteredCakes.length === 1 ? "" : "s"}
              </span>
            </div>
          </div>

          {/* Floating Glassmorphic Filter & Search Bar */}
          <div className="rounded-3xl border border-border/80 bg-card/90 backdrop-blur-md p-4 shadow-lg mb-10 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Search Input with Clear Button */}
              <div className="relative w-full sm:w-auto sm:min-w-[320px] flex-1">
                <Search className="absolute left-3.5 top-3.5 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search cake flavor, style, or occasion..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-11 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-10 text-xs font-medium text-foreground outline-none transition-colors focus:border-vault-rose/60 focus:bg-background"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-3.5 text-muted-foreground hover:text-foreground"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>

              {/* Bestseller Toggle & Reset Buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <Button
                  variant={bestsellersOnly ? "default" : "outline"}
                  size="sm"
                  onClick={() => setBestsellersOnly((prev) => !prev)}
                  className={`h-11 gap-2 text-xs font-extrabold rounded-2xl px-5 transition-all btn-spring ${bestsellersOnly
                      ? "bg-amber-500 text-white hover:bg-amber-600 shadow-md"
                      : "border-border bg-background hover:bg-secondary text-foreground"
                    }`}
                >
                  <Star className={`size-4 ${bestsellersOnly ? "fill-white text-white" : "fill-amber-500 text-amber-500"}`} />
                  <span>Bestsellers Only</span>
                </Button>

                {(selectedOccasion !== "All Creations" || searchQuery || bestsellersOnly) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedOccasion("All Creations");
                      setSearchQuery("");
                      setBestsellersOnly(false);
                    }}
                    className="h-11 text-xs font-bold text-vault-rose hover:bg-vault-rose/10 rounded-2xl px-4 btn-spring"
                  >
                    Reset
                  </Button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-border/50 pt-3">
              {occasions.map((occ) => (
                <button
                  key={occ}
                  onClick={() => setSelectedOccasion(occ)}
                  className={`h-9.5 shrink-0 rounded-full px-4.5 text-xs font-bold transition-all btn-spring ${selectedOccasion === occ
                      ? "bg-vault-rose text-white shadow-md shadow-vault-rose/20 scale-102"
                      : "border border-border/70 bg-background/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                >
                  {occ}
                </button>
              ))}
            </div>
          </div>

          {/* Cake Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCakes.map((cake, index) => (
              <CakeCard
                key={cake.id}
                cake={cake}
                index={index}
                onQuickView={() => {
                  setModalWeight("500 g");
                  setSelectedCakeModal(cake);
                }}
              />
            ))}
          </div>

          {filteredCakes.length === 0 && (
            <div className="py-20 text-center rounded-3xl border border-dashed border-border bg-card/50 p-8 max-w-[500px] mx-auto">
              <CakeSlice className="mx-auto size-14 text-vault-rose/40 animate-bounce" />
              <h3 className="vault-serif-luxury mt-4 text-2xl font-bold text-primary">No artisan bakes found</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                We couldn't find any cakes matching your search criteria. Try clearing your filters or search terms.
              </p>
              <Button
                onClick={() => {
                  setSelectedOccasion("All Creations");
                  setSearchQuery("");
                  setBestsellersOnly(false);
                }}
                className="mt-5 text-xs font-extrabold rounded-2xl bg-vault-rose text-white hover:bg-rose-600 px-6 h-11 shadow-md btn-spring"
              >
                Show All Studio Bakes
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* DEDICATED SINGLE STUDIO LOCATION SECTION (KHARADI ONLY) */}
      <section id="find-us" className="py-20 lg:py-28 bg-background scroll-reveal-section">
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6">
          <div className="mb-8 text-center max-w-[680px] mx-auto">
            <span className="inline-block rounded-full bg-rose-500/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-vault-rose mb-1.5">
              Our Kharadi Studio
            </span>
            <h2 className="vault-serif-luxury text-2xl sm:text-3xl font-bold text-primary">
              Visit Us in Kharadi, Pune
            </h2>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed font-medium">
              Visit our bakery studio at Shop No. 2, Alcon Rethos for custom consultations or fresh pickups.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left Location Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="overflow-hidden rounded-3xl border border-border/80 bg-card p-7 shadow-md space-y-5">
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <div>
                    <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                      Verified Google Listing (4.9⭐)
                    </span>
                    <h3 className="vault-serif-luxury text-2xl font-bold text-primary">
                      {BUSINESS_NAME}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 text-xs leading-relaxed text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-4.5 shrink-0 text-vault-rose mt-0.5" />
                    <div>
                      <strong className="text-foreground block mb-0.5 text-xs">Exact Studio Address:</strong>
                      <span>{STORE_ADDRESS}</span>
                      <p className="mt-1 text-[11px] font-semibold text-vault-rose">
                        📍 Landmark: Opposite Forest County, Near EON Free Zone IT Park
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="size-4.5 shrink-0 text-amber-500 mt-0.5" />
                    <div>
                      <strong className="text-foreground block mb-0.5 text-xs">Studio Operating Hours:</strong>
                      <span>{OPENING_HOURS}</span>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">Open 365 Days a Year</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="size-4.5 shrink-0 text-emerald-600 mt-0.5" />
                    <div>
                      <strong className="text-foreground block mb-0.5 text-xs">Direct Studio Hotline:</strong>
                      <span className="font-bold text-foreground">{STORE_PHONE}</span> / <span>{ALT_STORE_PHONE}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Instagram className="size-4.5 shrink-0 text-pink-600 mt-0.5" />
                    <div>
                      <strong className="text-foreground block mb-0.5 text-xs">Official Instagram:</strong>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-vault-rose font-bold hover:underline"
                      >
                        @{INSTAGRAM_HANDLE}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Services list */}
                <div className="pt-3 border-t border-border/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                    Studio Facilities &amp; Services:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {SERVICES.map((srv, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-[10.5px] font-semibold text-secondary-foreground"
                      >
                        <CheckCircle2 className="size-3 text-emerald-600" /> {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Studio CTAs */}
                <div className="pt-4 border-t border-border/60 flex flex-wrap gap-2.5">
                  <Button
                    asChild
                    className="flex-1 h-11 gap-2 rounded-xl bg-gradient-to-r from-vault-rose to-rose-700 text-xs font-bold text-white hover:from-rose-700 hover:to-rose-800 shadow-md border-0"
                  >
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I am planning to visit your Kharadi studio!`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageSquare className="size-4" /> Visit Consultation
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-11 gap-2 rounded-xl border-border px-4 text-xs font-semibold hover:bg-secondary"
                  >
                    <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">
                      <ExternalLink className="size-4 text-primary" /> Open Maps
                    </a>
                  </Button>
                </div>
              </div>

              {/* Real Studio Photo Gallery */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
                  <span>REAL KHARADI STUDIO PHOTOS</span>
                  <span className="text-[10px] text-vault-rose">4 Photos</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm aspect-[4/3] group relative cursor-pointer"
                    onClick={() => setActiveStudioPhoto(storefrontExteriorKharadi)}
                  >
                    <img
                      src={storefrontExteriorKharadi}
                      alt="Cake Crafts Studio Exterior Kharadi Shop Front"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-2 text-[10px] font-bold text-white opacity-90">
                      Storefront Exterior
                    </div>
                  </div>

                  <div
                    className="overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm aspect-[4/3] group relative cursor-pointer"
                    onClick={() => setActiveStudioPhoto(realStorefrontInterior)}
                  >
                    <img
                      src={realStorefrontInterior}
                      alt="Cake Crafts Bakery Glass Display Counter Interior"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-2 text-[10px] font-bold text-white opacity-90">
                      Studio Interior Lounge
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Live Google Map */}
            <div className="lg:col-span-7 overflow-hidden rounded-3xl border border-border bg-card shadow-xl h-[560px] relative">
              <iframe
                src={MAP_EMBED_URL}
                title="Cake Crafts Kharadi Google Map Location"
                className="size-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-md p-3.5 rounded-2xl border border-border text-xs font-bold shadow-lg flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <MapPin className="size-4" />
                  <span>Kharadi Flagship Studio</span>
                </div>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-primary px-3.5 py-1.5 text-[11px] font-bold text-primary-foreground hover:opacity-90"
                >
                  Get Driving Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-20 lg:py-28 bg-secondary/30 border-t border-border/60">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-vault-rose">
                Verified Customer Feedback
              </span>
              <h2 className="vault-serif-luxury mt-2 text-3xl font-bold text-primary sm:text-4xl">
                Google Business Reviews ({GOOGLE_RATING}⭐)
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-[600px]">
                Read genuine customer experiences from our Kharadi customized cake studio.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                variant="outline"
                className="h-10 gap-2 rounded-xl text-xs font-semibold border-border"
              >
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                  <ExternalLink className="size-4" /> Read All Reviews on Google
                </a>
              </Button>

              <Button
                onClick={() => setIsReviewDialogOpen(true)}
                className="h-10 gap-2 rounded-xl text-xs font-bold bg-vault-rose text-white hover:bg-rose-600 shadow-sm"
              >
                <Star className="size-4 fill-white" /> Write a Review
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviewsList.map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Verified Review
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-foreground italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-primary">{rev.author}</p>
                    <p className="text-[11px] text-muted-foreground">{rev.cakeOrdered || "Custom Bake"}</p>
                  </div>
                  <a
                    href={rev.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-vault-rose font-bold hover:underline"
                  >
                    Google Review
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 lg:py-32 bg-background">
        <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-vault-rose">
              Got Questions?
            </span>
            <h2 className="vault-serif-luxury mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="rounded-2xl border border-border bg-card px-5 py-2">
              <AccordionTrigger className="text-base font-bold text-primary hover:no-underline">
                Are all cakes at Cake Crafts 100% eggless?
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                Yes, absolutely! Every single cake, dessert jar, brownie, and custom bake at Cake Crafts is strictly 100% pure vegetarian and eggless.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="rounded-2xl border border-border bg-card px-5 py-2">
              <AccordionTrigger className="text-base font-bold text-primary hover:no-underline">
                How far in advance should I order a custom design cake?
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                For standard signature menu cakes, same-day pickup or delivery (with 2–4 hours advance notice) is available. For custom 2-tier designs or fondant cakes, we recommend ordering 24–48 hours in advance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="rounded-2xl border border-border bg-card px-5 py-2">
              <AccordionTrigger className="text-base font-bold text-primary hover:no-underline">
                Where is your shop located in Pune?
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                We operate exclusively from Shop No. 2, Alcon Rethos, EON Free Zone Road, opposite Forest County, Kharadi, Pune, Maharashtra 411014. Open daily from 10:00 AM to 11:00 PM.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row items-start justify-between gap-6 border-b border-white/10 pb-10">
            <div>
              <span className="rounded-full border border-vault-rose/40 bg-vault-rose/20 px-3.5 py-1 text-xs font-bold text-rose-300">
                Kharadi, Pune · 100% Pure Eggless
              </span>
              <h3 className="vault-serif-luxury mt-3 text-3xl font-bold text-white sm:text-4xl">
                Ready to Order Your Dream Cake?
              </h3>
              <p className="mt-1 text-sm text-slate-400 max-w-[500px]">
                Contact our Kharadi studio directly on WhatsApp or Call us. Same-day delivery available across Kharadi &amp; EON Free Zone.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="h-12 rounded-xl px-6 gap-2 text-xs font-bold bg-gradient-to-r from-vault-rose to-rose-700 text-white hover:from-rose-700 hover:to-rose-800 shadow-lg border-0"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order a cake!`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare className="size-4" /> WhatsApp Order ({STORE_PHONE})
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl px-6 gap-2 text-xs font-bold border-white/20 text-white hover:bg-white/10"
              >
                <a href={`tel:${STORE_PHONE}`}>
                  <Phone className="size-4" /> Call {STORE_PHONE}
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 pt-6">
            <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
            <p>{STORE_ADDRESS}</p>
          </div>
        </div>
      </footer>

      {/* QUICK VIEW MODAL FOR CAKE DETAILS */}
      <Dialog open={!!selectedCakeModal} onOpenChange={(open) => !open && setSelectedCakeModal(null)}>
        <DialogContent className="sm:max-w-[660px] p-0 overflow-hidden rounded-3xl border border-border shadow-2xl">
          {selectedCakeModal && (
            <div className="grid sm:grid-cols-2">
              <div className="aspect-square relative bg-secondary overflow-hidden">
                <img
                  src={selectedCakeModal.image}
                  alt={selectedCakeModal.name}
                  className="size-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full border border-emerald-500/30 bg-background/90 text-emerald-700 dark:text-emerald-400 px-3 py-1 text-[10px] font-bold backdrop-blur-md shadow-xs flex items-center gap-1">
                  <CheckCircle2 className="size-3 text-emerald-600 dark:text-emerald-400" /> 100% Eggless
                </span>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-vault-rose">
                    Artisan Studio Speciality
                  </span>
                  <h3 className="vault-serif-luxury text-2xl font-bold text-primary mt-1">
                    {selectedCakeModal.name}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {selectedCakeModal.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-border space-y-1.5 text-[11px] text-muted-foreground font-medium">
                    <p className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                      <CheckCircle2 className="size-3.5 shrink-0" /> Baked fresh on order in Kharadi Studio
                    </p>
                    <p className="flex items-center gap-1.5">
                      <ShieldCheck className="size-3.5 shrink-0 text-vault-rose" /> 100% Pure Vegetarian &amp; Eggless
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Sparkles className="size-3.5 shrink-0 text-amber-500" /> Free custom handwritten message tag
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Select Cake Size:
                      </label>
                      <select
                        value={modalWeight}
                        onChange={(e) => setModalWeight(e.target.value as CakeWeight)}
                        className="h-9.5 rounded-xl border border-input bg-card px-3 text-xs font-bold text-foreground outline-none transition-colors hover:border-vault-rose"
                      >
                        {cakeWeights.map((w) => (
                          <option key={w} value={w}>
                            {w}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="text-right">
                      <span className="block text-[10px] text-muted-foreground">Estimated Total</span>
                      <span className="text-xl font-extrabold text-primary tabular-nums">
                        {formatRupees(estimateLineTotal(selectedCakeModal.id, modalWeight))}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Button
                      asChild
                      className="h-11 gap-1.5 rounded-xl bg-gradient-to-r from-vault-rose to-rose-700 text-xs font-extrabold text-white hover:from-rose-700 hover:to-rose-800 shadow-md btn-spring border-0"
                    >
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order the ${selectedCakeModal.name} (${modalWeight}). Please confirm availability.`)}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageSquare className="size-4" /> WhatsApp Order
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="h-11 gap-1.5 rounded-xl border-border px-3 text-xs font-bold hover:bg-secondary btn-spring"
                    >
                      <a href={`tel:${STORE_PHONE}`}>
                        <Phone className="size-3.5 text-primary" /> Call Studio
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* BESPOKE VISUAL CAKE LAYER BUILDER DIALOG */}
      <Dialog open={customBuilderOpen} onOpenChange={setCustomBuilderOpen}>
        <DialogContent className="sm:max-w-[620px] rounded-3xl border border-border shadow-2xl p-6">
          <DialogHeader>
            <DialogTitle className="vault-serif-luxury text-2xl text-primary flex items-center gap-2">
              <Wand2 className="size-6 text-vault-rose" /> Interactive Cake Layer Builder
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Select your custom 100% eggless sponge, filling, and frosting layers for a personalized bakery masterpiece.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            {/* Visual Layer Stack Graphic Preview */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 via-rose-500/5 to-background p-4 text-center space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 block">
                Live Layer Stack Preview:
              </span>
              <div className="space-y-1 max-w-[400px] mx-auto text-xs font-bold">
                <div className="rounded-xl bg-rose-500/20 text-vault-rose py-2 px-3 border border-rose-500/30 shadow-xs flex items-center justify-between">
                  <span>✨ Top Frosting:</span>
                  <span className="truncate max-w-[200px]">{builderFrosting}</span>
                </div>
                <div className="rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 py-2 px-3 border border-amber-500/30 shadow-xs flex items-center justify-between">
                  <span>🍯 Flavor Filling:</span>
                  <span className="truncate max-w-[200px]">{builderFilling}</span>
                </div>
                <div className="rounded-xl bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 py-2 px-3 border border-emerald-500/30 shadow-xs flex items-center justify-between">
                  <span>🍰 100% Eggless Sponge Base:</span>
                  <span className="truncate max-w-[200px]">{builderSponge}</span>
                </div>
              </div>
            </div>

            {/* Step 1: Sponge Chips */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Step 1: Choose Sponge Base
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Belgian Dark Cocoa Sponge",
                  "Royal Saffron Sponge",
                  "Red Velvet Berry Sponge",
                  "Vanilla Bean Sponge",
                ].map((sp) => (
                  <button
                    key={sp}
                    type="button"
                    onClick={() => setBuilderSponge(sp)}
                    className={`h-9 px-3.5 rounded-xl text-xs font-semibold transition-all btn-spring ${
                      builderSponge === sp
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "border border-border bg-card text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {sp}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Filling Chips */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Step 2: Choose Filling Layer
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Lotus Biscoff Speculoos Crunch",
                  "Alphonso Mango Puree Mousse",
                  "Dark Chocolate Truffle Ganache",
                  "Cardamom Saffron Cream",
                ].map((fl) => (
                  <button
                    key={fl}
                    type="button"
                    onClick={() => setBuilderFilling(fl)}
                    className={`h-9 px-3.5 rounded-xl text-xs font-semibold transition-all btn-spring ${
                      builderFilling === fl
                        ? "bg-amber-500 text-white shadow-sm"
                        : "border border-border bg-card text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {fl}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Size & Occasion */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Cake Weight:
                </label>
                <select
                  value={builderWeight}
                  onChange={(e) => setBuilderWeight(e.target.value as CakeWeight)}
                  className="h-10 w-full rounded-xl border border-input bg-card px-3 text-xs font-bold text-foreground outline-none"
                >
                  {cakeWeights.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Occasion:
                </label>
                <select
                  value={builderOccasion}
                  onChange={(e) => setBuilderOccasion(e.target.value)}
                  className="h-10 w-full rounded-xl border border-input bg-card px-3 text-xs font-bold text-foreground outline-none"
                >
                  {occasions.filter((o) => o !== "All Creations").map((occ) => (
                    <option key={occ} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Custom Message Tag */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                Handwritten Message Tag on Cake (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g., Happy Birthday Sanvi!"
                value={builderNameTag}
                onChange={(e) => setBuilderNameTag(e.target.value)}
                className="h-10 w-full rounded-xl border border-input bg-card px-3.5 text-xs outline-none focus:border-ring"
              />
            </div>

            <Button
              asChild
              className="h-12 w-full gap-2 rounded-2xl bg-gradient-to-r from-vault-rose to-rose-700 text-xs font-extrabold text-white hover:from-rose-700 hover:to-rose-800 shadow-xl btn-spring mt-2 border-0"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I built a custom cake on your website:\n\n• Sponge Base: ${builderSponge}\n• Filling: ${builderFilling}\n• Frosting: ${builderFrosting}\n• Weight: ${builderWeight}\n• Occasion: ${builderOccasion}\n• Name Tag: ${builderNameTag || "N/A"}`)}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => triggerConfetti()}
              >
                <MessageSquare className="size-4.5" /> Send Custom Layer Request on WhatsApp
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* WRITE A REVIEW DIALOG */}
      <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-3xl border border-border">
          <DialogHeader>
            <DialogTitle className="vault-serif-luxury text-2xl text-primary flex items-center gap-2">
              <Quote className="size-5 text-vault-rose" /> Share Your Review
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Share your experience with Cake Crafts Kharadi studio.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleReviewSubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-muted-foreground mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={reviewAuthor}
                onChange={(e) => setReviewAuthor(e.target.value)}
                placeholder="e.g., Ananya P."
                className="h-10.5 w-full rounded-xl border border-input bg-card px-3.5 text-xs outline-none focus:border-ring"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-muted-foreground mb-1">
                Rating
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setReviewRating(star)}
                    className="p-1"
                  >
                    <Star
                      className={`size-6 ${star <= reviewRating
                          ? "fill-amber-500 text-amber-500"
                          : "text-muted-foreground/40"
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-muted-foreground mb-1">
                Your Feedback
              </label>
              <textarea
                required
                rows={3}
                value={reviewComment}
                onChange={(e) => setReviewComment(e.target.value)}
                placeholder="Tell us about the taste, design, and service..."
                className="w-full rounded-xl border border-input bg-card p-3.5 text-xs outline-none focus:border-ring"
              />
            </div>
            <Button type="submit" className="h-11 w-full text-xs font-bold bg-vault-rose text-white hover:bg-rose-600 rounded-xl">
              Submit Review
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* FLOATING QUICK ACTIONS (WHATSAPP HOTLINE & BACK TO TOP) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showBackToTop && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="size-11 rounded-full border-border bg-background/90 text-foreground shadow-xl backdrop-blur-md hover:bg-secondary transition-all animate-bounce"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="size-5" />
          </Button>
        )}

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order or customize a cake!`)}`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 rounded-full bg-[#10B981] hover:bg-[#059669] px-5 py-3.5 text-xs font-extrabold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ring-4 ring-emerald-500/20"
        >
          <MessageSquare className="size-4 animate-pulse text-emerald-200" />
          <span className="font-extrabold tracking-wide">WhatsApp Order</span>
        </a>
      </div>
    </main>
  );
}

function CakeCard({
  cake,
  index,
  onQuickView,
}: {
  cake: (typeof cakeCatalog)[number];
  index: number;
  onQuickView: () => void;
}) {
  const [weight, setWeight] = useState<CakeWeight>("500 g");
  const [peekSlice, setPeekSlice] = useState(false);

  return (
    <article className={`group flex flex-col justify-between h-full min-w-0 rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xs p-4.5 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-vault-rose/50 card-3d glare-sweep stagger-card-scroll stagger-delay-${index % 8} relative overflow-hidden`}>
      {/* Gold Ribbon Badge for Bestsellers */}
      {"bestseller" in cake && cake.bestseller && (
        <div className="absolute top-3 -right-8 rotate-45 gold-ribbon-badge text-[9px] font-black uppercase tracking-wider py-0.5 px-8 z-20 shadow-md pointer-events-none">
          ⭐ BESTSELLER
        </div>
      )}

      {/* Main Image or Slice Layer Diagram View */}
      <div className="relative aspect-[0.98/1] overflow-hidden rounded-2xl bg-secondary cursor-pointer" onClick={onQuickView}>
        {!peekSlice ? (
          <>
            <img
              src={cake.image}
              alt={`${cake.name} - Cake Crafts Kharadi Pune`}
              loading={index < 4 ? "eager" : "lazy"}
              className="size-full object-cover transition-transform duration-700 card-3d-img group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 rounded-full border border-emerald-500/40 bg-background/90 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 backdrop-blur-md shadow-xs flex items-center gap-1">
              <CheckCircle2 className="size-2.5 text-emerald-600 dark:text-emerald-400" /> 100% Eggless
            </span>

            {/* Floating Flavor Bubbles on Hover */}
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <span className="rounded-full bg-black/70 text-amber-300 px-2.5 py-0.5 text-[9.5px] font-bold backdrop-blur-md animate-float-bubble">
                🍫 Belgian Cocoa
              </span>
              <span className="rounded-full bg-black/70 text-rose-300 px-2.5 py-0.5 text-[9.5px] font-bold backdrop-blur-md animate-float-bubble delay-100">
                ✨ Fresh Dairy Butter
              </span>
            </div>
          </>
        ) : (
          /* Peek Inside Slice Diagram Layer View */
          <div className="size-full bg-gradient-to-b from-amber-500/10 via-rose-500/10 to-emerald-500/10 p-4 flex flex-col justify-center gap-2 text-center text-xs font-bold border border-amber-500/30 rounded-2xl animate-fade-in">
            <span className="text-[10px] uppercase tracking-wider text-vault-rose font-black">
              🔪 Insider Cake Slice Layers
            </span>
            <div className="rounded-xl bg-rose-500/20 text-vault-rose py-2 px-3 border border-rose-500/30 shadow-xs">
              ✨ Top Drip: Rich Belgian Ganache Glaze
            </div>
            <div className="rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 py-2 px-3 border border-amber-500/30 shadow-xs">
              🍯 Middle Layer: Lotus Biscoff / Fresh Mango Mousse
            </div>
            <div className="rounded-xl bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 py-2 px-3 border border-emerald-500/30 shadow-xs">
              🍰 Base Layer: 100% Eggless Moist Sponge
            </div>
          </div>
        )}

        {/* Quick View Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView();
          }}
          className="absolute right-3 top-3 size-8.5 rounded-full bg-black/60 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110 z-20"
          title="Quick View Details"
        >
          <Eye className="size-4" />
        </button>
      </div>

      <div className="flex flex-col justify-between flex-1 pt-4">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3
              onClick={onQuickView}
              className="vault-serif-luxury text-lg font-bold leading-snug text-primary group-hover:text-vault-rose transition-colors cursor-pointer flex-1"
            >
              {cake.name}
            </h3>

            {/* Peek Inside Slice Toggle */}
            <button
              onClick={() => setPeekSlice((prev) => !prev)}
              className="text-[10px] font-bold text-vault-rose border border-vault-rose/30 bg-vault-rose/10 px-2 py-0.5 rounded-full hover:bg-vault-rose hover:text-white transition-all shrink-0"
              title="Toggle Slice Layer Diagram"
            >
              {peekSlice ? "View Photo 📷" : "Peek Slice 🔪"}
            </button>
          </div>

          <p className="mt-1.5 min-h-[2.5rem] text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {cake.description}
          </p>
        </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-border/60 pt-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Size</span>
                <select
                  value={weight}
                  onChange={(e) => setWeight(e.target.value as CakeWeight)}
                  className="h-8 rounded-lg border border-input bg-secondary/50 px-2 text-xs font-bold text-foreground outline-none transition-colors hover:border-vault-rose/50 cursor-pointer"
                >
                  {cakeWeights.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5 block">Price</span>
                <p className="text-base font-extrabold tabular-nums text-primary leading-none">
                  {formatRupees(estimateLineTotal(cake.id, weight))}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <Button
                asChild
                className="h-10 flex-1 gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-xs font-extrabold text-white shadow-md shadow-emerald-500/25 transition-all hover:scale-102 active:scale-98 border-0"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BRAND_SHORT}, I would like to order the ${cake.name} (${weight}).`)}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => triggerConfetti()}
                >
                  <MessageSquare className="size-4" /> Order Now
                </a>
              </Button>

              <Button
                asChild
                className="size-10 shrink-0 rounded-xl bg-black text-white hover:bg-zinc-800 shadow-md shadow-black/20 transition-all hover:scale-105 active:scale-95 border border-white/10 p-0 flex items-center justify-center"
              >
                <a href={`tel:${STORE_PHONE}`} title={`Call ${BRAND_SHORT} Studio`}>
                  <Phone className="size-4" />
                </a>
              </Button>
            </div>
          </div>
      </div>
    </article>
  );
}
