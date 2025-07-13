// src/data/educationData.ts
export interface EducationItem {
  degree: string
  time: string
  institution: string
  details: string[]
}

export const educationData: EducationItem[] = [
  {
    degree: "Bachelors Degree",
    time: "Expected June 2025",
    institution: "University of California, Irvine",
    details: [
      "Major: Mathematics",
      "Minor: Computer Science",
    ],
  },
  {
    degree: "High-school Diploma",
    time: "June 2020",
    institution: "McFarland High-School",
    details: ["Highest Honors (+4.0 GPA)"],
  },
]
