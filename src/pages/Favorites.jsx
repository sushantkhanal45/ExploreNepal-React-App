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
import Footer from "../components/Footer";

function Favorites() {
  const {
    favorites,
  } = useContext(
    FavoritesContext
  );

  const favoriteCount =
    favorites.length;

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
      {/* Main content */}
      <section
        className="
          px-5
          py-16
          lg:px-8
          sm:py-20
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

            {/* Favorite count */}
            <div
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-5
                py-3
                text-sm
                font-bold
                text-slate-600
                shadow-sm
                dark:border-white/10
                dark:bg-white/5
                dark:text-slate-300
              "
            >
              <Heart
                size={16}
                className="
                  text-red-500
                "
                fill="currentColor"
              />

              {favoriteCount}{" "}

              {favoriteCount === 1
                ? "destination saved"
                : "destinations saved"}
            </div>
          </div>

          {/* Saved destination cards */}
          {favoriteCount > 0 ? (
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
            /* Empty state */
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
              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-red-100
                  text-red-500
                  dark:bg-red-500/10
                "
              >
                <Heart
                  size={36}
                />
              </div>

              <h2
                className="
                  mt-7
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
                  leading-7
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
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-orange-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-orange-400
                  hover:shadow-xl
                "
              >
                <Compass size={18} />

                Explore Nepal
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Favorites;