import { default as NextLink } from "next/link";

const Link = ({ children, href }: { children: any; href: string }) => {
  return (
    <NextLink href={href} className="font-bold hover:text-primary/75">
      {children}
    </NextLink>
  );
};

export const About = () => {
  return (
    <section>
      <div>
        <h2>About</h2>
      </div>
      <div className="text-sm">
        <p>
          Over the past couple of years I have explored various technologies to
          make myself well rounded as a software developer. My passions lie in
          creating technologies which have direct impacts on the productivies of
          people. As a recent graduate from{" "}
          <strong> The University of Texas at Dallas</strong> I look forward to
          my impact on the feild.
        </p>
        <p>
          Recently I have been with{" "}
          <Link href="https://dallasformularacing.com">Formula Club</Link> to
          visualize data in real time for analysis using technologies like
          Kafka, Telegraf, and Grafana. Working on projects such as this has
          given me a deep understanding of the importance of data. Currently I
          am employed at Charles Schwab as a Software Engineer where I work with
          infreastrucutres and automations.
        </p>
        <p>
          Apart from work and away from developent, I enjoy running, lifting,
          hiking, and fishing, most of my days are spent outdoors. I also enjoy
          reading and learning about new technologies
        </p>
      </div>
    </section>
  );
};
