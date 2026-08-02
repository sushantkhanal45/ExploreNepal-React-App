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
  CalendarDays,
  Check,
  Clock,
  Heart,
  MapPin,
  Mountain,
} from "lucide-react";

import destinations from "../data/destinations";

import {
  FavoritesContext,
} from "../context/FavoritesContext";

import WeatherCard from "../components/WeatherCard";

function DestinationDetails() {
  const [hasScrolled, setHasScrolled] =
    useState(false);

  const { slug } = useParams();

  const {
    toggleFavorite,
    isFavorite,
  } = useContext(
    FavoritesContext
  );

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(
        window.scrollY > 120
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const destination =
    destinations.find(
      (item) =>
        item.slug === slug
    );

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
        <div className="text-center">
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

          <p
            className="
              mt-3
              text-slate-500
              dark:text-slate-400
            "
          >
            The destination you are
            looking for does not exist.
          </p>

          <Link
            to="/explore"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-orange-500
              px-6
              py-3
              font-bold
              text-white
              transition
              hover:bg-orange-400
            "
          >
            <ArrowLeft size={18} />

            Back to Explore
          </Link>
        </div>
      </main>
    );
  }

  const saved =
    isFavorite(
      destination.id
    );

  const information = [
    {
      label: "Best time",
      value:
        destination.bestTime,
      icon: CalendarDays,
    },
    {
      label: "Trip duration",
      value:
        destination.duration,
      icon: Clock,
    },
    {
      label: "Elevation",
      value:
        destination.elevation,
      icon: Mountain,
    },
  ];

  return (
    <main
      className="
        min-h-screen
        bg-slate-50
        transition-colors
        duration-300
        dark:bg-slate-950
      "
    >
      {/* Floating back button */}
      <Link
        to="/explore"
        aria-label="Back to Explore"
        title="Back to Explore"
        className={`
          fixed
          left-4
          top-24
          z-50
          flex
          h-12
          items-center
          justify-center
          overflow-hidden
          rounded-full
          transition-all
          duration-500
          sm:left-6
          lg:left-8

          ${
            hasScrolled
              ? `
                w-12
                border
                border-white/50
                bg-slate-950/55
                px-0
                text-white
                shadow-lg
                shadow-black/25
                backdrop-blur-md
                hover:scale-110
                hover:border-orange-300
                hover:bg-slate-950/80
                hover:text-orange-300
                dark:border-white/40
                dark:bg-black/55
                dark:hover:bg-black/80
              `
              : `
                w-auto
                gap-2
                border
                border-slate-200
                bg-white/90
                px-5
                text-slate-800
                shadow-lg
                backdrop-blur-xl
                hover:-translate-y-1
                hover:border-orange-300
                hover:text-orange-500
                hover:shadow-xl
                dark:border-white/10
                dark:bg-slate-900/90
                dark:text-white
                dark:hover:border-orange-500/40
              `
          }
        `}
      >
        <ArrowLeft
          size={22}
          strokeWidth={3}
          className="
            shrink-0
            drop-shadow-sm
          "
        />

        <span
          className={`
            whitespace-nowrap
            transition-all
            duration-300

            ${
              hasScrolled
                ? `
                  max-w-0
                  opacity-0
                `
                : `
                  max-w-[150px]
                  opacity-100
                `
            }
          `}
        >
          Back to Explore
        </span>
      </Link>

      {/* Destination hero */}
      <section
        className="
          relative
          h-[520px]
          overflow-hidden
          sm:h-[620px]
        "
      >
        <img
          src={destination.image}
          alt={destination.name}
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-slate-950/35
            to-black/10
          "
        />

        {/* Favorite button */}
        <button
          type="button"
          onClick={() =>
            toggleFavorite(
              destination
            )
          }
          aria-label={
            saved
              ? "Remove from favorites"
              : "Add to favorites"
          }
          className={`
            absolute
            right-5
            top-6
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black/30
            text-white
            shadow-lg
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-110
            hover:bg-black/50
            lg:right-8

            ${
              saved
                ? "text-red-400"
                : ""
            }
          `}
        >
          <Heart
            size={21}
            fill={
              saved
                ? "currentColor"
                : "none"
            }
          />
        </button>

        {/* Hero content */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-10
            px-5
            pb-12
            lg:px-8
          "
        >
          <div className="mx-auto max-w-7xl">
            <span
              className="
                inline-flex
                rounded-full
                bg-orange-500
                px-4
                py-2
                text-xs
                font-bold
                text-white
                shadow-lg
              "
            >
              {destination.category}
            </span>

            <h1
              className="
                mt-5
                text-5xl
                font-black
                tracking-tight
                text-white
                drop-shadow-lg
                sm:text-7xl
              "
            >
              {destination.name}
            </h1>

            <div
              className="
                mt-4
                flex
                items-center
                gap-2
                text-sm
                text-white/85
                sm:text-base
              "
            >
              <MapPin size={18} />

              {destination.location},
              Nepal
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        className="
          mx-auto
          max-w-7xl
          px-5
          py-14
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.5fr_0.8fr]
          "
        >
          {/* Destination description */}
          <div>
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-orange-500
              "
            >
              About the destination
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                tracking-tight
                text-slate-950
                sm:text-5xl
                dark:text-white
              "
            >
              Discover{" "}
              {destination.name}
            </h2>

            <p
              className="
                mt-7
                max-w-3xl
                text-base
                leading-8
                text-slate-600
                sm:text-lg
                dark:text-slate-300
              "
            >
              {destination.description}
            </p>

            {/* Highlights */}
            <div className="mt-12">
              <h3
                className="
                  text-2xl
                  font-black
                  text-slate-950
                  dark:text-white
                "
              >
                Top highlights
              </h3>

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
                      key={highlight}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-4
                        shadow-sm
                        transition
                        hover:-translate-y-1
                        hover:shadow-md
                        dark:border-white/10
                        dark:bg-white/5
                      "
                    >
                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-orange-100
                          text-orange-500
                          dark:bg-orange-500/10
                        "
                      >
                        <Check size={18} />
                      </span>

                      <span
                        className="
                          font-semibold
                          text-slate-700
                          dark:text-slate-200
                        "
                      >
                        {highlight}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Travel information */}
          <aside>
            <div
              className="
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                dark:border-white/10
                dark:bg-slate-900
                lg:sticky
                lg:top-24
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

              <div className="mt-6 space-y-4">
                {information.map(
                  ({
                    label,
                    value,
                    icon: Icon,
                  }) => (
                    <div
                      key={label}
                      className="
                        flex
                        gap-4
                        rounded-2xl
                        bg-slate-50
                        p-4
                        dark:bg-white/5
                      "
                    >
                      <span
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-orange-100
                          text-orange-500
                          dark:bg-orange-500/10
                        "
                      >
                        <Icon size={20} />
                      </span>

                      <div>
                        <p
                          className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-wider
                            text-slate-400
                          "
                        >
                          {label}
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            font-semibold
                            leading-6
                            text-slate-700
                            dark:text-slate-200
                          "
                        >
                          {value}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Live weather */}
              <WeatherCard
                latitude={
                  destination.latitude
                }
                longitude={
                  destination.longitude
                }
                destinationName={
                  destination.name
                }
              />

              {/* Save destination */}
              <button
                type="button"
                onClick={() =>
                  toggleFavorite(
                    destination
                  )
                }
                className={`
                  mt-7
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5

                  ${
                    saved
                      ? `
                        bg-red-500
                        shadow-lg
                        shadow-red-500/20
                        hover:bg-red-400
                      `
                      : `
                        bg-orange-500
                        shadow-lg
                        shadow-orange-500/20
                        hover:bg-orange-400
                      `
                  }
                `}
              >
                <Heart
                  size={18}
                  fill={
                    saved
                      ? "currentColor"
                      : "none"
                  }
                />

                {saved
                  ? "Remove from favorites"
                  : "Save this destination"}
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default DestinationDetails;