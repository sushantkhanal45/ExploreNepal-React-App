import {
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

function ImageCarousel({
  images = [],
  destinationName = "Destination",
}) {
  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  const [
    direction,
    setDirection,
  ] = useState(1);

  /*
    Reset the carousel when the
    user opens another destination.
  */
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(1);
  }, [
    destinationName,
  ]);

  /*
    Do not render if no images
    are available.
  */
  if (
    !images ||
    images.length === 0
  ) {
    return null;
  }

  const goToNext = () => {
    setDirection(1);

    setCurrentIndex(
      (previousIndex) =>
        previousIndex ===
        images.length - 1
          ? 0
          : previousIndex + 1
    );
  };

  const goToPrevious = () => {
    setDirection(-1);

    setCurrentIndex(
      (previousIndex) =>
        previousIndex === 0
          ? images.length - 1
          : previousIndex - 1
    );
  };

  const goToImage = (
    index
  ) => {
    if (
      index === currentIndex
    ) {
      return;
    }

    setDirection(
      index > currentIndex
        ? 1
        : -1
    );

    setCurrentIndex(
      index
    );
  };

  /*
    Automatically change the
    image every 6 seconds.
  */
  useEffect(() => {
    if (
      images.length <= 1
    ) {
      return undefined;
    }

    const slider =
      setInterval(
        () => {
          setDirection(1);

          setCurrentIndex(
            (
              previousIndex
            ) =>
              previousIndex ===
              images.length - 1
                ? 0
                : previousIndex + 1
          );
        },
        6000
      );

    return () => {
      clearInterval(
        slider
      );
    };
  }, [
    images.length,
  ]);

  const slideVariants = {
    enter: (
      slideDirection
    ) => ({
      x:
        slideDirection > 0
          ? "100%"
          : "-100%",

      opacity: 0,

      scale: 1.03,
    }),

    center: {
      x: 0,

      opacity: 1,

      scale: 1,
    },

    exit: (
      slideDirection
    ) => ({
      x:
        slideDirection > 0
          ? "-100%"
          : "100%",

      opacity: 0,

      scale: 1.03,
    }),
  };

  return (
    <div
      className="
        relative
        h-full
        w-full
        overflow-hidden
        bg-slate-950
      "
    >
      <AnimatePresence
        initial={false}
        custom={direction}
      >
        <motion.img
          key={currentIndex}
          src={
            images[
              currentIndex
            ]
          }
          alt={
            `${destinationName} view ${
              currentIndex + 1
            }`
          }
          custom={direction}
          variants={
            slideVariants
          }
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.75,

            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />
      </AnimatePresence>

      {/* Dark image overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-gradient-to-t
          from-slate-950/65
          via-transparent
          to-black/15
        "
      />

      {/* Previous button */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={
            goToPrevious
          }
          aria-label="
            Previous image
          "
          className="
            absolute
            left-4
            top-1/2
            z-30
            flex
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-slate-950/65
            text-white
            shadow-xl
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-110
            hover:bg-slate-950/90
            active:scale-95
            sm:left-7
            sm:h-14
            sm:w-14
          "
        >
          <ChevronLeft
            size={27}
            strokeWidth={2.5}
          />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={
            goToNext
          }
          aria-label="
            Next image
          "
          className="
            absolute
            right-4
            top-1/2
            z-30
            flex
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-slate-950/65
            text-white
            shadow-xl
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-110
            hover:bg-slate-950/90
            active:scale-95
            sm:right-7
            sm:h-14
            sm:w-14
          "
        >
          <ChevronRight
            size={27}
            strokeWidth={2.5}
          />
        </button>
      )}

      {/* Image number */}
      <div
        className="
          absolute
          right-5
          top-5
          z-30
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white/15
          bg-slate-950/65
          px-4
          py-2
          text-xs
          font-bold
          text-white
          shadow-lg
          backdrop-blur-md
        "
      >
        <Images
          size={15}
        />

        {currentIndex + 1}
        {" / "}
        {images.length}
      </div>

      {/* Navigation dots */}
      {images.length > 1 && (
        <div
          className="
            absolute
            bottom-6
            left-1/2
            z-30
            flex
            -translate-x-1/2
            items-center
            gap-2
          "
        >
          {images.map(
            (
              image,
              index
            ) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() =>
                  goToImage(
                    index
                  )
                }
                aria-label={
                  `View image ${
                    index + 1
                  }`
                }
                className={`
                  h-2.5
                  rounded-full
                  border
                  border-white/30
                  transition-all
                  duration-300

                  ${
                    index ===
                    currentIndex
                      ? `
                        w-9
                        bg-orange-500
                      `
                      : `
                        w-2.5
                        bg-white/60
                        hover:bg-white
                      `
                  }
                `}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;