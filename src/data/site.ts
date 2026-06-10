export const SITE = {
  name: "Heena Rathore",
  tagline: "Art that tells your story",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "+91 86909 69324",
  instagram: import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/artist__resin_expert",
  email: import.meta.env.VITE_ARTIST_EMAIL || "hello@heenastudio.com",
  address: "heena, India",
};

export type NavItem = { label: string; to: string };

export const NAV_PRIMARY: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Fabric Painting", to: "/fabric-painting" },
  { label: "Paintings", to: "/paintings" },
  { label: "Art Classes", to: "/classes" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const FABRIC_CATEGORIES = [
  "Jeans",
  "Shirts",
  "Curtains",
  "Bedsheets",
  "Cushion Covers",
  "Handkerchiefs",
] as const;

export const PAINTING_CATEGORIES = [
  "Charcoal",
  "Oil",
  "Acrylic",
  "Watercolor",
  "Graphite",
  "Mandala",
  "Resin Art",
] as const;
