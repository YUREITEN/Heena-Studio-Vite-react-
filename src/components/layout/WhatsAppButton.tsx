import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const href =
    "https://wa.me/918690969324?text=Hello%20Heena%20Studio,%20I%20would%20like%20to%20know%20more%20about%20your%20artwork%20and%20classes.";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white shadow-lift transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
