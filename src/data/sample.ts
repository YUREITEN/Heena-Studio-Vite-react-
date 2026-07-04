import fabricJeans from "@/assets/fabric-jeans.jpg";
import fabricCurtains from "@/assets/fabric-curtains.jpg";
import fabricCushions from "@/assets/fabric-cushions.jpg";
import paintingMandala from "@/assets/painting-mandala.jpg";
import paintingCharcoal from "@/assets/new/ch2.jpeg";
import paintingWatercolor from "@/assets/painting-watercolor.jpg";
import paintingResin from "@/assets/painting-resin.jpg";
import saree from "@/assets/fabric-saree.jpg";
import bedsheet from "@/assets/fabric-bedsheet.jpg";
import hancky from "@/assets/fabric-hancky.jpg";
import mandala1 from "@/assets/mandala-1.jpg";
import graphite from "@/assets/graphite.jpg";
import ch1 from "@/assets/new/ch1.jpeg";
import ch3 from "@/assets/new/ch3.jpeg";
import o1 from "@/assets/new/o1.jpeg";
import o2 from "@/assets/new/o2.jpeg";
import o3 from "@/assets/new/o3.jpeg";
import o4 from "@/assets/new/o4.jpeg";
import o5 from "@/assets/new/o5.jpeg";
import o7 from "@/assets/new/o7.jpeg";

import r1 from "@/assets/new/r1.jpeg";
import r2 from "@/assets/new/r2.jpeg";
import r3 from "@/assets/new/r3.jpeg";
import r4 from "@/assets/new/r4.jpeg";
import r5 from "@/assets/new/r5.jpeg";
import r6 from "@/assets/new/r6.jpeg";
import r7 from "@/assets/new/r7.jpeg";
import r8 from "@/assets/new/r8.jpeg";
import r9 from "@/assets/new/r9.jpeg";
import r10 from "@/assets/new/r10.jpeg";
import r11 from "@/assets/new/r11.jpeg";
import r12 from "@/assets/new/r12.jpeg";
import r13 from "@/assets/new/r13.jpeg";
import r14 from "@/assets/new/r14.jpeg";
import r15 from "@/assets/new/r15.jpeg";
import r16 from "@/assets/new/r16.jpeg";
import w1 from "@/assets/new/waterpaint 1.jpeg";
import w2 from "@/assets/new/w2.jpeg";

