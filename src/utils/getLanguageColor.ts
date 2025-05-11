import { LANGUAGE_COLORS } from "./constants";

export function getLanguageColor(language: string) {
  return LANGUAGE_COLORS[language as keyof typeof LANGUAGE_COLORS] || "#ccc";
}
