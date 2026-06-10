import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Palette,
  Star,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SAMPLE_ARTWORKS, SAMPLE_TESTIMONIALS } from "@/data/sample";
import fabricJeans from "@/assets/fabric-jeans.jpg";
import resinart from "@/assets/painting-resin.jpg";
import fabricCurtains from "@/assets/fabric-curtains.jpg";
import paintingMandala from "@/assets/painting-mandala.jpg";
import paintingWatercolor from "@/assets/painting-watercolor.jpg";
import paintingResin from "@/assets/painting-resin.jpg";
import artist from "@/assets/artist-portrait.jpg";
import saree from "@/assets/fabric-saree.jpg";
import arrowImg from "@/assets/arrow.png";

import commissionImg from "@/assets/commission-process.jpeg";
import expert from "@/assets/icons/expert.png";
import artcourses from "@/assets/icons/2.png";
import tools from "@/assets/icons/tools.png";
import palette from "@/assets/icons/paint-palette.png";

/*
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "heena — Fabric Painting, Paintings & Art Classes" },
      {
        name: "description",
        content:
          "Original artworks, hand-painted fabric, and warm art classes for kids and adults at heena.",
      },
      { property: "og:title", content: "Heena Rathore" },
      { property: "og:description", content: "Art that tells your story." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});
*/

