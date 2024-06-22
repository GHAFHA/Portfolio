import Image from "next/image";
import { About } from "@/components/sections/about/about";
import { Experience } from "@/components/sections/experience/page";
import { Projects } from "@/components/sections/projects/page";

export default function Home() {
  return (
    <div>
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
