import starwarsApi from "@/images/starwars.png";
import spokeet from "@/images/spokeet.png";
import musicSaasApp from "@/images/music-saas-app.png";

type Project = {
  image: ImageMetadata;
  name: string;
  description: string;
  href: string;
  github?: string;
};

export const projectList: Project[] = [
  {
    image: starwarsApi,
    name: "Mochi Assistant",
    description:
      "AI assistant that can be integrated into any website to answer questions, guide visitors, and provide instant support using custom business knowledge.",
    href: "https://mochiassistant.com/",
    github: "https://github.com/DanielSoftwareDeveloper/ia-assistant-app",
  },
  {
    image: spokeet,
    name: "Spokeet",
    description:
      "AI-powered text-to-speech platform that transforms written text into natural sounding voices for content creators, apps, and videos.",
    href: "https://voice-saas-app.vercel.app",
    github: "https://github.com/DanielSoftwareDeveloper/voice-saas-app",
  },
  {
    image: musicSaasApp,
    name: "Retokie",
    description:
      "AI music generation platform that creates original songs from simple prompts, allowing users to experiment with melodies, styles, and lyrics.",
    href: "https://www.retokie.com/",
    github: "https://github.com/tuusuario/mochi-assistant",
  },
];
