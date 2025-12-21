import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import React, { Suspense } from "react";
import { CursorGradient } from "../components/CursorGradient";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const DynamicTanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((module) => ({
          default: module.TanStackRouterDevtools,
        })),
      );

export const Route = createRootRoute({
  beforeLoad: () => {
    console.log("Before load");
  },
  component: () => (
    <>
      <CursorGradient />
      <div className="bg-background text-text-dark flex w-full flex-col p-4">
        <Header />

        <Outlet />

        <Footer />

        <Suspense>
          <DynamicTanStackRouterDevtools />
        </Suspense>
      </div>

      <Analytics />
    </>
  ),
});
