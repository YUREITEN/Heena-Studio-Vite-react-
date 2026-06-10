import { Link } from "react-router-dom";
// import { Calendar, Clock, GraduationCap, Users } from "lucide-react";
import { Calendar, Clock, Users } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { SAMPLE_CLASSES } from "@/data/sample";

import kidsSketching from "@/assets/classes/kids-sketching.jpg";
import mandalaMastery from "@/assets/classes/mandala-mastery.jpg";
import fabricPainting from "@/assets/classes/fabric-painting.jpg";
import resinArt from "@/assets/classes/resin-art.jpg";

/*
export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Art Classes — heena" },
      {
        name: "description",
        content:
          "Sketching, painting, mandala, resin and fabric painting classes for kids and adults.",
      },
      { property: "og:url", content: "/classes" },
    ],
    links: [{ rel: "canonical", href: "/classes" }],
  }),
  component: Classes,
});
*/

const CLASS_IMAGES: Record<string, string> = {
  "Kids Sketching": kidsSketching,
  "Mandala Mastery": mandalaMastery,
  "Fabric Painting": fabricPainting,
  "Resin Art": resinArt,
};

export default function Classes() {
  const list = SAMPLE_CLASSES;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Learn with us"
        title="Art classes for every age"
        subtitle="Small batches, gentle guidance, and lots of color — discover your voice as an artist."
      />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* {list.map((c) => (
            <div key={c.id} className="hover-lift rounded-2xl bg-card p-7 shadow-soft border border-border">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${ACCENTS[c.accent_color ?? "teal"] ?? ACCENTS.teal}`}>
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-2xl text-navy">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex items-center gap-2"><Users className="h-4 w-4 text-teal" /><span className="text-navy/80">{c.age_group} · {c.level}</span></div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-purple" /><span className="text-navy/80">{c.duration}</span></div>
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-pink" /><span className="text-navy/80">{c.schedule}</span></div>
              </dl>
              <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold-dark">
                Enroll
              </Link>
            </div>
          ))} */}

          {list.map((c) => (
            <div
              key={c.id}
              className="hover-lift overflow-hidden rounded-2xl bg-card shadow-soft border border-border"
            >
              <img src={CLASS_IMAGES[c.name]} alt={c.name} className="h-56 w-full object-cover" />

              <div className="p-7">
                <h3 className="font-heading text-2xl text-navy">{c.name}</h3>

                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>

                <dl className="mt-5 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-teal" />
                    <span className="text-navy/80">
                      {c.age_group} · {c.level}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-purple" />
                    <span className="text-navy/80">{c.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-pink" />
                    <span className="text-navy/80">{c.schedule}</span>
                  </div>
                </dl>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold-dark"
                >
                  Enroll
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
