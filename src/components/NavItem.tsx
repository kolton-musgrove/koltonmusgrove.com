import { Link } from "@tanstack/react-router";

export function NavItem({ to, text }: { to: string; text: string }) {
  return (
    <Link
      to={to}
      className="hover:text-text-light center group text-medium flex flex-row items-center font-medium"
      activeProps={{
        className:
          "text-text-light items center group flex flex-row text-medium font-bold",
      }}
    >
      {text}
    </Link>
  );
}
