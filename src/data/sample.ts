import heroStudio from "@/assets/hero-studio.jpg";
import fabricJeans from "@/assets/fabric-jeans.jpg";
import fabricCurtains from "@/assets/fabric-curtains.jpg";
import fabricCushions from "@/assets/fabric-cushions.jpg";
import paintingMandala from "@/assets/painting-mandala.jpg";
import paintingCharcoal from "@/assets/painting-charcoal.jpg";
import paintingWatercolor from "@/assets/painting-watercolor.jpg";
import paintingResin from "@/assets/painting-resin.jpg";
import saree from "@/assets/fabric-saree.jpg";
import bedsheet from "@/assets/fabric-bedsheet.jpg";
import hancky from "@/assets/fabric-hancky.jpg";
import mandala1 from "@/assets/mandala-1.jpg";
import graphite from "@/assets/graphite.jpg";

export type SampleArtwork = {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  image: string;
  description?: string;
};

export const SAMPLE_ARTWORKS: SampleArtwork[] = [
  {
    id: "s1",
    title: "Painted Navy Shirt",
    category: "Fabric Painting",
    subcategory: "Shirts",
    image: fabricJeans,
    description: "Hand-painted bird on cotton.",
  },
  {
    id: "s2",
    title: "Denim aesthetics",
    category: "Fabric Painting",
    subcategory: "Jeans",
    image: fabricCurtains,
    description: "fine linings on denim.",
  },
  {
    id: "s3",
    title: "Lotus Tales on Shirts",
    category: "Fabric Painting",
    subcategory: "Shirts",
    image: fabricCushions,
    description: "Lotus Tales On Fabric.",
  },
  {
    id: "s4",
    title: "Lotus Bloom Heritage Saree",
    category: "Fabric Painting",
    subcategory: "Sarees",
    image: saree,
    description: "Whispers of Lotus Elegance.",
  },
  {
    id: "s5",
    title: "Bedsheet Bliss",
    category: "Fabric Painting",
    subcategory: "Bedsheets",
    image: bedsheet,
    description: "Soft pastels  on cotton.",
  },
  {
    id: "s6",
    title: "Floral Handkerchief",
    category: "Fabric Painting",
    subcategory: "Handkerchiefs",
    image: hancky,
    description: "Petal Poetry Handkerchief.",
  },
  {
    id: "s7",
    title: "Cushion designs",
    category: "Fabric Painting",
    subcategory: "Cushion Covers",
    image: fabricCushions,
    description: "Cushion designs.",
  },

  {
    id: "s8",
    title: "Crystal Resin Initial",
    category: "Paintings",
    subcategory: "Resin Art",
    image: paintingMandala,
    description: "Personalized sparkling charm",
  },
  {
    id: "s9",
    title: "Quiet Portrait",
    category: "Paintings",
    subcategory: "Charcoal",
    image: paintingCharcoal,
    description: "Soft charcoal portrait study.",
  },
  {
    id: "s10",
    title: "Mandala Meditation",
    category: "Paintings",
    subcategory: "Mandala",
    image: mandala1,
    description: "Where the magic happens.",
  },
  {
    id: "s11",
    title: "Divine Lotus Devotion",
    category: "Paintings",
    subcategory: "Watercolor",
    image: paintingWatercolor,
    description: "Sacred love in bloom",
  },

  {
    id: "s12",
    title: "Name Plate Resin Tray",
    category: "Paintings",
    subcategory: "Resin Art",
    image: paintingResin,
    description: "Marbled teal & gold resin.",
  },

  {
    id: "s13",
    title: "Graphite Lamp Sketch.",
    category: "Paintings",
    subcategory: "Graphite",
    image: graphite,
    description: "Handcrafted graphite composition.",
  },
  {
    id: "s14",
    title: "Studio Workspace",
    category: "Studio",
    image: heroStudio,
    description: "Where the magic happens.",
  },
];

export const SAMPLE_TESTIMONIALS = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Student",
    message: "Heena's class transformed how I see art. Her warmth and patience are unmatched.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rahul Mehta",
    role: "Customer",
    message: "The hand-painted jeans she made for my wife are stunning. A true heirloom piece.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Anjali Verma",
    role: "Parent",
    message: "My daughter looks forward to every Saturday at heena. She's blossoming.",
    rating: 5,
  },
];

export const SAMPLE_CLASSES = [
  {
    id: "c1",
    name: "Kids Sketching",
    age_group: "Ages 6–12",
    level: "Beginner",
    duration: "8 weeks",
    schedule: "Sat 10–11:30 AM",
    description: "Foundations of drawing, line and observation.",
    icon: "Pencil",
    accent_color: "teal",
  },
  {
    id: "c2",
    name: "Mandala Mastery",
    age_group: "Teens & Adults",
    level: "All levels",
    duration: "6 weeks",
    schedule: "Sun 4–6 PM",
    description: "Symmetry, patience, and meditative geometry.",
    icon: "Flower",
    accent_color: "pink",
  },
  {
    id: "c3",
    name: "Fabric Painting",
    age_group: "Adults",
    level: "Intermediate",
    duration: "4 weeks",
    schedule: "Wed 6–8 PM",
    description: "Paint florals on jeans, shirts, and home decor.",
    icon: "Shirt",
    accent_color: "purple",
  },
  {
    id: "c4",
    name: "Resin Art",
    age_group: "Adults",
    level: "Beginner",
    duration: "Weekend workshop",
    schedule: "Sat–Sun",
    description: "Pour, swirl, and seal your own resin pieces.",
    icon: "Droplets",
    accent_color: "yellow",
  },
];
