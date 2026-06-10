type ClassValue = string | number | false | null | undefined | ClassValue[] | Record<string, boolean>;

export function cn(...inputs: ClassValue[]) {
  return inputs
    .flatMap((input): string[] => {
      if (!input) return [];
      if (Array.isArray(input)) return [cn(...input)];
      if (typeof input === "object") {
        return Object.entries(input)
          .filter(([, value]) => value)
          .map(([key]) => key);
      }
      return [String(input)];
    })
    .filter(Boolean)
    .join(" ");
}
