import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="border-b border-gold/20 bg-gradient-warm">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20 animate-fade-up">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">{eyebrow}</p>}
        <h1 className="mt-2 font-heading text-4xl text-navy md:text-5xl lg:text-6xl text-balance">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
