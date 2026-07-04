import { useEffect, useState } from "react";
import { CheckCircle2, Info, XCircle } from "lucide-react";
import { subscribeToToasts, type ToastMessage } from "@/lib/toast";
import { cn } from "@/lib/utils";

const icons = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

const styles = {
  success: "border-teal/30 bg-white text-navy",
  error: "border-pink/30 bg-white text-navy",
  info: "border-gold/30 bg-white text-navy",
};

export function ToastHost() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    return subscribeToToasts((toast) => {
      setToasts((current) => [...current, toast]);
      window.setTimeout(() => {
        setToasts((current) => current.filter((item) => item.id !== toast.id));
      }, 4200);
    });
  }, []);

  return (
    <div className="fixed right-4 top-4 z-[80] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3">
      {toasts.map((toast) => {
        const Icon = icons[toast.variant];

        return (
          <div
            key={toast.id}
            className={cn(
              "flex items-start gap-3 rounded-xl border px-4 py-3 shadow-lift animate-fade-in",
              styles[toast.variant],
            )}
          >
            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
            <p className="text-sm font-medium leading-6">{toast.message}</p>
          </div>
        );
      })}
    </div>
  );
}
