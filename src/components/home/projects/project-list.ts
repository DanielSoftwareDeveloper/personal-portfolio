import starwarsApi from "@/images/starwars.png";
import spokeet from "@/images/spokeet.png";
import musicSaasApp from "@/images/music-saas-app.png";

type Project = {
  image: ImageMetadata;
  name: string;
  description: string;
  href: string;
};

export const projectList: Project[] = [
  {
    image: starwarsApi,
    name: "Starwars API",
    description: "Information about Star Wars universe",
    href: "https://starwars-api-nine.vercel.app/",
  },
  {
    image: spokeet,
    name: "Spokeet",
    description: "Text to speech AI SaaS",
    href: "https://voice-saas-app.vercel.app",
  },
  {
    image: musicSaasApp,
    name: "Retokie",
    description: "Songs generator AI SaaS",
    href: "https://www.retokie.com/",
  },
];
