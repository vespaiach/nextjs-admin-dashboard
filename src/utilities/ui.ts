import { twMerge } from "tailwind-merge";

export function cx(...name: unknown[]) {
  return name.filter(Boolean).map((s) =>
    String(s)
      .trim()
      .replace(/\s+|\n/g, " "),
  );
}

export function cn(...inputs: unknown[]) {
  return twMerge(cx(...inputs));
}
