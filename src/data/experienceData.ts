// src/data/experienceData.ts
export interface WorkItem {
  title: string
  time: string
  location: string
  points: string[]
}

export const experienceData: WorkItem[] = [
  {
    title: "AWS Full Stack Developer",
    time: "Jan 2024 – Present",
    location: "Digital Learning Lab",
    points: [
      "Developed RAG testing site for Researchers",
      "Reduced data extraction costs by 60%",
      "Integrated PapyrusAI into Canvas using LTI 1.3",
    ],
  },
  {
    title: "Data Analyst",
    time: "Jan 2024 – Nov 2024",
    location: "CP-LEADS",
    points: [
      "Analyzed user engagement/patterns on website",
      "Used Topic Modeling and Sentiment Analysis",
      "Visual Data analysis in R",
    ],
  },
  {
    title: "Software Engineer Intern",
    time: "Jun. 2023 – Sep. 2023",
    location: "CodeAI",
    points: [
      "Led team building Python-based web generator",
      "Built unit tests for code quality",
      "Automated Colab notebook collection via API"
    ],
  },
  {
    title: "Private Python Tutor",
    time: "Nov. 2021 – May 2023",
    location: "Independent Contractor",
    points: [
      "1-on-1 UCI student tutoring",
      "API, server protocols, and standard libraries",
    ],
  },
]
