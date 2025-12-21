import { Link } from "@tanstack/react-router";

export function NavItem({ to, text }: { to: string; text: string }) {
  return (
    <Link
      to={to}
      className="hover:text-text-light center group flex lg:w-fit flex-row items-center text-sm font-medium"
      activeProps={{
        className:
          "text-text-light items center group flex lg:w-fit flex-row text-sm font-bold",
      }}
    >
      {({ isActive }) => {
        const styling = `lg:group-hover:boarder-text-light mr-4 lg:w-12 transition-all lg:group-hover:w-16${
          isActive ? "lg:boarder-text-light lg:w-16" : ""
        }`;

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
