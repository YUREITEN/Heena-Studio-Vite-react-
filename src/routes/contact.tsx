// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { useServerFn } from "@tanstack/react-start";
// import { toast } from "sonner";
// import { Mail, MapPin, Phone } from "lucide-react";
// import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
// import { submitContact } from "@/lib/api/contact.functions";
// import { SITE } from "@/data/site";
// import artist from "@/assets/artist-portrait.jpg";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — heena" },
//       {
//         name: "description",
//         content: "Get in touch with heena for classes, commissions, or collaborations.",
//       },
//       { property: "og:url", content: "/contact" },
//     ],
//     links: [{ rel: "canonical", href: "/contact" }],
//   }),
//   component: Contact,
// });

// function Contact() {
//   const send = useServerFn(submitContact);
//   const [busy, setBusy] = useState(false);

//   async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setBusy(true);
//     const fd = new FormData(e.currentTarget);
//     try {
//       await send({
//         data: {
//           name: String(fd.get("name") || ""),
//           email: String(fd.get("email") || ""),
//           phone: String(fd.get("phone") || ""),
//           service: String(fd.get("service") || ""),
//           message: String(fd.get("message") || ""),
//         },
//       });
//       toast.success("Thank you! Heena will get back to you shortly.");
//       (e.target as HTMLFormElement).reset();
//     } catch (err) {
//       toast.error(err instanceof Error ? err.message : "Could not send. Try again.");
//     } finally {
//       setBusy(false);
//     }
//   }

//   return (
//     <SiteLayout>
//       <PageHero
//         eyebrow="Say hello"
//         title="Let's create together"
//         subtitle="Classes, commissions, collaborations — drop a note and Heena will reply personally."
//       />

//       <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
//         <div className="grid gap-10 lg:grid-cols-2">
//           <div>
//             <div className="overflow-hidden rounded-2xl shadow-lift">
//               <img src={artist} alt="Heena" className="h-full w-full object-cover" loading="lazy" />
//             </div>
//             <ul className="mt-8 space-y-3 text-navy">
//               <li className="flex items-center gap-3">
//                 <Mail className="h-5 w-5 text-teal" /> {SITE.email}
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone className="h-5 w-5 text-pink" /> +{SITE.whatsappNumber}
//               </li>
//               <li className="flex items-center gap-3">
//                 <MapPin className="h-5 w-5 text-purple" /> {SITE.address}
//               </li>
//             </ul>
//           </div>

//           <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-soft md:p-8">
//             <div className="grid gap-4 md:grid-cols-2">
//               <Field name="name" label="Name" required />
//               <Field name="email" label="Email" type="email" required />
//               <Field name="phone" label="Phone" />
//               <Field name="service" label="Interested in" placeholder="e.g. Mandala class" />
//             </div>
//             <div className="mt-4">
//               <label className="block text-sm font-semibold text-navy">Message</label>
//               <textarea
//                 name="message"
//                 required
//                 minLength={5}
//                 maxLength={2000}
//                 rows={5}
//                 className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={busy}
//               className="mt-6 w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-soft hover:bg-gold-dark disabled:opacity-60"
//             >
//               {busy ? "Sending…" : "Send message"}
//             </button>
//           </form>
//         </div>
//       </section>
//     </SiteLayout>
//   );
// }

// function Field({
//   name,
//   label,
//   type = "text",
//   required,
//   placeholder,
// }: {
//   name: string;
//   label: string;
//   type?: string;
//   required?: boolean;
//   placeholder?: string;
// }) {
//   return (
//     <div>
//       <label className="block text-sm font-semibold text-navy">
//         {label}
//         {required && <span className="text-pink"> *</span>}
//       </label>
//       <input
//         name={name}
//         type={type}
//         required={required}
//         placeholder={placeholder}
//         maxLength={255}
//         className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
//       />
//     </div>
//   );
// }

import { Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import artist from "@/assets/artist-portrait.jpg";

/*
export const Route = createFileRoute("/contact")({
  component: Contact,
});
*/

export default function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);

    const message = `
🎨 New heena Inquiry

Name: ${fd.get("name")}
Email: ${fd.get("email")}
Phone: ${fd.get("phone")}
Service: ${fd.get("service")}

Message:
${fd.get("message")}
`;

window.open(
  `https://wa.me/918690969324?text=${encodeURIComponent(message)}`,
  "_blank"
);
  }

  return (
    <SiteLayout>
      <section className="bg-[#F5F5F5] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {/* LEFT SIDE */}

            <div className="rounded-[32px] bg-white p-8 md:p-12 shadow-soft">
              <p className="font-semibold text-[#D4A574]">Get In Touch</p>

              <h1 className="mt-4 font-heading text-5xl leading-tight text-navy md:text-6xl">
                Let's Chat,
                <br />
                Reach Out To Us
              </h1>

              <p className="mt-5 max-w-xl text-muted-foreground">
                Have questions about classes, fabric painting, resin art, custom artwork, or
                commissions? Send us a message and we'll get back to you shortly.
              </p>

              <div className="mt-8 border-t" />

              <form onSubmit={onSubmit} className="mt-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">Name</label>

                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border bg-[#F8F8F8] px-4 py-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">Phone</label>

                    <input
                      name="phone"
                      placeholder="Phone number"
                      className="w-full rounded-xl border bg-[#F8F8F8] px-4 py-3 outline-none"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm font-medium text-navy">Email</label>

                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border bg-[#F8F8F8] px-4 py-3 outline-none"
                  />
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm font-medium text-navy">Service</label>

                  <input
                    name="service"
                    placeholder="Fabric Painting / Resin Art / Classes"
                    className="w-full rounded-xl border bg-[#F8F8F8] px-4 py-3 outline-none"
                  />
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm font-medium text-navy">Message</label>

                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Leave your message..."
                    className="w-full rounded-xl border bg-[#F8F8F8] px-4 py-3 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="
                    mt-6
                    w-full
                    rounded-xl
                    bg-[#D4A574]
                    px-6
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:opacity-90
                  "
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* RIGHT SIDE */}

            <div className="space-y-4">
              {/* IMAGE */}

              <div className="overflow-hidden rounded-[32px] bg-[#DDE9FF]">
                <img src={artist} alt="Heena" className="h-[430px] w-full object-cover" />
              </div>

              {/* EMAIL */}

              <div className="rounded-[24px] bg-white p-6 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-navy">Email</h3>

                    <p className="text-muted-foreground">heenastudio@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* PHONE */}

              <div className="rounded-[24px] bg-white p-6 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-navy">WhatsApp</h3>

                    <p className="text-muted-foreground">+91 86909 69324</p>
                  </div>
                </div>
              </div>

              {/* ADDRESS */}

              <div className="rounded-[24px] bg-white p-6 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-pink-100 p-3">
                    <MapPin className="h-6 w-6 text-pink-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-navy">Address</h3>

                    <p className="text-muted-foreground">Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
