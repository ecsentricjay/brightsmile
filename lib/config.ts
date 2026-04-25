// ============================================================
//  SITE CONFIG — edit this file for each new client project
//  Everything else in the project stays the same
// ============================================================

const siteConfig = {
  // ── Business identity ──────────────────────────────────────
  name:        "Spice Garden",
  tagline:     "Birmingham",
  description: "Birmingham's favourite takeaway for smash burgers, stone-baked pizzas, and slow-cooked kebabs.",
  logo:        "🔥",                  // emoji OR path to image in /public e.g. "/logo.png"

  // ── SEO (fills <head> meta tags automatically) ──────────────
  seo: {
    title:       "BrightSmile Dental",
    description: "Order online from Spice Garden Birmingham. Smash burgers, stone-baked pizzas and chargrilled kebabs delivered hot to your door in under 30 minutes.",
    keywords:    "takeaway Birmingham, burger delivery Birmingham, pizza Birmingham, kebab Birmingham, food delivery B19",
    ogImage:     "/og-image.jpg",
    favicon:     "/favicon.ico",
    themeColor:  "#f97316",
  },

  // ── Contact & location ─────────────────────────────────────
  contact: {
    phone:         "0121 714 5055",
    whatsapp:      "+441217145055",
    email:         "hello@spicegarden.co.uk",
    address:       "396 Summer Lane, Aston, Birmingham, B19 3PL",
    googleMapsUrl: "https://maps.google.com/?q=396+Summer+Lane+Birmingham",
  },

  // ── Opening hours ──────────────────────────────────────────
  hours: [
    { days: "Mon – Sat",     time: "4pm – 11pm" },
    { days: "Sunday",        time: "4pm – 10pm"  },
    { days: "Bank Holidays", time: "5pm – 10pm"  },
  ],

  // ── Order platforms (set to null to hide a button) ─────────
  ordering: {
    directPhone:    true,
    directWhatsapp: true,
    justEat:   "https://www.just-eat.co.uk/restaurants-mr-tasty-1-birmingham/menu",
    uberEats:  "https://www.ubereats.com/gb/store/mr-tasty-1/fi87QtrKW9KBPHFpCtOx6A",
    deliveroo: null,
  },

  // ── Brand colours ─────────────────────────────────────────
  colors: {
    primary:   "#f97316",
    secondary: "#ef4444",
    dark:      "#0a0a0a",
    card:      "#161616",
    border:    "rgba(255,255,255,0.07)",
  },

  // ── Social links (null = hidden) ──────────────────────────
  social: {
    facebook:  "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok:    null as string | null,
    twitter:   null as string | null,
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    copy:    "© 2024 Spice Garden Birmingham. All rights reserved.",
    tagline: "Made fresh. Delivered fast.",
  },
}

export default siteConfig