const SLIDES = [
  {
    src: saree,
    title: "Where every brushstroke matters",
    subtitle: "Original artworks, hand-painted fabric & art classes.",
  },
  {
    src: fabricJeans,
    href: "https://www.instagram.com/reel/DTP__KMk7K7/",
    title: "Wearable art, made by hand",
    subtitle: "Custom florals on denim, shirts, and home decor.",
  },
  {
    src: resinart,
    title: "Resin art, made by hand",
    subtitle: "Custom resin pieces for your home or collection.",
  },
  {
    src: paintingMandala,
    title: "Mandalas that quiet the mind",
    subtitle: "Meditative geometry in fine gold detail.",
  },
  {
    src: paintingWatercolor,
    title: "Classes for kids and adults",
    subtitle: "Discover your creative side this season.",
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 1;

      if (start >= 500) {
        start = 500;
        clearInterval(interval);
      }

      setCount(start);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <SiteLayout>
      {/* Hero slideshow */}
      <section className="relative h-screen min-h-[520px] w-full overflow-hidden">
        {SLIDES.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.src} alt={s.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/40 to-navy/70" />
          </div>
        ))}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-5 pb-24 text-white lg:px-8 lg:pb-32">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold animate-fade-in">
            heena
          </p>
          <h1
            key={slide}
            className="mt-3 max-w-3xl font-heading text-4xl text-white md:text-6xl lg:text-7xl animate-fade-up"
          >
            {SLIDES[slide].title}
          </h1>
          <p
            key={`s-${slide}`}
            className="mt-4 max-w-xl text-base text-white/90 md:text-lg animate-fade-up"
          >
            {SLIDES[slide].subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
            <Link
              to="/classes"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-lift hover:bg-gold-dark"
            >
              Join Classes
            </Link>
            <Link
              to="/gallery"
              className="rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              View Gallery
            </Link>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-gold" : "w-3 bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Artist intro collage */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-lift">
              <img
                src={artist}
                alt="Heena, founding artist"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <img
              src={paintingMandala}
              alt=""
              className="absolute -left-4 -top-4 hidden h-28 w-28 rounded-xl object-cover shadow-soft lg:block"
            />
            <img
              src={fabricJeans}
              alt=""
              className="absolute -right-4 top-1/3 hidden h-32 w-32 rounded-xl object-cover shadow-soft lg:block"
            />
            <img
              src={paintingResin}
              alt=""
              className="absolute -bottom-4 -left-2 hidden h-28 w-28 rounded-xl object-cover shadow-soft lg:block"
            />
            <img
              src={paintingWatercolor}
              alt=""
              className="absolute -bottom-6 right-6 hidden h-24 w-24 rounded-xl object-cover shadow-soft lg:block rotate-180pain"
            />
            <img
              src={saree}
              alt=""
              className="absolute -bottom-6 right-6 hidden h-24 w-24 rounded-xl object-cover shadow-soft lg:block rotate-180pain"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Meet the artist
            </p>
            <h2 className="mt-3 font-heading text-3xl text-navy md:text-5xl text-balance">
              A decade of color, patience, and patterns.
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              heena is a small, warm space dedicated to original artworks and the joy of teaching.
              From mandalas to fabric painting, every piece is created — and taught — with care.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-navy hover:text-gold-dark"
            >
              Read the studio story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      {/* <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
              What we do
            </p>
            <h2 className="mt-3 font-heading text-3xl text-navy md:text-5xl">
              From your idea to a finished piece.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: Pencil,
                color: "text-teal",
                title: "Sketching",
                desc: "Foundations for ages 6 and up.",
              },
              {
                Icon: Brush,
                color: "text-purple",
                title: "Painting",
                desc: "Oil, acrylic, watercolor and more.",
              },
              {
                Icon: Droplets,
                color: "text-yellow",
                title: "Resin Art",
                desc: "Pour, swirl, and seal.",
              },
              { Icon: Flower, color: "text-pink", title: "Mandala", desc: "Meditative symmetry." },
              {
                Icon: Shirt,
                color: "text-teal",
                title: "Fabric Painting",
                desc: "Wearable & home-decor art.",
              },
              {
                Icon: Sparkles,
                color: "text-gold",
                title: "Kids Classes",
                desc: "Joyful weekend workshops.",
              },
            ].map(({ Icon, color, title, desc }) => (
              <div
                key={title}
                className="group hover-lift rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent ${color}`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-2xl text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      <section className="bg-[#FAF7F2] py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Side */}
            <div>
              {/* PERFECT */}
              <div className="flex justify-center mb-9 ml-9">
                <div className="relative">
                  <div
                    className="inline-block bg-[#F8DCE3] px-8 py-4 mb-6"
                    style={{
                      borderRadius: "9% 25% 10% 5% / 40% 35% 45% 90%",
                    }}
                  >
                    <span
                      className="font-heading text-2xl text-navy font-mono text-[40px]"
                      style={{
                        fontFamily: "'Allura', cursive",
                        lineHeight: "1",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Did You Know?
                    </span>
                  </div>
                  {/* Floating Arrow */}
                  <img
                    src={arrowImg}
                    alt=""
                    className="absolute left-[170px] top-[80px] w-24 gentle-bounce pointer-events-none"
                  />{" "}
                </div>
              </div>

              {/* PERFECT */}

              <div
                className=" font-medium font-normal text-[30px] text-navy 
                 "
              >
                Its easy to commission a custom
                <br /> art piece.
              </div>

              <motion.div
                className="mt-8 flex flex-col items-center gap-5 scale-110"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.25,
                    },
                  },
                }}
              >
                <motion.div
                  className="flex w-[340px] items-center gap-4 px-8 py-4"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -50,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                  style={{
                    background: "#F8E3D2",
                    borderRadius: "20% 25% 10% 6% / 30% 35% 45% 80%",
                  }}
                >
                  <span className="font-semibold text-navy">1.</span>
                  <span className="font-medium  text-[19px] text-navy">Think of a concept</span>
                </motion.div>

                <motion.div
                  className="flex w-[340px] items-center gap-4 px-8 py-4"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -50,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                  style={{
                    background: "#F6C8D5",
                    borderRadius: "13% 25% 10% 3% / 40% 35% 45% 90%",
                  }}
                >
                  <span className="font-semibold text-navy">2.</span>
                  <span className="font-medium  text-[19px] text-navy">Approve the design</span>
                </motion.div>

                <motion.div
                  className="flex w-[340px] items-center gap-4 px-8 py-4"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -50,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                  style={{
                    background: "#EAA3B5",
                    borderRadius: "9% 25% 10% 5% / 40% 35% 45% 90%",
                  }}

                  // checked by me
                >
                  <span className="font-semibold text-navy">3.</span>
                  <span className="font-medium  text-[19px] text-navy">
                    Artwork creation begins
                  </span>
                </motion.div>

                <motion.div
                  className="flex w-[340px] items-center gap-4 px-8 py-4"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -50,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                  style={{
                    background: "#D87B96",
                    borderRadius: "9% 25% 10% 5% / 40% 35% 45% 90%",
                  }}
                >
                  <span className="font-semibold text-navy">4.</span>
                  <span className="font-medium  text-[19px] text-navy">
                    Receive & enjoy your artwork
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side */}
            <div className="relative flex justify-center">
              <div
                className="absolute inset-0 m-auto h-[450px] w-[450px] bg-[#F8EDE8]"
                style={{
                  borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
                }}
              />

              <img
                src={commissionImg}
                alt="Commission Process"
                className="relative z-10 h-[520px] w-[520px] object-cover shadow-lift"
                style={{
                  borderRadius: "80% 60% 70% 70% / 30% 20% 40% 20%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured fabric painting */}
      {/* <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Featured
            </p>
            <h2 className="mt-3 font-heading text-3xl text-navy md:text-5xl">Fabric painting</h2>
          </div>
          <Link
            to="/fabric-painting"
            className="hidden md:inline-flex items-center gap-2 font-semibold text-navy hover:text-gold-dark"
          >
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { img: fabricJeans, label: "Jeans" },
            { img: fabricCurtains, label: "Curtains" },
            { img: fabricCushions, label: "Cushion Covers" },
          ].map((c) => (
            <Link
              to="/fabric-painting"
              key={c.label}
              className="img-zoom hover-lift group relative block overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={c.img}
                alt={c.label}
                className="aspect-[4/5] h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="font-heading text-2xl text-white">{c.label}</h3>
                <p className="text-sm text-white/80">Explore the collection →</p>
              </div>
            </Link>
          ))}
        </div>
      </section> */}

      {/* WHY CHOOSE US SECTION */}
      {/* WHY CHOOSE heena */}

      <section className="relative overflow-hidden bg-[#F2ECE4] py-24">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
      radial-gradient(circle at 15% 20%, transparent 0 48px, #d8c9bb 49px, transparent 50px),
      radial-gradient(circle at 85% 70%, transparent 0 48px, #d8c9bb 49px, transparent 50px)
      `,
            backgroundSize: "300px 300px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT IMAGES */}

            <div className="relative flex justify-center">
              {/* Student Card */}

              <div
                className="
          absolute
          left-[-160px]
          top-9
          z-20
          rounded-[28px]
          bg-[#6B4423]
          px-10
          py-8
          text-center
          shadow-xl
          "
              >
                <h3 className="font-heading text-6xl text-white"> {count}+</h3>

                <p className="mt-2 text-lg text-[#D4A574]">Happy Students</p>
              </div>

              {/* Main Image */}

              <motion.img
                src={fabricCurtains}
                alt="Fabric Curtains"
                className="
    h-[650px]
    w-[420px]
    rounded-[30px]
    border-4
    border-white
    object-cover
    shadow-xl
  "
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              />

              {/* Floating Image */}

              <motion.img
                src={paintingResin}
                alt="Resin Art"
                className="
    absolute
    bottom-0
    left-[-60px]
    h-[320px]
    w-[320px]
    rounded-[30px]
    border-4
    border-white
    object-cover
    shadow-xl
  "
                initial={{
                  opacity: 0,
                  y: 120,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* RIGHT CONTENT */}

            <div>
              <p className="font-medium tracking-[3px] text-[#D4A574] uppercase">Why Choose Us</p>

              <motion.h2
                className="
  mt-4
  font-heading
  text-4xl
  md:text-5xl
  leading-tight
  overflow-hidden
  "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.25,
                    },
                  },
                }}
              >
                <motion.span
                  className="block text-navy"
                  variants={{
                    hidden: {
                      y: 80,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                    },
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  Discover The Perfect Place To
                </motion.span>

                <motion.span
                  className="block text-[#D4A574]"
                  variants={{
                    hidden: {
                      y: 80,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                    },
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                  }}
                >
                  Learn And Create Art
                </motion.span>
              </motion.h2>

              <motion.p
                className="mt-6 text-lg leading-relaxed text-muted-foreground"
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
              >
                At heena, we provide a creative environment where students can explore different art
                forms, learn professional techniques, and express their imagination.
              </motion.p>
              {/* Feature 1 */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                  filter: "blur(12px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
              >
                <div className="mt-10 border-b border-[#D4A574]/130 pb-6">
                  <div className="flex gap-4">
                    <img src={expert} alt="" className="h-14 w-14 object-contain" />

                    <div>
                      <h3 className="font-heading text-2xl text-navy">Expert Art Guidance</h3>

                      <p className="mt-2 text-muted-foreground">
                        Learn from experienced artists who guide you through every technique with
                        patience and creativity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}

                <div className="border-b border-[#bca58a]/130 py-6">
                  <div className="flex gap-4">
                    <img src={artcourses} alt="" className="h-14 w-14 object-contain" />

                    <div>
                      <h3 className="font-heading text-2xl text-navy">Variety Of Art Courses</h3>

                      <p className="mt-2 text-muted-foreground">
                        Fabric painting, mandala art, resin art, sketching and more.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}

                <div className="border-b border-[#D4A574]/130 py-6">
                  <div className="flex gap-4">
                    <img src={tools} alt="" className="h-14 w-14 object-contain" />

                    <div>
                      <h3 className="font-heading text-2xl text-navy">Hands-On Learning</h3>

                      <p className="mt-2 text-muted-foreground">
                        Practice real techniques and create your own artworks from day one.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}

                <div className="py-6">
                  <div className="flex gap-4">
                    <img src={palette} alt="" className="h-14 w-14 object-contain" />

                    <div>
                      <h3 className="font-heading text-2xl text-navy">Friendly Environment</h3>

                      <p className="mt-2 text-muted-foreground">
                        A supportive and inspiring atmosphere for artists of all ages.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Student / studio works */}
      <a
        href="https://www.instagram.com/artist__resin_expert?igsh=MWM1cTB3dmg3Y3EzOA=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <section className="bg-white py-20 lg:py-24" id="gallery">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
                Studio gallery
              </p>
              <h2 className="mt-3 font-heading text-3xl text-navy md:text-5xl">
                A glimpse of recent works.
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {SAMPLE_ARTWORKS.slice(0, 8).map((a) => (
                <div
                  key={a.id}
                  className="img-zoom hover-lift overflow-hidden rounded-xl shadow-soft"
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold/10"
              >
                Open full gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </a>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
            Testimonials
          </p>
          <h2 className="mt-3 font-heading text-3xl text-navy md:text-5xl">
            From our students & collectors.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SAMPLE_TESTIMONIALS.map((t) => (
            <figure key={t.id} className="hover-lift rounded-2xl bg-white p-7 shadow-soft">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-navy/85">"{t.message}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-purple/15 text-purple font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 text-white lg:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Palette className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-4 font-heading text-3xl text-white md:text-5xl text-balance">
            Let's create something beautiful together.
          </h2>
          <p className="mt-4 text-white/90">Custom Paintings ● Resin Art ● Rangoli</p>
          <p className="mt-2 text-grey/90">Hand Painted Works</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy hover:bg-gold-dark"
          >
            Order on Whatsapp <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
