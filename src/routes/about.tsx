import { SiteLayout } from "@/components/layout/SiteLayout";
import artist from "@/assets/artist-portrait.jpg";

/*
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — heena" },
      {
        name: "description",
        content: "The story behind Heena — where creativity meets Artistic Excellence.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});
*/

export default function About() {
  return (
    <SiteLayout>
      {/* <PageHero
        eyebrow="Our story"
        title="The story behind Heena "
        subtitle=" where creativity meets Artistic Excellence."
      /> */}

      {/* <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src={artist}
              alt="Heena, founder & artist"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl text-navy md:text-4xl">
              Heena Rathor – Artist from Rajasthan
            </h2>
            <p className="mt-4 text-muted-foreground">
              I am Heena Rathor, a passionate artist from Rajasthan, India. My work blends
              creativity, tradition, and emotion through custom paintings, resin art, rangoli
              designs, and hand-painted creations. Every artwork is crafted with dedication and
              attention to detail, transforming ideas and memories into unique pieces of art.
              Through heena, I aim to bring colors, culture, and creativity into every
              creation.
            </p>
            <p className="mt-3 text-muted-foreground">
              The mission stays simple: make beautiful work, and help others discover their own
              creative voice.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { Icon: Heart, color: "text-pink", label: "10+ years", sub: "of practice" },
                { Icon: Sparkles, color: "text-teal", label: "200+ students", sub: "and counting" },
                { Icon: Award, color: "text-gold", label: "Featured", sub: "in local exhibitions" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-5 shadow-soft">
                  <s.Icon className={`h-6 w-6 ${s.color}`} />
                  <p className="mt-3 font-heading text-xl text-navy">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-[#FAF7F2] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* TOP HEADING */}

          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-sm tracking-[3px] uppercase text-[#B88A44]">About The Artist</p>

            <h2 className="font-heading text-2xl leading-tight text-navy md:text-4xl">
              Bringing creativity, tradition, and
              <span className="italic text-[#B88A44]"> handcrafted beauty </span>
              into every artwork and inspiring others to
              <span className="italic text-[#B88A44]"> explore their artistic voice.</span>
            </h2>
          </div>

          {/* MIDDLE SECTION */}

          <div className="mt-24 grid items-center gap-10 lg:grid-cols-[1fr_420px_1fr]">
            {/* LEFT */}

            <div>
              <h3 className="font-heading text-5xl text-navy">Heena</h3>

              <h4 className="text-4xl text-navy">Rathor</h4>

              <p className="mt-3 text-lg text-[#B88A44]">Artist • Instructor • Creator</p>
            </div>

            {/* CENTER IMAGE */}

            <div>
              <img
                src={artist}
                alt="Heena Rathor"
                className="
            h-[520px]
            w-full
            rounded-[28px]
            object-cover
            shadow-lift
          "
              />
            </div>

            {/* RIGHT */}

            <div>
              <p className="leading-relaxed text-muted-foreground">
                I am Heena Rathor, a passionate artist from Rajasthan, India. My work blends
                creativity, tradition, and emotion through custom paintings, resin art, rangoli
                designs, and hand-painted creations.
                <br />
                <br />
                Every artwork is crafted with dedication and attention to detail, transforming ideas
                and memories into meaningful pieces of art. Through heena, I aim to bring colors,
                culture, and creativity into every creation.
              </p>
            </div>
          </div>

          {/* BOTTOM SPECIALIZATION BAR */}

          {/* <div className="mt-20 border-t border-[#D4C2AE] pt-8">
            <p className="mb-4 text-sm text-muted-foreground">Specializations</p>

            <div className="flex flex-wrap gap-8 text-navy">
              <span>Fabric Painting</span>

              <span>Resin Art</span>

              <span>Mandala Art</span>

              <span>Custom Paintings</span>

              <span>Art Classes</span>

              <span>Rangoli Designs</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">Inside the studio</h2>
          <div className="mt-8 overflow-hidden rounded-2xl shadow-lift">
            <img
              src={studio}
              alt="Inside heena"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section> */}
    </SiteLayout>
  );
}
