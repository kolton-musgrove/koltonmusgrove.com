import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Landing,
});

function LightLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-text-light">
      {children}
    </a>
  );
}

function Landing() {
  return (
    <div className="flex flex-col gap-2 md:mt-32">
      <p>
        I enjoy solving hard problems. In my current role, that looks like
        features interacting unexpectedly, slow database queries, or long, messy
        log files. The most satisfying problems I get to work on are ones that
        are causing users pain or have been annoying my teammates.
      </p>
      <p>
        I'm a software engineer at
        <LightLink href="https://www.redroverk12.com">
          {" Red Rover "}
        </LightLink>
        , where I help customers when systems don't behave as expected. I handle
        everything from immediate response, working with team leads to triage
        issues, and writing/reviewing fixes. Currently, I'm in the process of
        leading a migration of our FE build system from Webpack to Vite. In my
        off hours, I'm learning more about caching, CPU architecture, and
        parallelization.
      </p>
      <p>
        Before this, I worked on a booking platform for
        <LightLink href="https://adventures.polaris.com">
          {" outdoor adventures"}
        </LightLink>
        , where I helped improve testing, manage refactors, and make the system
        easier to debug. We cleared more than 80% of our backlog in a few
        months.
      </p>
      <p>
        In college, I researched machine learning for{" "}
        <LightLink href="https://digitalcommons.liberty.edu/research_symp/2021/posters/63/">
          {" energy consumption prediction "}
        </LightLink>
        and built
        <LightLink href="https://github.com/kolton-musgrove/honors-thesis">
          {" combined ML models "}
        </LightLink>
        for my honors thesis.
      </p>
      <p>
        I work mostly with React, C#, .NET, and Node.js, with some Python, Go,
        and Rust mixed in when I can.
      </p>
      <p>
        I live in North Carolina with my lovely wife. In my free time, I enjoy
        disc golf, cooking, and reading science fiction.
      </p>
    </div>
  );
}
