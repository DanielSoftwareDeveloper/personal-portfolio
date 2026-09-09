export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.technologies": "Tecnologías",
    "about.role": "Desarrollador de Software",
    "about.intro": "Desarrollador Full Stack",
    "about.description":
      "Me especializo en la creación de aplicaciones web, automatizaciones y sistemas impulsados por inteligencia artificial, tengo experiencia desarrollando interfaces de usuario, backend y sistemas de autenticación, me enfoco en escribir código limpio, mantenible, escalable y en construir productos con experiencia de usuario óptima y arquitectura sólida.",
    "about.downloadCV": "Descargar CV",
    "skills.title": "Habilidades",
    "skills.design.name": "Diseño UX/UI",
    "skills.design.description":
      "Interfaces y experiencias de usuario intuitivas visualmente atractivas.",
    "skills.web.name": "Aplicaciones Web",
    "skills.web.description":
      "Sitios y aplicaciones web adaptadas a tus necesidades.",
    "skills.mobile.name": "Aplicaciones Móviles",
    "skills.mobile.description":
      "Aplicaciones móviles multiplataforma para iOS y Android.",
    "skills.seo.name": "Optimización SEO",
    "skills.seo.description":
      "Mejora la visibilidad y el posicionamiento de tu sitio web en los buscadores.",
    "projects.title": "Portafolio",
    "projects.viewProject": "Ver Proyecto",
    "projects.mochiAssistant.description":
      "Aplicación web SaaS que permite agregar un chat asistente de IA en cualquier sitio web. (proyecto completado)",
    "projects.mochiTemplates.description":
      "Ecommerce de productos digitales, plantillas y recursos para creadores. (contenido en desarrollo).",
    "projects.mexicoRents.description":
      "Aplicación web de Real State para la venta y renta de propiedades en México. (proyecto completado)",
    "technologies.title": "Tecnologías",
    "footer.madeWith": "Hecho con",
    "footer.credits": "por Daniel Reyes",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.technologies": "Technologies",
    "about.role": "Software Developer",
    "about.intro": "Full Stack Developer",
    "about.description":
      "I specialize in building web applications, automations, and AI-powered systems, with experience developing user interfaces, backends, and authentication systems. I focus on writing clean, maintainable, scalable code and building products with an optimal user experience and solid architecture.",
    "about.downloadCV": "Download CV",
    "skills.title": "Skills",
    "skills.design.name": "UX/UI Design",
    "skills.design.description":
      "Intuitive and visually appealing user interfaces and experiences.",
    "skills.web.name": "Web Applications",
    "skills.web.description":
      "Websites and web applications tailored to your needs.",
    "skills.mobile.name": "Mobile Applications",
    "skills.mobile.description":
      "Cross-platform mobile applications for iOS and Android.",
    "skills.seo.name": "SEO Optimization",
    "skills.seo.description":
      "Improves the visibility and ranking of your website on search engines.",
    "projects.title": "Portfolio",
    "projects.viewProject": "View Project",
    "projects.mochiAssistant.description":
      "SaaS web application that lets you add an AI assistant chat to any website. (completed project)",
    "projects.mochiTemplates.description":
      "Ecommerce of digital products, templates, and resources for creators. (content in development)",
    "projects.mexicoRents.description":
      "Real State web application for buying and renting properties in Mexico. (completed project)",
    "technologies.title": "Technologies",
    "footer.madeWith": "Made with",
    "footer.credits": "by Daniel Reyes",
  },
} as const;

export type TranslationKey = keyof typeof ui[typeof defaultLang];