// src/data/projectsData.ts
export interface Project {
  title: string;
  imageSrc: string;
  alt: string;
  link?: string;
  descriptions: string[];
}

// static imports so TS + your bundler can see them
import mortgageImage from "../assets/proj_mort.png";
import codeAiImage    from "../assets/proj_code_ai.png";
import wonderfulImage from "../assets/proj_wonderful.png";
import webImage       from "../assets/proj_web.png";

export const projects: Project[] = [
  {
    title: "Mortgage Tracker",
    imageSrc: mortgageImage,
    alt:       "Mortgage ScreenShot",
    descriptions: [
      "Dynamic website to calculate payments for mortgage",
      "Database stored using MongoDB Atlas with API",
      "Secured by encrypted login/pass",
      "Hosted using Google Cloud Platform",
    ],
  },
  {
    title: "Code AI Website",
    imageSrc: codeAiImage,
    alt:       "CodeAI ScreenShot",
    link:      "https://www.code-ai.org/",
    descriptions: [
      "Static website made with Weebly",
      "Embedded content to display previous work",
      "Collaborated with Code-AI team for creation",
    ],
  },
  {
    title: "Wonderful Citrus Assistance",
    imageSrc: wonderfulImage,
    alt:       "Wonderful Calc ScreenShot",
    descriptions: [
      "Dynamic website created using Python",
      "Helps factory workers calculate loads faster",
      "Daily users from June 2022 to January 2024",
    ],
  },
  {
    title: "This Website :)",
    imageSrc: webImage,
    alt:       "My Portfolio ScreenShot",
    descriptions: [
      "Built using React Framework",
      "Hosted by GitHub Pages",
    ],
  },
];
