import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="text-cadet-gray-500 mr-48 mt-32 flex w-1/2 flex-col">
      <div className="flex flex-col gap-2">
        <p>
          I'm a devloper passionate about building complex, useful, and robust
          system. I’m a developer passionate about crafting accessible,
          pixel-perfect user interfaces that blend thoughtful design with robust
          engineering. My favorite work lies at the intersection of design and
          development, creating experiences that not only look great but are
          meticulously built for performance and usability.
        </p>
        <p>
          Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in
          accessibility. I contribute to the creation and maintenance of UI
          components that power Klaviyo’s frontend, ensuring our platform meets
          web accessibility standards and best practices to deliver an inclusive
          user experience.
        </p>
        <p>
          In the past, I've had the opportunity to develop software across a
          variety of settings — from advertising agencies and large corporations
          to start-ups and small digital product studios. Additionally, I also
          released a comprehensive video course a few years ago, guiding
          learners through building a web app with the Spotify API.
        </p>
        <p>
          In my spare time, I’m usually climbing, reading, hanging out with my
          wife and two cats, or running around Hyrule searching for Korok seeds
          K o r o k s e e d s .
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
