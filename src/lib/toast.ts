export type ToastVariant = "success" | "error" | "info";

export type ToastMessage = {
  id: string;
  message: string;
  variant: ToastVariant;
};

type Listener = (toast: ToastMessage) => void;

const listeners = new Set<Listener>();

function emit(message: string, variant: ToastVariant) {
  const toast: ToastMessage = {
    id: crypto.randomUUID(),
    message,
    variant,
  };

  listeners.forEach((listener) => listener(toast));
}

export function subscribeToToasts(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export const toast = {
  success: (message: string) => emit(message, "success"),
  error: (message: string) => emit(message, "error"),
  info: (message: string) => emit(message, "info"),
};
