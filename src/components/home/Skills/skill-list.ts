import type { TranslationKey } from "@/i18n/ui";

export const skillList: {
  icon: string;
  nameKey: TranslationKey;
  descriptionKey: TranslationKey;
  color: string;
}[] = [
  {
    icon: "services/design",
    nameKey: "skills.design.name",
    descriptionKey: "skills.design.description",
    color: "text-rose-400",
  },
  {
    icon: "services/web",
    nameKey: "skills.web.name",
    descriptionKey: "skills.web.description",
    color: "text-indigo-400",
  },
  {
    icon: "services/mobile",
    nameKey: "skills.mobile.name",
    descriptionKey: "skills.mobile.description",
    color: "text-teal-400",
  },
  {
    icon: "services/seo",
    nameKey: "skills.seo.name",
    descriptionKey: "skills.seo.description",
    color: "text-orange-400",
  },
];