import {
  defaultLang,
  languages,
  showDefaultLang,
  ui,
  type Language,
  type TranslationKey,
} from "./ui";

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: Language = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}