import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  MapPin,
  Menu,
  X,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const desktopLinkClass = ({
    isActive,
  }) =>
    `
      text-sm font-semibold
      transition-colors duration-300
      ${
        isActive
          ? "text-orange-500"
          : `
            text-slate-600
            hover:text-orange-500
            dark:text-slate-300
            dark:hover:text-orange-400
          `
      }
    `;

  const mobileLinkClass = ({
    isActive,
  }) =>
    `
      block rounded-xl
      px-4 py-3
      text-sm font-semibold
      transition-all duration-300
      ${
        isActive
          ? `
            bg-orange-50
            text-orange-600
            dark:bg-orange-500/10
            dark:text-orange-400
          `
          : `
            text-slate-700
            hover:bg-slate-100
            dark:text-slate-200
            dark:hover:bg-white/5
          `
      }
    `;

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-slate-200/70
        bg-white/90
        backdrop-blur-xl
        transition-colors duration-300
        dark:border-white/10
        dark:bg-slate-950/90
      "
    >
      <nav
        className="
          mx-auto max-w-7xl
          px-5 py-4
          lg:px-8
        "
      >
        <div
          className="
            flex items-center
            justify-between
          "
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="
              flex items-center
              gap-2 text-lg
              font-black
              tracking-tight
              text-slate-950
              sm:text-xl
              dark:text-white
            "
          >
            <span
              className="
                flex h-10 w-10
                shrink-0 items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-red-500
                to-orange-500
                text-white
                shadow-lg
                shadow-orange-500/20
              "
            >
              <MapPin size={21} />
            </span>

            <span>
              Explore
              <span className="text-orange-500">
                Nepal
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div
            className="
              hidden items-center
              gap-8 md:flex
            "
          >
            <NavLink
              to="/"
              end
              className={desktopLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/explore"
              className={desktopLinkClass}
            >
              Explore
            </NavLink>

            <NavLink
              to="/favorites"
              className={desktopLinkClass}
            >
              Favorites
            </NavLink>
          </div>

          {/* Desktop theme button */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div
            className="
              flex items-center
              gap-2 md:hidden
            "
          >
            <ThemeToggle />

            <button
              type="button"
              onClick={() =>
                setMenuOpen(
                  (current) => !current
                )
              }
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={menuOpen}
              className="
                flex h-11 w-11
                items-center
                justify-center
                rounded-full
                border border-slate-200
                bg-white
                text-slate-800
                transition
                hover:border-orange-300
                hover:text-orange-500
                dark:border-white/10
                dark:bg-white/5
                dark:text-white
              "
            >
              {menuOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="
              mt-4 rounded-2xl
              border border-slate-200
              bg-white p-3
              shadow-xl
              dark:border-white/10
              dark:bg-slate-900
            "
          >
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/explore"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Explore
              </NavLink>

              <NavLink
                to="/favorites"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Favorites
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;