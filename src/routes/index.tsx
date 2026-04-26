import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MapPin,
  Clock,
  PhoneCall,
  Navigation,
  UtensilsCrossed,
  Hotel,
  Users,
  Coffee,
  Soup,
  Leaf,
  Wifi,
  BedDouble,
  Wine,
  Star,
  Award,
  Heart,
  ChefHat,
  Sparkles,
  ArrowRight,
  Quote,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { MenuGallery } from "@/components/MenuGallery";
import { StructuredMenu } from "@/components/StructuredMenu";
import heroImg from "@/assets/hero-thakali.jpg";
import dishThakali from "@/assets/dish-thakali.jpg";
import dishMomo from "@/assets/dish-momo.jpg";
import dishChiya from "@/assets/dish-chiya.jpg";
import lankaBurger from "@/assets/lanka-burger.jpg";
import lankaBuilding from "@/assets/lanka-building.jpg";
import lankaLounge from "@/assets/lanka-lounge.jpg";
import lankaBar from "@/assets/lanka-bar.jpg";
import lankaDining from "@/assets/lanka-dining.jpg";
import lankaRoom from "@/assets/lanka-room.jpg";
import lankaSeating from "@/assets/lanka-seating.jpg";
import menuBreakfast from "@/assets/menu-breakfast-thakali-clean.jpg";
import menuSnacks from "@/assets/menu-snacks-burger-pizza-clean.jpg";
import menuBeverages from "@/assets/menu-beverages-clean.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotel Lanka — Authentic Thakali Restaurant & Hotel in Dhulikhel" },
      {
        name: "description",
        content:
          "Hotel Lanka in Saraswati Bazaar, Dhulikhel — authentic Nepali Thakali khana, momos, burgers, hot chiya, cozy rooms and warm hospitality. Open 7 AM – 10 PM. Call +977 9841245653.",
      },
      { property: "og:title", content: "Hotel Lanka — Thakali Restaurant & Hotel, Dhulikhel" },
      {
        property: "og:description",
        content:
          "Authentic Thakali khana, snacks, burgers and warm Nepali hospitality in Saraswati Bazaar, Dhulikhel.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const PHONE = "+977 9841245653";
const PHONE_TEL = "+9779841245653";
const LANDLINE = "011490511";
const ADDRESS = "Saraswati Bazaar, Dhulikhel, Nepal";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Saraswati+Bazaar+Dhulikhel+Nepal";

const menuImages = [
  { src: menuBreakfast, alt: "Breakfast, Thakali Khana, Curry & Soup" },
  { src: menuSnacks, alt: "Veg & Non-Veg Snacks, Burger & Pizza" },
  { src: menuBeverages, alt: "Hot, Cold & Alcoholic Beverages" },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
      <div className="divider-ornament mb-4 max-w-xs mx-auto">
        <span className="text-xs uppercase tracking-[0.35em] font-semibold">{eyebrow}</span>
      </div>
      <h2
        className={`font-display text-4xl lg:text-5xl font-semibold ${light ? "text-cream" : "text-foreground"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base lg:text-lg ${light ? "text-cream/70" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Authentic Thakali thali at Hotel Lanka, Dhulikhel"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        {/* Dark layered overlay */}
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 pattern-mandala opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/60" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="divider-ornament max-w-xs mx-auto mb-6">
            <span className="text-xs uppercase tracking-[0.4em] text-accent font-semibold">
              Saraswati Bazaar · Dhulikhel
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-semibold leading-[1.05] mb-5 text-cream text-glow">
            Hotel <span className="text-gradient-gold">Lanka</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent/50" />
            <p className="text-lg sm:text-xl lg:text-2xl text-accent font-display italic">
              Authentic Thakali Restaurant &amp; Hotel
            </p>
            <span className="h-px w-10 bg-accent/50" />
          </div>

          <p className="text-sm sm:text-base text-cream/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Homestyle Nepali khana, fresh local flavors, and warm Himalayan hospitality — served
            fresh daily from <span className="text-accent font-semibold">7 AM to 10 PM</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-warm text-primary-foreground font-semibold shadow-warm hover:scale-105 hover:shadow-glow transition-smooth"
            >
              <PhoneCall className="h-5 w-5" /> Call Now
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-gold text-cream font-semibold hover:border-accent transition-smooth"
            >
              <UtensilsCrossed className="h-5 w-5" /> View Menu
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-gold text-cream font-semibold hover:border-accent transition-smooth"
            >
              <Navigation className="h-5 w-5" /> Get Directions
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-cream/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" /> {ADDRESS}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" /> 7:00 AM – 10:00 PM
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" /> {PHONE}
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/50 text-xs uppercase tracking-[0.3em] animate-float">
          Scroll ↓
        </div>
      </section>

      {/* QUICK HIGHLIGHTS BAR */}
      <section className="bg-gradient-crimson py-7 border-y border-gold relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative">
          {[
            { icon: Soup, label: "Authentic Thakali" },
            { icon: BedDouble, label: "Cozy Hotel Rooms" },
            { icon: Wine, label: "Full Bar & Drinks" },
            { icon: Award, label: "Loved by Locals" },
          ].map((h) => (
            <div key={h.label} className="flex items-center justify-center gap-2.5 text-cream">
              <h.icon className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium tracking-wide">{h.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STATS COUNTER */}
      <section className="py-16 lg:py-20 bg-background relative">
        <div className="absolute inset-0 pattern-nepali" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { num: "15+", label: "Years of Service" },
              { num: "120+", label: "Menu Items" },
              { num: "10K+", label: "Happy Guests" },
              { num: "4.7★", label: "Guest Rating" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center p-6 rounded-2xl bg-gradient-surface border border-gold shadow-deep hover:shadow-gold transition-smooth"
              >
                <div className="font-display text-4xl lg:text-5xl text-gradient-gold font-semibold mb-2">
                  {s.num}
                </div>
                <div className="text-xs lg:text-sm text-cream/70 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-nepali" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img
                src={lankaBuilding}
                alt="Hotel Lanka building exterior in Saraswati Bazaar, Dhulikhel"
                loading="lazy"
                width={1600}
                height={1200}
                className="rounded-2xl shadow-deep w-full h-auto object-cover aspect-[4/5] border border-gold"
              />
              <img
                src={lankaDining}
                alt="Dining area at Hotel Lanka"
                loading="lazy"
                className="hidden md:block absolute -bottom-10 -right-6 w-56 h-56 lg:w-64 lg:h-64 object-cover rounded-2xl shadow-warm border-4 border-charcoal"
              />
              <div className="hidden lg:flex absolute -top-6 -left-6 bg-gradient-surface rounded-2xl shadow-gold p-5 max-w-[220px] border border-accent/40">
                <div>
                  <div className="font-display text-3xl text-accent font-semibold">15+ Years</div>
                  <div className="text-sm text-cream/70 mt-1">of homestyle Nepali hospitality</div>
                </div>
              </div>
            </div>

            <div>
              <div className="divider-ornament mb-4 max-w-[200px]">
                <span className="text-xs uppercase tracking-[0.3em] font-semibold">About Us</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-cream mb-5">
                A taste of <span className="text-gradient-gold">Nepal</span> in the heart of
                Dhulikhel
              </h2>
              <p className="text-cream/75 text-base lg:text-lg leading-relaxed mb-4">
                Tucked away in Saraswati Bazaar, Hotel Lanka is a welcoming restaurant and hotel
                where authentic Thakali khana is served with the warmth of a Nepali home. Every
                plate is prepared fresh, every guest treated like family.
              </p>
              <p className="text-cream/75 text-base lg:text-lg leading-relaxed mb-8">
                Whether you're stopping by for a hearty breakfast, a long family lunch, an evening
                at the bar with friends, or a peaceful night's stay on your way through the hills —
                we're here to make you feel at home.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Soup, label: "Authentic Thakali" },
                  { icon: Users, label: "Family Friendly" },
                  { icon: Hotel, label: "Hotel Stay" },
                  { icon: Leaf, label: "Fresh & Local" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-surface border border-gold shadow-soft hover:border-accent transition-smooth"
                  >
                    <div className="h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center">
                      <f.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-cream">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Why Hotel Lanka"
            title="Crafted with Care, Served with Pride"
            subtitle="Every detail of your visit is thought through — from the spices in the dal to the comfort of your bed."
            light
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ChefHat,
                title: "Homestyle Cooking",
                desc: "Recipes passed down generations, prepared fresh every day with traditional Nepali techniques.",
              },
              {
                icon: Leaf,
                title: "Fresh Local Ingredients",
                desc: "We source vegetables, dairy and spices from nearby farms in Dhulikhel and Kavre.",
              },
              {
                icon: Heart,
                title: "Warm Hospitality",
                desc: "Every guest is welcomed like family — the Nepali way.",
              },
              {
                icon: Sparkles,
                title: "Clean & Comfortable",
                desc: "Spotless dining hall, fresh linen rooms, and immaculate bathrooms.",
              },
              {
                icon: Award,
                title: "Trusted Since 2009",
                desc: "A favorite of locals, regulars, and travelers passing through Dhulikhel.",
              },
              {
                icon: Clock,
                title: "Open All Day",
                desc: "From early morning chiya to late night dinner — we're here 7 AM to 10 PM, every day.",
              },
            ].map((w) => (
              <div
                key={w.title}
                className="group p-7 rounded-2xl bg-gradient-surface border border-gold hover:border-accent/60 hover:shadow-gold transition-smooth relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-smooth" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-gradient-warm flex items-center justify-center mb-5 shadow-warm">
                    <w.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl text-cream mb-2">{w.title}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THAKALI / SIGNATURE DISHES */}
      <section id="thakali" className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 pattern-nepali" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Our Specialty"
            title="Authentic Thakali & Signature Dishes"
            subtitle="Slow-cooked dals, mountain spices, fresh vegetables and homestyle love — alongside the snacks and burgers our guests rave about."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: dishThakali,
                name: "Thakali Khana Set",
                desc: "Rice, dal, seasonal vegetables, gundruk, achar & more.",
                price: "Rs. 250+",
              },
              {
                img: lankaBurger,
                name: "Lanka Cheese Burger",
                desc: "Juicy patty, fresh veggies, crispy fries — guest favorite.",
                price: "Rs. 200",
              },
              {
                img: dishMomo,
                name: "Steamed Momo",
                desc: "Hand-folded dumplings with our signature spicy achar.",
                price: "Rs. 150",
              },
              {
                img: dishChiya,
                name: "Chiya & Snacks",
                desc: "Hot Nepali milk tea with sel roti and local snacks.",
                price: "Rs. 50",
              },
            ].map((d) => (
              <article
                key={d.name}
                className="group bg-gradient-surface rounded-2xl overflow-hidden shadow-deep hover:shadow-gold transition-smooth border border-gold hover:border-accent/60"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-70" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-warm text-cream text-xs font-bold shadow-warm">
                    {d.price}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-cream mb-1.5 group-hover:text-accent transition-smooth">
                    {d.name}
                  </h3>
                  <p className="text-sm text-cream/65 leading-relaxed">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURED MENU */}
      <section id="menu" className="py-20 lg:py-28 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Our Menu"
            title="Browse Our Full Menu"
            subtitle="Tap a category to explore. From Thakali sets to burgers, biryani, sekuwa, lassi and a full bar — there's something for everyone."
            light
          />

          <StructuredMenu />

          <div className="text-center mt-12">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-warm text-primary-foreground font-semibold shadow-warm hover:scale-105 hover:shadow-glow transition-smooth"
            >
              <PhoneCall className="h-5 w-5" /> Call to Order: {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* MENU PHOTOS */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 pattern-nepali" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Original Printed Menu"
            title="Browse Our Menu Cards"
            subtitle="Tap any card to view the full menu in detail. All prices are in Nepali Rupees."
            light
          />
          <MenuGallery images={menuImages} />
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 lg:py-28 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Gallery"
            title="Inside Hotel Lanka"
            subtitle="A glimpse of our dining hall, lounge, bar and rooms — clean, warm, and welcoming."
            light
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[240px]">
            <div className="row-span-2 col-span-2 rounded-2xl overflow-hidden shadow-deep hover:shadow-gold transition-smooth group border border-gold">
              <img
                src={lankaDining}
                alt="Dining area with elegant rattan seating"
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-deep hover:shadow-gold transition-smooth group border border-gold">
              <img
                src={lankaBar}
                alt="Hotel Lanka bar"
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-deep hover:shadow-gold transition-smooth group border border-gold">
              <img
                src={lankaLounge}
                alt="Cozy lounge area"
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-deep hover:shadow-gold transition-smooth group border border-gold">
              <img
                src={lankaSeating}
                alt="Comfortable indoor seating"
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-deep hover:shadow-gold transition-smooth group border border-gold">
              <img
                src={lankaBurger}
                alt="Signature Lanka burger"
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STAY / ROOMS */}
      <section id="stay" className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 pattern-nepali" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="divider-ornament mb-4 max-w-[200px]">
                <span className="text-xs uppercase tracking-[0.3em] font-semibold">Hotel Stay</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-cream mb-5">
                Rest easy in <span className="text-gradient-gold">Dhulikhel</span>
              </h2>
              <p className="text-cream/75 text-base lg:text-lg leading-relaxed mb-8">
                Clean, comfortable rooms with fresh linen, warm hospitality, and a quiet location in
                Saraswati Bazaar. Perfect for travelers passing through, families on holiday, or
                guests visiting friends and relatives.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: BedDouble, label: "Comfortable Beds" },
                  { icon: Wifi, label: "Free Wi-Fi" },
                  { icon: Coffee, label: "Morning Tea" },
                  { icon: Hotel, label: "24/7 Service" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-surface border border-gold shadow-soft hover:border-accent transition-smooth"
                  >
                    <div className="h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center">
                      <f.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-cream">{f.label}</span>
                  </div>
                ))}
              </div>

              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-warm text-primary-foreground font-semibold shadow-warm hover:scale-105 hover:shadow-glow transition-smooth"
              >
                <PhoneCall className="h-5 w-5" /> Call to Book a Room
              </a>
            </div>

            <div className="order-1 lg:order-2 relative">
              <img
                src={lankaRoom}
                alt="Cozy hotel room at Hotel Lanka, Dhulikhel"
                loading="lazy"
                className="rounded-2xl shadow-deep w-full h-auto object-cover aspect-[4/5] border border-gold"
              />
              <div className="absolute -bottom-5 -left-5 bg-gradient-warm rounded-2xl shadow-gold p-5 max-w-[200px]">
                <div className="text-cream font-display text-2xl font-semibold leading-tight">
                  From Rs. 1,000<span className="text-base font-normal">/night</span>
                </div>
                <div className="text-cream/90 text-xs mt-1">Call for availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-20 lg:py-28 bg-gradient-dark text-cream relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40 pattern-mandala" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="What We Offer"
            title="Services"
            subtitle="From a quick chiya break to a peaceful overnight stay — we welcome every kind of guest."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: UtensilsCrossed,
                title: "Restaurant Dining",
                desc: "Comfortable indoor seating with full Nepali, Thakali & continental menu.",
              },
              {
                icon: Hotel,
                title: "Hotel Stay",
                desc: "Clean, cozy rooms for travelers passing through Dhulikhel.",
              },
              {
                icon: Wine,
                title: "Bar & Beverages",
                desc: "Full bar with whiskey, vodka, beer, mocktails, fresh juices and lassi.",
              },
              {
                icon: Users,
                title: "Family & Group Meals",
                desc: "Spacious tables and group sets for families and tour groups.",
              },
              {
                icon: Coffee,
                title: "Tea, Snacks & Breakfast",
                desc: "Hot chiya, sel roti, momos and morning breakfast sets.",
              },
              {
                icon: Clock,
                title: "Lunch & Dinner Sets",
                desc: "Hearty Thakali thalis served all day, 7 AM to 10 PM.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="p-7 rounded-2xl glass-gold hover:border-accent transition-smooth group"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-warm flex items-center justify-center mb-5 shadow-warm group-hover:scale-110 transition-smooth">
                  <s.icon className="h-6 w-6 text-cream" />
                </div>
                <h3 className="font-display text-2xl mb-2 text-cream">{s.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 pattern-nepali" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Guest Love"
            title="What Our Guests Say"
            subtitle="Honest words from people who've dined and stayed with us."
            light
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Amrit Aacharya",
                text: "It took time but the burger was amazing — one of the best burgers I ever had!",
                stars: 4,
              },
              {
                name: "Sita R.",
                text: "Authentic Thakali khana, very tasty dal and gundruk. Felt like home.",
                stars: 5,
              },
              {
                name: "Bikash T.",
                text: "Clean rooms, friendly staff, great location in Dhulikhel. Will visit again.",
                stars: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="relative p-7 rounded-2xl bg-gradient-surface border border-gold shadow-deep hover:shadow-gold hover:border-accent/60 transition-smooth"
              >
                <Quote className="absolute top-5 right-5 h-8 w-8 text-accent/20" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < t.stars ? "fill-accent text-accent" : "text-cream/20"}`}
                    />
                  ))}
                </div>
                <p className="text-cream/85 leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-cream/10">
                  <div className="h-10 w-10 rounded-full bg-gradient-warm flex items-center justify-center text-cream font-display font-bold">
                    {t.name[0]}
                  </div>
                  <div className="text-sm font-semibold text-accent">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 lg:py-20 bg-gradient-crimson relative overflow-hidden border-y border-gold">
        <div className="absolute inset-0 pattern-mandala opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h3 className="font-display text-3xl lg:text-5xl text-cream mb-4 text-glow">
            Hungry? <span className="text-gradient-gold">Call us now</span>
          </h3>
          <p className="text-cream/85 max-w-xl mx-auto mb-8 text-base lg:text-lg">
            Order ahead, reserve a table, or book a room — we're just one call away.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cream text-charcoal font-semibold shadow-deep hover:scale-105 transition-smooth"
            >
              <PhoneCall className="h-5 w-5" /> {PHONE}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-gold text-cream font-semibold hover:border-accent transition-smooth"
            >
              <Navigation className="h-5 w-5" /> Visit Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 pattern-nepali" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Visit Us"
            title="Come Say Namaste"
            subtitle="We're easy to find in Saraswati Bazaar — and even easier to call. Drop in, dine in, or stay the night."
            light
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="bg-gradient-surface rounded-2xl shadow-deep p-8 lg:p-10 border border-gold space-y-6">
              {[
                { icon: MapPin, label: "Address", value: ADDRESS },
                { icon: Clock, label: "Operating Hours", value: "7:00 AM – 10:00 PM, every day" },
                { icon: Phone, label: "Mobile", value: PHONE, href: `tel:${PHONE_TEL}` },
                { icon: PhoneCall, label: "Landline", value: LANDLINE, href: `tel:${LANDLINE}` },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-warm flex-shrink-0 flex items-center justify-center shadow-warm">
                    <c.icon className="h-5 w-5 text-cream" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-1">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-lg font-medium text-cream hover:text-accent transition-smooth"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-lg font-medium text-cream">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-warm text-primary-foreground font-semibold shadow-warm hover:scale-[1.02] transition-smooth"
                >
                  <PhoneCall className="h-5 w-5" /> Call Now
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass-gold text-cream font-semibold hover:border-accent transition-smooth"
                >
                  <Navigation className="h-5 w-5" /> Directions
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-deep border border-gold min-h-[400px]">
              <iframe
                title="Hotel Lanka location"
                src="https://www.google.com/maps?q=Saraswati+Bazaar+Dhulikhel+Nepal&output=embed"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-cream/80 pt-16 pb-8 border-t border-gold relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-warm flex items-center justify-center shadow-warm">
                  <span className="font-display text-xl font-bold text-cream">L</span>
                </div>
                <div>
                  <div className="font-display text-xl text-cream font-semibold">Hotel Lanka</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-accent">
                    Thakali Restaurant &amp; Hotel
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-md text-cream/60">
                Authentic Nepali Thakali khana, snacks, burgers and warm hospitality in Saraswati
                Bazaar, Dhulikhel. A welcoming home for travelers, families, and friends.
              </p>
            </div>

            <div>
              <h4 className="font-display text-lg text-accent mb-4">Visit</h4>
              <ul className="space-y-2 text-sm">
                <li>{ADDRESS}</li>
                <li>Open daily · 7 AM – 10 PM</li>
                <li>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    Get directions →
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg text-accent mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-accent transition-smooth">
                    {PHONE}
                  </a>
                </li>
                <li>
                  <a href={`tel:${LANDLINE}`} className="hover:text-accent transition-smooth">
                    {LANDLINE}
                  </a>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                <a href="#about" className="hover:text-accent">
                  About
                </a>
                <span className="text-cream/30">·</span>
                <a href="#menu" className="hover:text-accent">
                  Menu
                </a>
                <span className="text-cream/30">·</span>
                <a href="#gallery" className="hover:text-accent">
                  Gallery
                </a>
                <span className="text-cream/30">·</span>
                <a href="#stay" className="hover:text-accent">
                  Stay
                </a>
                <span className="text-cream/30">·</span>
                <a href="#contact" className="hover:text-accent">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-cream/10 pt-6 text-center text-xs text-cream/50">
            © {new Date().getFullYear()} Hotel Lanka · Lanka Thakali Restaurant and Hotel ·
            Dhulikhel, Nepal
          </div>
        </div>
      </footer>
    </div>
  );
}
