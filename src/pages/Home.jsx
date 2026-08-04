import { ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
// import DestinationCarousel from "../components/DestinationCarousel";

import DestinationCard from "../components/DestinationCard";
import Footer from "../components/Footer";

import destinations from "../data/destinations";

function Home() {
  const featuredDestinations =
    destinations.slice(0, 3);

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
      {/* Hero section */}
      <Hero />
      {/* <DestinationCarousel /> */}

      {/* Featured destinations */}
      <section
        className="
          px-5
          py-20
          sm:py-24
          lg:px-8
        "
      >
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div
            className="
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
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

                Featured places
              </div>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-black
                  tracking-tight
                  text-slate-950
                  sm:text-5xl
                  dark:text-white
                "
              >
                Start your journey
                <span className="block text-orange-500">
                  with Nepal.
                </span>
              </h2>

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
                Discover three of Nepal’s
                most iconic destinations,
                from peaceful lakes and
                ancient cities to sacred
                cultural landmarks.
              </p>
            </div>

            {/* Desktop Explore All button */}
            <Link
              to="/explore"
              className="
                hidden
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-6
                py-3.5
                text-sm
                font-bold
                text-slate-700
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:border-orange-300
                hover:text-orange-500
                hover:shadow-lg
                dark:border-white/10
                dark:bg-white/5
                dark:text-white
                sm:inline-flex
              "
            >
              Explore all

              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Three destination cards */}
          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {featuredDestinations.map(
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

          {/* Mobile and bottom Explore All button */}
          <div
            className="
              mt-12
              flex
              justify-center
            "
          >
            <Link
              to="/explore"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-orange-500
                px-7
                py-4
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
              Explore all destinations

              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Home;