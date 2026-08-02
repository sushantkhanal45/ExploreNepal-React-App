import {
  Camera,
  Compass,
  Heart,
  Mail,
  MapPin,
} from "lucide-react";

import {
  Link,
  NavLink,
} from "react-router-dom";

function Footer() {
  const currentYear =
    new Date().getFullYear();

  const navLinkClass = ({
    isActive,
  }) =>
    `
      transition
      ${
        isActive
          ? "text-orange-400"
          : `
            text-slate-400
            hover:text-white
          `
      }
    `;

  return (
    <footer
      className="
        border-t
        border-white/10
        bg-slate-950
        text-white
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          py-16
          lg:px-8
        "
      >
        <div
          className="
            grid
            gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_0.8fr_1fr]
          "
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-orange-500
                  shadow-lg
                  shadow-orange-500/20
                "
              >
                <Compass size={22} />
              </span>

              <span
                className="
                  text-xl
                  font-black
                  tracking-tight
                "
              >
                Explore
                <span className="text-orange-500">
                  Nepal
                </span>
              </span>
            </Link>

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-slate-400
              "
            >
              Discover Nepal’s beautiful
              mountains, peaceful lakes,
              ancient cities, and cultural
              landmarks in one modern
              travel experience.
            </p>

            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-3
              "
            >
              {/* Email button */}
              <a
                href="mailto:hello@explorenepal.com"
                aria-label="Email Explore Nepal"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-slate-300
                  transition
                  hover:border-orange-500
                  hover:bg-orange-500
                  hover:text-white
                "
              >
                <Mail size={18} />
              </a>

              {/* Social button */}
              <button
                type="button"
                aria-label="Explore Nepal social media"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-slate-300
                  transition
                  hover:border-orange-500
                  hover:bg-orange-500
                  hover:text-white
                "
              >
                <Camera size={18} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Explore
            </h3>

            <nav
              className="
                mt-6
                flex
                flex-col
                gap-4
                text-sm
                font-medium
              "
            >
              <NavLink
                to="/"
                end
                className={
                  navLinkClass
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/explore"
                className={
                  navLinkClass
                }
              >
                Destinations
              </NavLink>

              <NavLink
                to="/favorites"
                className={
                  navLinkClass
                }
              >
                Favorites
              </NavLink>
            </nav>
          </div>

          {/* Information */}
          <div>
            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Discover more
            </h3>

            <div
              className="
                mt-6
                flex
                items-start
                gap-3
              "
            >
              <MapPin
                size={19}
                className="
                  mt-0.5
                  shrink-0
                  text-orange-500
                "
              />

              <p
                className="
                  text-sm
                  leading-7
                  text-slate-400
                "
              >
                From the Himalayas to the
                Terai, find a destination
                that inspires your next
                journey.
              </p>
            </div>

            <Link
              to="/explore"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-orange-500
                px-5
                py-3
                text-sm
                font-bold
                text-white
                transition
                hover:bg-orange-400
              "
            >
              Start exploring

              <Compass size={17} />
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-7
            text-sm
            text-slate-500
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {currentYear} Explore Nepal.
            All rights reserved.
          </p>

          <p
            className="
              flex
              items-center
              gap-1.5
            "
          >
            Made with

            <Heart
              size={15}
              className="
                fill-orange-500
                text-orange-500
              "
            />

            for Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;