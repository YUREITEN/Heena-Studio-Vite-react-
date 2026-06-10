import { Link } from "react-router-dom";
import { Camera, MessageCircle, Mail, MapPin } from "lucide-react";
import { NAV_PRIMARY, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-heading text-2xl text-navy">{SITE.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{SITE.tagline}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-navy/70">Explore</h4>
          <ul className="mt-4 space-y-2">
            {NAV_PRIMARY.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-navy/80 hover:text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-navy/70">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-navy/80">
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-teal" /> {SITE.email}
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="h-4 w-4 mt-0.5 text-pink" /> WhatsApp +{SITE.whatsappNumber}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-purple" /> {SITE.address}
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-navy/70">Follow</h4>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-sm font-semibold text-navy hover:bg-gold/10"
          >
            <Camera className="h-4 w-4" />
            Instagram
          </a>
          <br />
          <a
            href="https://wa.me/918690969324?text=Hello%20Heena%20Studio,%20I%20would%20like%20to%20know%20more%20about%20your%20artwork%20and%20classes."
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-sm font-semibold text-navy hover:bg-gold/10"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-gold/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground lg:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            {" "}
            Designed & Developed By{" "}
            <a
              href="https://wa.me/9352666866?text=Hi%20Gouri,%20I%20came%20across%20your%20work%20on%20the%20Heena%20Rathore%20website%20and%20would%20like%20to%20discuss%20a%20new%20project%20with%20you."
              target="_blank"
              rel="noreferrer noopener"
              className="text-gold hover:underline"
            >
              GOURI GOYAL.
            </a>
          </p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
