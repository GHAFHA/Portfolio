const data = [
  {
    name: "Kuiper",
    description: "Online tutoring application ",
    tags: ["Typescript", "REST API", "NEXTJS", "TailwindCSS", "Pocketbase"],
    links: [
      {
        name: "GitHub",
        url: "",
      },
    ],
  },
  {
    name: "Star Stream",
    description:
      "A azure function to recieve vehicle sensor data from azure event hubs and visualize it using Grafana",
    tags: [
      "Event Hubs",
      "Azure Functions",
      "Python",
      "Telegraf",
      "MongoDB",
      "Grafana",
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/DallasFormulaRacing/Star-Stream",
      },
    ],
  },
  {
    name: "Suspension-SteeringLib",
    description:
      "A library to calculate various forces acting on a vehicles suspension system",
    tags: ["Python", "Pandas", "Numpy", "Matplotlib", "Scipy", "Plotly"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/DallasFormulaRacing/SuspensionSteeringLib",
      },
    ],
  },
  {
    name: "LabJackCanBus",
    description:
      "A DAQ system to read data from vehicle sensors including linear potentiometers and accelerometers",
    tags: [
      "Python",
      "Pandas",
      "Numpy",
      "Scipy",
      "Plotly",
      "Threading",
      "Telegraf",
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/DallasFormulaRacing/LabJackCanBus",
      },
    ],
  },
  {
    name: "Github-Issues-Bot",
    description:
      "A bot which notifies members in a discord server when a new issue is created in a github repository, allowing for oversight over repo",
    tags: ["Python", "Discord.py", "GitHub API"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/DallasFormulaRacing/IC-Repo",
      },
    ],
  },
];

export const Projects = () => {
  return <section>Projects</section>;
};
