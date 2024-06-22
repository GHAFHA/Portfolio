import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noel Johnson",
  description: "Working with infrastructure and data pipelines",
  applicationName: "Noel Johnsons Portfolio",
  authors: [{ name: "Noel Johnson", url: "" }],
  keywords: [
    "Noel",
    "Johnson",
    "Noel Johnson",
    "Portfolio",
    "Software",
    "Developer",
    "Web",
    "Analytics",
    "Realtime",
    "Data",
    "Visualization",
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Python",
    "Kubernetes",
    "Grafana",
    "InfluxDB",
    "PostgreSQL",
    "Material UI",
    "Tailwind CSS",
    "Vercel",
    "AWS",
    "Azure",
    "Hackathon",
    "HakckUTD",
  ],
  icons: [{ rel: "icon", url: "/favicon.jpg" }],
  openGraph: {
    title: "Noel Johnson's Portfolio",
    description: "Data Nerd",
    images: "/preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div>
          <div>
            <div>
              <header>
                <div>
                  <h1>Noel Johnson</h1>
                </div>
              </header>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
