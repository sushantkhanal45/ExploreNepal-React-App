import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  MapPin,
  Mountain,
  Sparkles,
} from "lucide-react";

function Hero() {
  return (
    <section
      className="
        relative min-h-[calc(100vh-73px)]
        overflow-hidden
        bg-slate-950
        text-white
      "
    >
      {/* Background image */}
      <div
        className="
          absolute inset-0
          bg-[url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2200&q=90')]
          bg-cover
          bg-center
        "
      />

      {/* Dark overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-slate-950
          via-slate-950/85
          to-slate-950/30
        "
      />

      {/* Bottom gradient */}
      <div
        className="
          absolute inset-x-0
          bottom-0 h-48
          bg-gradient-to-t
          from-slate-950
          to-transparent
        "
      />

      {/* Decorative glow */}
      <div
        className="
          absolute -right-32
          top-20 h-80 w-80
          rounded-full
          bg-orange-500/20
          blur-3xl
        "
      />

      <div
        className="
          relative z-10
          mx-auto flex
          min-h-[calc(100vh-73px)]
          max-w-7xl
          items-center
          px-5 py-24
          lg:px-8
        "
      >
        <div className="max-w-3xl">
          {/* Small badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-white/15
              bg-white/10
              px-4 py-2
              text-sm
              font-semibold
              text-orange-200
              backdrop-blur-md
            "
          >
            <Sparkles size={16} />

            Discover the beauty of Nepal
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              mt-7
              text-5xl
              font-black
              leading-[0.95]
              tracking-tight
              sm:text-6xl
              lg:text-8xl
            "
          >
            Every journey
            <span className="block">
              begins with
            </span>

            <span
              className="
                block
                bg-gradient-to-r
                from-orange-400
                to-amber-300
                bg-clip-text
                text-transparent
              "
            >
              exploration.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-slate-300
              sm:text-lg
            "
          >
            From the snow-covered Himalayas
            to peaceful lakes, ancient temples,
            and vibrant cultures, discover the
            destinations that make Nepal
            unforgettable.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              mt-9
              flex flex-col
              gap-4
              sm:flex-row
            "
          >
            <Link
              to="/explore"
              className="
                group inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-orange-500
                px-7 py-4
                text-sm
                font-bold
                text-white
                shadow-xl
                shadow-orange-500/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-orange-400
              "
            >
              <Compass size={19} />

              Explore destinations

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <a
              href="#destinations"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border border-white/20
                bg-white/10
                px-7 py-4
                text-sm
                font-bold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/20
              "
            >
              <Mountain size={19} />

              View featured places
            </a>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="
              mt-14
              grid
              max-w-xl
              grid-cols-3
              gap-3
              border-t
              border-white/10
              pt-7
              sm:gap-8
            "
          >
            <div>
              <p
                className="
                  text-2xl
                  font-black
                  sm:text-3xl
                "
              >
                8
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-slate-400
                  sm:text-sm
                "
              >
                Regions
              </p>
            </div>

            <div>
              <p
                className="
                  text-2xl
                  font-black
                  sm:text-3xl
                "
              >
                14+
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-slate-400
                  sm:text-sm
                "
              >
                Destinations
              </p>
            </div>

            <div>
              <p
                className="
                  text-2xl
                  font-black
                  sm:text-3xl
                "
              >
                8,848m
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-slate-400
                  sm:text-sm
                "
              >
                Highest peak
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Location label */}
      <div
        className="
          absolute
          bottom-7
          right-5
          z-10
          hidden
          items-center
          gap-2
          rounded-full
          border border-white/10
          bg-black/20
          px-4 py-2
          text-xs
          text-white/80
          backdrop-blur-md
          lg:flex
        "
      >
        <MapPin
          size={15}
          className="text-orange-400"
        />

        Nepal, South Asia
      </div>
    </section>
  );
}

export default Hero;