import mochiAssistant from "@/images/mochi-assistant.png";
import mochiTemplates from "@/images/mochi-templates.png";
import mexicoRents from "@/images/mexico-rents.png";

type Project = {
  image: ImageMetadata;
  name: string;
  description: string;
  href: string;
  github?: string;
};

export const projectList: Project[] = [
  {
    image: mochiAssistant,
    name: "Mochi Assistant",
    description:
      "Aplicación web SaaS que permite agregar un chat asistente de IA en cualquier sitio web. (proyecto completado)",
    href: "https://mochiassistant.com",
  },
  {
    image: mochiTemplates,
    name: "Mochi Templates",
    description:
      "Ecommerce de productos digitales, plantillas y recursos para creadores. (contenido en desarrollo).",
    href: "https://mochitemplates.com",
  },
  {
    image: mexicoRents,
    name: "Mexico Rents",
    description:
      "Aplicación web de Real State para la venta y renta de propiedades en México. (proyecto completado)",
    href: "https://mexicorents.com",
  },
];
