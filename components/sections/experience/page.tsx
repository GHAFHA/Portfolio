const data = [
  {
    company: "Dallas Formula Racing",
    role: ["Software Member", "Software Lead"],
    date: "2021 - 2024",
    description:
      "Helped create data visulization pipline using various technologies to allow engineers to analyze data in real time.",
    links: [
      {
        name: "Dallas Formula Racing",
        url: "https://dallasformularacing.com/",
      },
      {
        name: "GitHub",
        url: "https://github.com/DallasFormulaRacing/",
      },
    ],
    tags: ["Kafka", "Telegraf", "Python", "Azure Functions"],
  },
  {
    company: "Charles Schwab",
    role: "Software Dev Intern",
    dates: "June 2023 - August 2023",
    description:
      "Created automated workflows for vRO and created wrapper libraries to interact with APIs",
    links: [
      {
        name: "Charles Schwab",
        link: "https://www.schwab.com/",
      },
    ],
    tags: [
      "Python",
      "REST APIS",
      "Agile",
      "Pydantic",
      "Paramiko",
      "SQLAlchemy",
    ],
  },
  {
    company: "Drutte",
    role: "UI/UX Intern",
    date: "June 2022 - August 2022",
    description:
      "Completed various papers on design principles, created wireframes",
    links: [
      {
        name: "Drrute",
        link: "https://www.linkedin.com/company/drrute/posts/?feedView=all",
      },
    ],
    tags: ["Figma", "Angular", "React"],
  },
];

export default function Experience() {
  return <section>Experience</section>;
}
