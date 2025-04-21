import React, { Suspense } from "react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { CursorGradient } from "../components/CursorGradient";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Analytics } from "@vercel/analytics/react";

const DynamicTanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((module) => ({
          default: module.TanStackRouterDevtools,
        }))
      );

export const Route = createRootRoute({
  beforeLoad: () => {
    console.log("Before load");
  },
  component: () => (
    <>
      <CursorGradient />
      <div className="bg-background text-text-dark lg:h-lvh flex h-max w-full flex-col p-5 lg:flex-row">
        <section className="lg:h-7/8 flex flex-col lg:ml-10 lg:w-1/2 lg:pl-48 lg:pt-32">
          <div className="mb-8 mt-2 flex flex-col lg:mb-10 lg:w-2/3">
            <h1 className="text-text-light mb-2 text-3xl font-bold lg:text-5xl">
              Kolton Musgrove
            </h1>
            <h3 className="text-text mb-5 text-xl lg:text-2xl">
              Software Engineer
            </h3>
            <h4 className="text-md text-text-dark font-light lg:w-3/4">
              I have a passion for building complex systems, solving challenging
              problems, and meeting users' needs.
            </h4>
          </div>

          {/* <nav className="text-text-dark hidden flex-col gap-2 p-2 font-light lg:flex">
            <NavItem to="/" text="HOME" />
            <NavItem to="/blog" text="BLOG" />
          </nav> */}

          <footer className="mt-auto flex flex-row gap-4 self-start p-2">
            <SocialLink to="https://github.com/kolton-musgrove">
              <FaGithub className="h-full w-full" />
            </SocialLink>

            <SocialLink to="https://linkedin.com/in/koltonmusgrove">
              <FaLinkedin className="h-full w-full" />
            </SocialLink>

            <SocialLink to="https://x.com/KoltonMusgrove">
              <FaSquareXTwitter className="h-full w-full" />
            </SocialLink>

            <SocialLink to="https://leetcode.com/u/koltongmusgrove/">
              <SiLeetcode className="h-full w-full" />
            </SocialLink>
          </footer>
        </section>

        <Outlet />

        <Suspense>
          <DynamicTanStackRouterDevtools />
        </Suspense>
      </div>

      <Analytics />
    </>
  ),
});

function NavItem({ to, text }: { to: string; text: string }) {
  return (
    <Link
      to={to}
      className="hover:text-text-light center group flex w-fit flex-row items-center text-sm font-medium"
      activeProps={{
        className:
          "text-text-light items center group flex w-fit flex-row text-sm font-bold",
      }}
    >
      {({ isActive }) => {
        const styling = `group-hover:boarder-text-light mr-4 w-12 transition-all group-hover:w-16${isActive ? "border-text-light w-16" : ""}`;

        return (
          <>
            <hr className={styling} />
            {text}
          </>
        );
      }}
    </Link>
  );
}

function SocialLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={to}
      target="_blank"
      className="hover:text-text-light center group flex h-6 w-6 flex-row items-center text-sm font-medium"
    >
      {children}
    </a>
  );
}
