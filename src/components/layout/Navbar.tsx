import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_PRIMARY, SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navClassName = ({ isActive }: { isActive: boolean }) =>
    cn(
      "rounded-md px-3 py-2 text-base font-semibold text-navy/80 transition-colors hover:text-navy hover:bg-accent",
      isActive && "text-navy bg-accent",
    );

  const mobileNavClassName = ({ isActive }: { isActive: boolean }) =>
    cn(
      "rounded-md px-3 py-3 text-base font-semibold text-navy/90 hover:bg-accent",
      isActive && "text-navy bg-accent",
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all",
        scrolled ? "bg-cream/95 backdrop-blur shadow-soft" : "bg-cream",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-15">
          <img src={logo} alt={SITE.name} className="h-30 w-auto" width={220} height={90} />
          <span className="sr-only">{SITE.name}</span>
        </Link>

        <nav className="hidden lg:flex items-centre gap-6  ">
          {NAV_PRIMARY.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={navClassName}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-soft transition-all hover:bg-gold-dark hover:shadow-lift"
          >
            Book a Class
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden rounded-md p-2 text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-cream animate-fade-in">
          <nav className="flex flex-col gap-1 px-5 py-3">
            {NAV_PRIMARY.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={mobileNavClassName}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-base font-semibold text-navy"
            >
              Book a Class
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
