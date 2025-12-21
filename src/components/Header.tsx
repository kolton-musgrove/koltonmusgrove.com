import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { NavItem } from "./NavItem";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col mb-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-text-light w-fit text-3xl font-bold lg:text-5xl">
            Kolton Musgrove
          </div>
          <h3 className="text-text text-l mb-5 lg:text-2xl">
            Software Engineer
          </h3>
        </div>

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
            {isMenuOpen ? (
              <HiOutlineX className="h-6 w-6" /> // X icon when menu is open
            ) : (
              <HiMenu className="h-6 w-6" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isMenuOpen && (
        <div className="mt-3 md:hidden">
          <NavItem to="/" text="Home" />
          <NavItem to="/blog" text="Blog" />
        </div>
      )}
    </header>
  );
}
