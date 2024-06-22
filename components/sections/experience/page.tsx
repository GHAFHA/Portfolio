import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

const data = [
  {
    company: "Dallas Formula Racing",
    role: ["Software Member", "Software Lead"],
    date: "2021 - 2024",
    description:
      "Helped create data visualization pipeline using various technologies to allow engineers to analyze data in real-time.",
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
    date: "June 2023 - August 2023",
    description:
      "Created automated workflows for vRO and created wrapper libraries to interact with APIs",
    links: [
      {
        name: "Charles Schwab",
        url: "https://www.schwab.com/",
      },
    ],
    tags: [
      "Python",
      "REST APIs",
      "Agile",
      "Pydantic",
      "Paramiko",
      "SQLAlchemy",
    ],
  },
  {
    company: "Drrute",
    role: "UI/UX Intern",
    date: "June 2022 - August 2022",
    description:
      "Completed various papers on design principles, created wireframes",
    links: [
      {
        name: "Drrute",
        url: "https://www.linkedin.com/company/drrute/posts/?feedView=all",
      },
    ],
    tags: ["Figma", "Angular", "React"],
  },
];

export const Experience = () => {
  return (
    <div className="flex flex-col mb-12" id="experience">
      <div>
        <h2 className="text-sm tracking-wider"> Experience </h2>
      </div>
      <ol className="group/list">
        {data.map((item, index) => (
          <li key={index}>
            <Card className="">
              <CardHeader>
                <CardTitle>{item.company}</CardTitle>
                <CardDescription>
                  {Array.isArray(item.role) ? item.role.join(", ") : item.role}{" "}
                  | {item.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
                <div>
                  {item.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.url}>
                      {" "}
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div>
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}{" "}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
};
