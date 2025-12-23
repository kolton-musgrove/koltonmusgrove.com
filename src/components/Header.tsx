import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { NavItem } from "./NavItem";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when navigation occurs
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="container mx-auto mb-5 flex max-w-full items-center justify-between md:w-4/5 lg:w-2/3 lg:max-w-4xl">
      <Link to="/" className="flex flex-col">
        <div className="text-text-light w-fit text-3xl font-bold">
          Kolton Musgrove
        </div>
        <h3 className="text-text text-l mb-5 lg:text-2xl">Software Engineer</h3>
      </Link>

      {/* Menu Links (Desktop) */}
      <nav className="hidden space-x-4 md:flex">
        <NavItem to="/" text="Home" />
        <NavItem to="/blog" text="Blog" />
      </nav>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <HiMenu className="h-6 w-6" />
        </button>

        {/* Mobile Menu Backdrop */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 md:hidden ${
            isMenuOpen
              ? "pointer-events-auto opacity-50"
              : "pointer-events-none opacity-0"
          }`}
          onClick={toggleMenu}
        />

        {/* Mobile Menu Drawer */}
        <div
          className={`bg-background fixed top-0 right-0 h-screen w-64 p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full w-full flex-col items-start justify-start">
            <button
              onClick={toggleMenu}
              className="text-text-light hover:text-text mb-8 self-end transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <HiOutlineX className="h-6 w-6" />
            </button>
            <nav className="flex w-full flex-col space-y-6">
              <NavItem to="/" text="Home" />
              <NavItem to="/blog" text="Blog" />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
