import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="mr-48 mt-24 flex w-full flex-col lg:mt-32 lg:w-1/2">
      <h3 className="text-text-light mb-6 font-bold">ABOUT</h3>
      <div className="flex flex-col gap-2">
        <p>
          I'm a devloper passionate about building complex, useful, and robust
          system. The most meaningful work I do lies at the intersection of
          usability, performance, and complexity. I love to build things that
          are both beautiful and functional, and I'm always looking for new
          challenges to tackle.
        </p>
        <p>
          Currently, I'm a software engineer at
          <span className="text-text-light"> Red Rover</span>, where I tackle
          complex problems and build solutions that help our customers succeed.
          My role focuses on aiding our customer support team tackle technical
          issues, developing internal tools, and improving our platform's user
          experience, relaibility, and performance.
        </p>
        <p>
          In the past, I've had the opportunity to work with several small
          startup companies in the
          <span className="text-text-light"> healthcare</span> and
          <span className="text-text-light">
            &nbsp;outdoor recreation industries.&nbsp;
          </span>
          This work has ranged from front-end development to full-stack
          development, and has included building web applications, APIs, and
          internal tools. Some of the projects I'm most proud of include
          improving the observability of users errors at Polaris Adventures and
          using machine learning to predict energy consumption patterns at at a
          major university.
        </p>
        <p>
          In my free tim, I enjoy reading non-fiction, taking my dog Duke for
          long walks, cooking with my girlfriend, and playing card games.
        </p>
      </div>

      {/* TODO Experience Section: highlights of work experience, focusing on react and Remix */}
      <div className="flex gap-2"></div>

      {/* TODO Projects Section: highlights of personal projects, focusing on Python, ML, Go, or Rust */}
      <div className="flex gap-2"></div>

      {/* TODO Skills Section: highlights of technical skills, focusing on React, Remix, and Node */}
      <div className="flex gap-2"></div>

      {/* TODO Contact Section: email, phone, and social media links */}
      <div className="flex gap-2"></div>
    </div>
  );
}
