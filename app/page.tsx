import { About } from "@/components/sections/about/about";
import { Experience } from "@/components/sections/experience/page";
import { Projects } from "@/components/sections/projects/page";

export default function Home() {
  return (
    <body className="bg-gray-100">
      <div className="container mx-auto max-w-screen-lg bg-white p-8">
        <About />
        <Experience />
        <Projects />
      </div>
    </body>
  );
}
