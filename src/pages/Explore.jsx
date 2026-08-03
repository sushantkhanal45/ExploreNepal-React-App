import { useMemo, useState } from "react";

import {
  Compass,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import Footer from "../components/Footer";

function Explore() {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const categories = [
    "All",
    ...new Set(
      destinations.map(
        (destination) =>
          destination.category
      )
    ),
  ];

  const filteredDestinations = useMemo(() => {
    return destinations.filter(
      (destination) => {
        const searchValue =
          searchTerm.toLowerCase();

        const matchesSearch =
          destination.name
            .toLowerCase()
            .includes(
              searchValue
            ) ||
          destination.location
            .toLowerCase()
            .includes(
              searchValue
            ) ||
          destination.category
            .toLowerCase()
            .includes(
              searchValue
            );

        const matchesCategory =
          selectedCategory === "All" ||
          destination.category ===
            selectedCategory;

        return (
          matchesSearch &&
          matchesCategory
        );
      }
    );
  }, [
    searchTerm,
    selectedCategory,
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    selectedCategory !== "All";

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
      {/* Page heading */}
      <section
        className="
          border-b
          border-slate-200
          bg-white
          px-5
          py-16
          dark:border-white/10
          dark:bg-slate-900
          sm:py-20
          lg:px-8
        "
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-orange-100
              px-4
              py-2
              text-sm
              font-bold
              text-orange-600
              dark:bg-orange-500/10
              dark:text-orange-400
            "
          >
            <Compass size={16} />

            Discover Nepal
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
            Find your next

            <span className="block text-orange-500">
              adventure.
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
            Explore beautiful destinations
            across Nepal, from ancient
            cities and peaceful lakes to
            mountain trails and wildlife.
          </p>
        </div>
      </section>

      {/* Search and filters */}
      <section
        className="
          px-5
          py-10
          sm:py-14
          lg:px-8
        "
      >
        <div className="mx-auto max-w-7xl">
          {/* Search and category area */}
          <div
            className="
              rounded-[1.75rem]
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              transition-colors
              duration-300
              dark:border-white/10
              dark:bg-slate-900
              sm:p-7
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                lg:flex-row
                lg:items-center
              "
            >
              {/* Search input */}
              <div className="relative flex-1">
                <Search
                  size={20}
                  className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(
                      event.target.value
                    )
                  }
                  placeholder="Search Kathmandu, Pokhara, Lumbini..."
                  aria-label="Search destinations"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    py-4
                    pl-14
                    pr-12
                    text-sm
                    text-slate-900
                    outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-orange-400
                    focus:ring-4
                    focus:ring-orange-500/10
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-white
                  "
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() =>
                      setSearchTerm("")
                    }
                    aria-label="Clear search"
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      rounded-full
                      p-1
                      text-slate-400
                      transition
                      hover:bg-orange-100
                      hover:text-orange-500
                      dark:hover:bg-orange-500/10
                    "
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* Category title */}
              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-slate-700
                  dark:text-slate-200
                "
              >
                <SlidersHorizontal
                  size={18}
                  className="text-orange-500"
                />

                Categories
              </div>
            </div>

            {/* Category buttons */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2
              "
            >
              {categories.map(
                (category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(
                        category
                      )
                    }
                    className={`
                      rounded-full
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      hover:-translate-y-0.5

                      ${
                        selectedCategory ===
                        category
                          ? `
                            bg-orange-500
                            text-white
                            shadow-lg
                            shadow-orange-500/20
                          `
                          : `
                            bg-slate-100
                            text-slate-600
                            hover:bg-orange-100
                            hover:text-orange-600
                            dark:bg-white/5
                            dark:text-slate-300
                            dark:hover:bg-orange-500/10
                            dark:hover:text-orange-400
                          `
                      }
                    `}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Results heading */}
          <div
            className="
              mt-10
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {hasActiveFilters
                  ? "Filtered results"
                  : "All destinations"}
              </p>

              <h2
                className="
                  mt-1
                  text-2xl
                  font-black
                  text-slate-950
                  dark:text-white
                "
              >
                {filteredDestinations.length}{" "}
                {filteredDestinations.length ===
                1
                  ? "destination"
                  : "destinations"}
              </h2>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="
                  inline-flex
                  w-fit
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  font-bold
                  text-slate-600
                  transition-all
                  hover:border-orange-300
                  hover:text-orange-500
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-slate-300
                "
              >
                <X size={17} />

                Clear filters
              </button>
            )}
          </div>

          {/* Destination cards */}
          {filteredDestinations.length >
          0 ? (
            <div
              className="
                mt-8
                grid
                gap-6
                sm:grid-cols-2
                xl:grid-cols-3
              "
            >
              {filteredDestinations.map(
                (destination) => (
                  <DestinationCard
                    key={destination.id}
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
                mt-8
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
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-orange-100
                  text-orange-500
                  dark:bg-orange-500/10
                "
              >
                <Search size={30} />
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-black
                  text-slate-950
                  dark:text-white
                "
              >
                No destinations found
              </h3>

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
                We could not find a
                destination matching your
                search or selected category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="
                  mt-7
                  rounded-full
                  bg-orange-500
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-orange-500/20
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-orange-400
                "
              >
                Show all destinations
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Explore;