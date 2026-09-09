import mochiAssistant from "@/images/mochi-assistant.png";
import mochiTemplates from "@/images/mochi-templates.png";
import mexicoRents from "@/images/mexico-rents.png";
import type { TranslationKey } from "@/i18n/ui";

type Project = {
  image: ImageMetadata;
  name: string;
  descriptionKey: TranslationKey;
  href: string;
  github?: string;
};

export const projectList: Project[] = [
  {
    image: mochiAssistant,
    name: "Mochi Assistant",
    descriptionKey: "projects.mochiAssistant.description",
    href: "https://mochiassistant.com",
  },
  {
    image: mochiTemplates,
    name: "Mochi Templates",
    descriptionKey: "projects.mochiTemplates.description",
    href: "https://mochitemplates.com",
  },
  {
    image: mexicoRents,
    name: "Mexico Rents",
    descriptionKey: "projects.mexicoRents.description",
    href: "https://mexicorents.com",
  },
];