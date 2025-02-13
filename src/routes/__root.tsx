import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { CursorGradient } from "../components/CursorGradient";

function NavItem({ to, text }: { to: string; text: string }) {
  return (
    <Link
      to={to}
      className="hover:text-alice-blue-500 center group flex w-fit flex-row items-center text-sm font-medium"
      activeProps={{
        className:
          "text-alice-blue-500 items center group flex w-fit flex-row text-sm font-bold",
      }}
    >
      {({ isActive }) => {
        const styling = `group-hover:border-alice-blue-500 mr-4 w-12 transition-all group-hover:w-16${isActive ? "border-alice-blue-500 w-16" : ""}`;

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

export const Route = createRootRoute({
  beforeLoad: () => {
    console.log("Before load");
  },
  component: () => (
    <>
      <CursorGradient />
      <div className="h-lvh bg-oxford-blue-500 text-alice-blue-500 flex w-full flex-row">
        <section className="ml-10 flex w-1/2 flex-col pl-48 pt-32">
          <div className="mb-10 flex w-2/3 flex-col">
            <h1 className="mb-2 text-5xl font-bold">Kolton Musgrove</h1>
            <h3 className="mb-5 text-2xl">Software Engineer</h3>
            <h4 className="text-md text-cadet-gray-500 w-3/4 font-light">
              I have a passion for building complex systems, solving challening
              problems, and meeting users' needs.
            </h4>
          </div>

          <nav className="text-cadet-gray-500 flex flex-col gap-2 p-2 font-light">
            <NavItem to="/" text="HOME" />
            <NavItem to="/about" text="ABOUT" />
            <NavItem to="/blog" text="BLOG" />
          </nav>

          <footer className="flex flex-row gap-2 self-end p-2"></footer>
        </section>

        <hr />

        <Outlet />

        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