import fp1 from "@/assets/new/fp1.jpeg";
import fp2 from "@/assets/new/fp2.jpeg";
import fp3 from "@/assets/new/fp3.jpeg";


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
  // {
  //   id: "s3",
  //   title: "Lotus Tales on Shirts",
  //   category: "Fabric Painting",
  //   subcategory: "Shirts",
  //   image: fabricCushions,
  //   description: "Lotus Tales On Fabric.",
  // },
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
    id: "fabric-placeholder-01",
   title: "Painted  Shirt",
    category: "Fabric Painting",
    subcategory: "Shirts",
    image: fp1,
    description: "Hand-painted bird on cotton.",
  },
  {
    id: "fabric-placeholder-02",
    title: "Painted  Shirt",
    category: "Fabric Painting",
    subcategory: "Shirts",
    image: fp2,
    description: "Hand-painted bird on cotton.",
  },
  {
    id: "fabric-placeholder-03",
    title: "Painted  Shirt",
    category: "Fabric Painting",
    subcategory: "Shirts",
    image: fp3,
    description: "Hand-painted bird on cotton.",
  },
  // {
  //   id: "fabric-placeholder-04",
  //   title: "Fabric Painting 04",
  //   category: "Fabric Painting",
  //   subcategory: "Bedsheets",
  //   image: fabricJeans,
  //   description: "New fabric artwork placeholder.",
  // },
  // {
  //   id: "fabric-placeholder-05",
  //   title: "Fabric Painting 05",
  //   category: "Fabric Painting",
  //   subcategory: "Cushion Covers",
  //   image: fabricJeans,
  //   description: "New fabric artwork placeholder.",
  // },
  // {
  //   id: "fabric-placeholder-06",
  //   title: "Fabric Painting 06",
  //   category: "Fabric Painting",
  //   subcategory: "Handkerchiefs",
  //   image: fabricJeans,
  //   description: "New fabric artwork placeholder.",
  // },
  // {
  //   id: "fabric-placeholder-07",
  //   title: "Fabric Painting 07",
  //   category: "Fabric Painting",
  //   subcategory: "Jeans",
  //   image: fabricJeans,
  //   description: "New fabric artwork placeholder.",
  // },
  // {
  //   id: "fabric-placeholder-08",
  //   title: "Fabric Painting 08",
  //   category: "Fabric Painting",
  //   subcategory: "Shirts",
  //   image: fabricJeans,
  //   description: "New fabric artwork placeholder.",
  // },
  // {
  //   id: "fabric-placeholder-09",
  //   title: "Fabric Painting 09",
  //   category: "Fabric Painting",
  //   subcategory: "Curtains",
  //   image: fabricJeans,
  //   description: "New fabric artwork placeholder.",
  // },
  // {
  //   id: "fabric-placeholder-10",
  //   title: "Fabric Painting 10",
  //   category: "Fabric Painting",
  //   subcategory: "Bedsheets",
  //   image: fabricJeans,
  //   description: "New fabric artwork placeholder.",
  // },
  // {
  //   id: "fabric-placeholder-11",
  //   title: "Fabric Painting 11",
  //   category: "Fabric Painting",
  //   subcategory: "Cushion Covers",
  //   image: fabricJeans,
  //   description: "New fabric artwork placeholder.",
  // },
  // {
  //   id: "fabric-placeholder-12",
  //   title: "Fabric Painting 12",
  //   category: "Fabric Painting",
  //   subcategory: "Handkerchiefs",
  //   image: fabricJeans,
  //   description: "New fabric artwork placeholder.",
  // },
  // {
  //   id: "fabric-placeholder-13",
  //   title: "Fabric Painting 13",
  //   category: "Fabric Painting",
  //   subcategory: "Jeans",
  //   image: fabricJeans,
  //   description: "New fabric artwork placeholder.",
  // },
  // {
  //   id: "fabric-placeholder-14",
  //   title: "Fabric Painting 14",
  //   category: "Fabric Painting",
  //   subcategory: "Shirts",
  //   image: fabricJeans,
  //   description: "New fabric artwork placeholder.",
  // },
  // {
  //   id: "fabric-placeholder-15",
  //   title: "Fabric Painting 15",
  //   category: "Fabric Painting",
  //   subcategory: "Curtains",
  //   image: fabricJeans,
  //   description: "New fabric artwork placeholder.",
  // },

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
    title: "Portrait in Charcoal",
    category: "Paintings",
    subcategory: "Charcoal",
    image: ch1,
    description: "charcoal portrait study.",
  },
  {
   id: "s15",
    title: "Portrait in Charcoal",
    category: "Paintings",
    subcategory: "Charcoal",
    image: ch3,
    description: "charcoal portrait study.",
  },
  {
    id: "s16",
    title: "Mirror Holder",
    category: "Paintings",
    subcategory: "Acrylic",
    image: o1,
    description: "Mirror holder with acrylic art.",
  },
  {
    id: "s17",
    title: "Mirror Holder",
    category: "Paintings",
    subcategory: "Acrylic",
    image: o2,
    description: "Mirror holder with acrylic art.",
  },
  {
    id: "s18",
    title: "Life Casting art",
    category: "Paintings",
    subcategory: "Acrylic",
    image: o3,
    description: "Life casting art ",
  },
  {
    id: "s19",
    title: "Life Casting art",
    category: "Paintings",
    subcategory: "Acrylic",
    image: o4,
    description: "Life casting art ",
  },
  {
     id: "s20",
    title: "Life Casting art",
    category: "Paintings",
    subcategory: "Acrylic",
    image: o5,
    description: "Life casting art ",
  },
  {
         id: "s21",
    title: "Suitcase Designing ",
    category: "Paintings",
    subcategory: "Acrylic",
    image: o7,
    description: "Suitcase design to make it look different  ",
  },
  {
    id: "s22",
    title: "Resin Table Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r1,
    description: "resin art on table giving it a new design",
  },
{
    id: "s23",
    title: "Resin Table Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r2,
    description: "resin art on table giving it a new design",
  },
{
    id: "s24",
    title: "Resin Coaster Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r3,
    description: "resin art on table giving it a new design",
  },
{
    id: "s25",
    title: "Resin Frame Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r4,
    description: "resin art on table giving it a new design",
  },
{
    id: "s26",
    title: "Resin Ashtray Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r5,
    description: "resin art on table giving it a new design",
  },
{
    id: "s27",
    title: "Resin Frame Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r6,
    description: "resin art on table giving it a new design",
  },
{
    id: "s28",
    title: "Resin Gift Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r7,
    description: "resin art on table giving it a new design",
  },
{
    id: "s29",
    title: "Resin Nameplate Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r8,
    description: "resin art on table giving it a new design",
  },
{
    id: "s30",
    title: "Resin Nameplate Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r9,
    description: "resin art on table giving it a new design",
  },
{
    id: "s31",
    title: "Resin Nameplate Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r10,
    description: "resin art on table giving it a new design",
  },
{
    id: "s32",
    title: "Resin Nameplate Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r11,
    description: "resin art on table giving it a new design",
  },
{
    id: "s33",
    title: "Resin Nameplate Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r12,
    description: "resin art on table giving it a new design",
  },
  {
    id: "s34",
    title: "Resin Keychain Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r13,
    description: "resin art on table giving it a new design",
  },
  
  {
    
    id: "s35",
    title: "Resin Keychain Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r14,
    description: "resin art on table giving it a new design",
  },
 {
    
    id: "s36",
    title: "Resin Keychain Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r15,
    description: "resin art on table giving it a new design",
  },
 {
    
    id: "s37",
    title: "Resin Keychain Design",
    category: "Paintings",
    subcategory: "Resin Art",
    image: r16,
    description: "resin art on table giving it a new design",
  },

  {
    id: "s38",
    title: "Painting 11",
    category: "Paintings",
    subcategory: "Watercolor",
    image: w1,
    description: "New painting placeholder.",
  },
  {
    id: "s39",
    title: "Painting 12",
    category: "Paintings",
    subcategory: "Watercolor",
    image: w2,
    description: "New painting placeholder.",
  },
  // {
  //   id: "painting-placeholder-13",
  //   title: "Painting 13",
  //   category: "Paintings",
  //   subcategory: "Mandala",
  //   image: paintingResin,
  //   description: "New painting placeholder.",
  // },
  // {
  //   id: "painting-placeholder-14",
  //   title: "Painting 14",
  //   category: "Paintings",
  //   subcategory: "Resin Art",
  //   image: paintingResin,
  //   description: "New painting placeholder.",
  // },
  // {
  //   id: "painting-placeholder-15",
  //   title: "Painting 15",
  //   category: "Paintings",
  //   subcategory: "Charcoal",
  //   image: paintingResin,
  //   description: "New painting placeholder.",
  // },
  // {
  //   id: "s14",
  //   title: "Studio Workspace",
  //   category: "Studio",
  //   image: heroStudio,
  //   description: "Where the magic happens.",
  // },
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
