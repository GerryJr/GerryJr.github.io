// src/data/techSkillsData.ts

export interface Skill {
  name: string;
  iconClass?: string;   // if present, render an <i>
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Qualification {
  title: string;
  expiry: string;
  details: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages:",
    skills: [
      { name: "Python",     iconClass: "devicon-python-plain" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain" },
      // { name: "JavaScript", iconClass: "devicon-javascript-plain" },
      { name: "R",          iconClass: "devicon-r-plain" },
      // { name: "SQL",        iconClass: "devicon-sql-plain" },
      { name: "HTML5",      iconClass: "devicon-html5-plain" },
      { name: "CSS3",       iconClass: "devicon-css3-plain" },
      { name: "MATLAB",     iconClass: "devicon-matlab-plain" },
    ],
  },
  {
    title: "Frameworks & Libraries:",
    skills: [
      { name: "React",      iconClass: "devicon-react-plain" },
      { name: "Flask",      iconClass: "devicon-flask-plain" },
      { name: "Pandas",     iconClass: "devicon-pandas-plain" },
      { name: "NumPy",      iconClass: "devicon-numpy-plain" },
      { name: "SQLAlchemy", iconClass: "devicon-sqlalchemy-plain" },
      { name: "Bootstrap",  iconClass: "devicon-bootstrap-plain" },
      // { name: "Seaborn" },
      // { name: "Altair" },
    ],
  },
  {
    title: "Cloud Platforms:",
    skills: [
      { name: "AWS",         iconClass: "devicon-amazonwebservices-plain" },
      { name: "Google Cloud",iconClass: "devicon-googlecloud-plain" },
      { name: "MongoDB",     iconClass: "devicon-mongodb-plain" },
      // { name: "DynamoDB",    iconClass: "devicon-dynamodb-plain" },
    ],
  },
  {
    title: "Developer Tools:",
    skills: [
      { name: "PyCharm",     iconClass: "devicon-pycharm-plain" },
      { name: "Jupyter",     iconClass: "devicon-jupyter-plain" },
      { name: "RStudio",     iconClass: "devicon-rstudio-plain" },
      { name: "Git",         iconClass: "devicon-git-plain" },
      { name: "GitHub",      iconClass: "devicon-github-plain" },
      { name: "Docker",      iconClass: "devicon-docker-plain" },
      // { name: "Postman",     iconClass: "devicon-postman-plain" },
    ],
  },
  {
    title: "Other:",
    skills: [
      { name: "SolidWorks, Deepnote, Wix, Weebly" },
    ],
  },
];

export const qualifications: Qualification[] = [
  {
    title: "AWS Cloud Practitioner",
    expiry: "Expected July 2025",
    details: [
      "Foundational AWS Concepts",
      "Best Practices, Core Services",
      "Cloud Architecture Principles"
    ],
  },
  {
    title: "Git Certification",
    expiry: "April 2025",
    details: [
      "Version Control Practices",
      "Collaborative Development using Git."
    ],
  },
  {
    title: "CITI Program Certificate",
    expiry: "March 2024",
    details: [
      "Human Subject Research",
      "Social/Behavioral Investigators",
    ],
  },
];
