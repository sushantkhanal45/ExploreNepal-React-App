import {
  useContext,
  useEffect,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  Calendar,
  Check,
  Clock,
  Heart,
  MapPin,
  Mountain,
  Navigation,
} from "lucide-react";

import destinations from "../data/destinations";

import {
  FavoritesContext,
} from "../context/FavoritesContext";

import WeatherCard from "../components/WeatherCard";

function DestinationDetails() {
  const {
    slug,
  } = useParams();

  const {
    favorites,
    toggleFavorite,
  } = useContext(
    FavoritesContext
  );

  const [
    isScrolled,
    setIsScrolled,
  ] = useState(false);

  const destination =
    destinations.find(
      (item) =>
        item.slug === slug
    );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(
        window.scrollY > 120
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  if (!destination) {
    return (
      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-50
          px-5
          dark:bg-slate-950
        "
      >
        <div
          className="
            text-center
          "
        >
          <h1
            className="
              text-3xl
              font-black
              text-slate-950
              dark:text-white
            "
          >
            Destination not found
          </h1>

          <Link
            to="/explore"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-orange-500
              px-6
              py-3
              font-bold
              text-white
            "
          >
            <ArrowLeft
              size={18}
            />

            Back to Explore
          </Link>
        </div>
      </main>
    );
  }

  const isFavorite =
    favorites.some(
      (item) =>
        item.id ===
        destination.id
    );

  return (
    <main
      className="
        min-h-screen
        bg-slate-50
        pb-20
        transition-colors
        duration-300
        dark:bg-slate-950
      "
    >
      {/* Floating back button */}
      <Link
        to="/explore"
        aria-label="Back to Explore"
        className={`
          fixed
          left-5
          top-24
          z-50
          flex
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-slate-950/75
          text-white
          shadow-xl
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-105
          hover:bg-slate-950

          ${
            isScrolled
              ? "h-12 w-12"
              : "h-12 gap-2 px-5"
          }
        `}
      >
        <ArrowLeft
          size={20}
          strokeWidth={2.5}
        />

        {!isScrolled && (
          <span
            className="
              text-sm
              font-bold
            "
          >
            Back to Explore
          </span>
        )}
      </Link>

      {/* Hero image */}
      <section
        className="
          relative
          h-[65vh]
          min-h-[520px]
          overflow-hidden
        "
      >
        <img
          src={
            destination.image
          }
          alt={
            destination.name
          }
          className="
            h-full
            w-full
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-slate-950/45
            to-slate-950/10
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            mx-auto
            max-w-7xl
            px-5
            pb-16
            lg:px-8
          "
        >
          <div
            className="
              flex
              flex-col
              justify-between
              gap-8
              md:flex-row
              md:items-end
            "
          >
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-orange-500
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-white
                "
              >
                <Navigation
                  size={16}
                />

                {
                  destination.category
                }
              </div>

              <h1
                className="
                  mt-5
                  text-5xl
                  font-black
                  tracking-tight
                  text-white
                  sm:text-7xl
                "
              >
                {
                  destination.name
                }
              </h1>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-slate-200
                "
              >
                <MapPin
                  size={19}
                  className="
                    text-orange-400
                  "
                />

                {
                  destination.location
                }
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                toggleFavorite(
                  destination
                )
              }
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-white/15
                px-6
                py-4
                font-bold
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/25
              "
            >
              <Heart
                size={20}
                fill={
                  isFavorite
                    ? "currentColor"
                    : "none"
                }
                className={
                  isFavorite
                    ? "text-red-400"
                    : ""
                }
              />

              {isFavorite
                ? "Saved"
                : "Save destination"}
            </button>
          </div>
        </div>
      </section>

      {/* Details */}
      <section
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
            gap-10
            lg:grid-cols-[1.35fr_0.65fr]
          "
        >
          <div>
            <p
              className="
                text-lg
                leading-9
                text-slate-600
                dark:text-slate-300
              "
            >
              {
                destination.description
              }
            </p>

            <h2
              className="
                mt-12
                text-3xl
                font-black
                text-slate-950
                dark:text-white
              "
            >
              Highlights
            </h2>

            <div
              className="
                mt-6
                grid
                gap-4
                sm:grid-cols-2
              "
            >
              {destination.highlights.map(
                (highlight) => (
                  <div
                    key={
                      highlight
                    }
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-5
                      shadow-sm
                      dark:border-white/10
                      dark:bg-white/5
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-orange-100
                        text-orange-600
                        dark:bg-orange-500/15
                        dark:text-orange-400
                      "
                    >
                      <Check
                        size={17}
                      />
                    </span>

                    <span
                      className="
                        font-bold
                        text-slate-700
                        dark:text-slate-200
                      "
                    >
                      {
                        highlight
                      }
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <aside
            className="
              space-y-6
            "
          >
            {/* Weather API */}
            <WeatherCard
              latitude={
                destination
                  .coordinates
                  .latitude
              }
              longitude={
                destination
                  .coordinates
                  .longitude
              }
              destinationName={
                destination.name
              }
            />

            {/* Travel information */}
            <div
              className="
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-7
                shadow-sm
                dark:border-white/10
                dark:bg-white/5
              "
            >
              <h3
                className="
                  text-xl
                  font-black
                  text-slate-950
                  dark:text-white
                "
              >
                Travel information
              </h3>

              <div
                className="
                  mt-7
                  space-y-6
                "
              >
                <div
                  className="
                    flex
                    gap-4
                  "
                >
                  <Calendar
                    className="
                      shrink-0
                      text-orange-500
                    "
                    size={21}
                  />

                  <div>
                    <p
                      className="
                        text-sm
                        font-bold
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      Best time to visit
                    </p>

                    <p
                      className="
                        mt-1
                        font-bold
                        text-slate-800
                        dark:text-white
                      "
                    >
                      {
                        destination.bestTime
                      }
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    gap-4
                  "
                >
                  <Clock
                    className="
                      shrink-0
                      text-orange-500
                    "
                    size={21}
                  />

                  <div>
                    <p
                      className="
                        text-sm
                        font-bold
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      Recommended duration
                    </p>

                    <p
                      className="
                        mt-1
                        font-bold
                        text-slate-800
                        dark:text-white
                      "
                    >
                      {
                        destination.duration
                      }
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    gap-4
                  "
                >
                  <Mountain
                    className="
                      shrink-0
                      text-orange-500
                    "
                    size={21}
                  />

                  <div>
                    <p
                      className="
                        text-sm
                        font-bold
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      Elevation
                    </p>

                    <p
                      className="
                        mt-1
                        font-bold
                        text-slate-800
                        dark:text-white
                      "
                    >
                      {
                        destination.elevation
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default DestinationDetails;