import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { CursorGradient } from "../components/CursorGradient";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const DynamicTanStackRouterDevtools = () => {
  if (import.meta.env.MODE === "development") {
    return <TanStackRouterDevtools />;
  }

  return null;
};

export const Route = createRootRoute({
  beforeLoad: () => {
    console.log("Before load");
  },
  component: () => (
    <>
      <CursorGradient />
      <div className="h-lvh bg-background text-text flex w-full flex-row">
        <section className="h-7/8 ml-10 flex w-1/2 flex-col pl-48 pt-32">
          <div className="mb-10 flex w-2/3 flex-col">
            <h1 className="text-text-light mb-2 text-5xl font-bold">
              Kolton Musgrove
            </h1>
            <h3 className="mb-5 text-2xl">Software Engineer</h3>
            <h4 className="text-md text-text-dark w-3/4 font-light">
              I have a passion for building complex systems, solving challening
              problems, and meeting users' needs.
            </h4>
          </div>

          <nav className="text-text-dark flex flex-col gap-2 p-2 font-light">
            <NavItem to="/" text="HOME" />
            <NavItem to="/about" text="ABOUT" />
            <NavItem to="/blog" text="BLOG" />
          </nav>

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

        <hr />

        <Outlet />

        <DynamicTanStackRouterDevtools />
      </div>
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
