import {
  useContext,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  Compass,
  Heart,
} from "lucide-react";

import {
  FavoritesContext,
} from "../context/FavoritesContext";

import DestinationCard from "../components/DestinationCard";

function Favorites() {
  const {
    favorites,
  } = useContext(
    FavoritesContext
  );

  return (
    <main
      className="
        min-h-screen
        bg-slate-50
        px-5
        py-16
        transition-colors
        duration-300
        dark:bg-slate-950
        lg:px-8
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
        "
      >
        {/* Heading */}
        <div
          className="
            flex
            flex-col
            justify-between
            gap-6
            sm:flex-row
            sm:items-end
          "
        >
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-red-100
                px-4
                py-2
                text-sm
                font-bold
                text-red-600
                dark:bg-red-500/10
                dark:text-red-400
              "
            >
              <Heart
                size={16}
                fill="currentColor"
              />

              Saved destinations
            </div>

            <h1
              className="
                mt-6
                text-4xl
                font-black
                tracking-tight
                text-slate-950
                sm:text-6xl
                dark:text-white
              "
            >
              Your favorite
              <span
                className="
                  block
                  text-orange-500
                "
              >
                places.
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-8
                text-slate-600
                dark:text-slate-300
              "
            >
              Keep track of the
              destinations you want
              to visit in Nepal.
            </p>
          </div>

          <p
            className="
              text-sm
              font-bold
              text-slate-500
              dark:text-slate-400
            "
          >
            {favorites.length}{" "}
            saved
          </p>
        </div>

        {/* Saved cards */}
        {favorites.length > 0 ? (
          <div
            className="
              mt-12
              grid
              gap-6
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
            {favorites.map(
              (destination) => (
                <DestinationCard
                  key={
                    destination.id
                  }
                  destination={
                    destination
                  }
                />
              )
            )}
          </div>
        ) : (
          <div
            className="
              mt-12
              rounded-[2rem]
              border
              border-dashed
              border-slate-300
              bg-white
              px-6
              py-20
              text-center
              dark:border-white/15
              dark:bg-white/5
            "
          >
            <Heart
              size={48}
              className="
                mx-auto
                text-orange-500
              "
            />

            <h2
              className="
                mt-6
                text-2xl
                font-black
                text-slate-950
                dark:text-white
              "
            >
              No favorites yet
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-md
                text-slate-500
                dark:text-slate-400
              "
            >
              Explore destinations
              and click the heart
              icon to save places
              you want to visit.
            </p>

            <Link
              to="/explore"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-orange-500
                px-6
                py-3
                text-sm
                font-bold
                text-white
                transition
                hover:bg-orange-400
              "
            >
              <Compass size={18} />

              Explore Nepal
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default Favorites;