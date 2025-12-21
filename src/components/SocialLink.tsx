import React from "react";

export function SocialLink({
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
      className="hover:text-text-light center group text-sm-font-medium flex h-6 w-6 flex-row items-center"
    >
      {children}
    </a>
  );
}
