import { useContext } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Heart,
  MapPin,
} from "lucide-react";

import {
  FavoritesContext,
} from "../context/FavoritesContext";

function DestinationCard({
  destination,
}) {
  const {
    toggleFavorite,
    isFavorite,
  } = useContext(
    FavoritesContext
  );

  const saved = isFavorite(
    destination.id
  );

  const handleFavorite = (
    event
  ) => {
    // Prevent the card link from opening
    event.preventDefault();
    event.stopPropagation();

    toggleFavorite(
      destination
    );
  };

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[1.75rem]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        dark:border-white/10
        dark:bg-slate-900
      "
    >
      {/* Entire card is clickable */}
      <Link
        to={`/destination/${destination.slug}`}
        aria-label={`Explore ${destination.name}`}
        className="
          block
          cursor-pointer
        "
      >
        {/* Destination image */}
        <div
          className="
            relative
            h-64
            overflow-hidden
          "
        >
          <img
            src={destination.image}
            alt={destination.name}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Image overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/65
              via-transparent
              to-transparent
            "
          />

          {/* Category */}
          <span
            className="
              absolute
              left-5
              top-5
              rounded-full
              bg-white/90
              px-3
              py-1.5
              text-xs
              font-bold
              text-orange-600
              backdrop-blur-md
            "
          >
            {destination.category}
          </span>

          {/* Destination name */}
          <div
            className="
              absolute
              bottom-5
              left-5
              right-5
            "
          >
            <h2
              className="
                text-2xl
                font-black
                text-white
              "
            >
              {destination.name}
            </h2>

            <div
              className="
                mt-2
                flex
                items-center
                gap-1.5
                text-sm
                text-white/80
              "
            >
              <MapPin size={15} />

              {destination.location}
            </div>
          </div>
        </div>

        {/* Card information */}
        <div className="p-6">
          <p
            className="
              min-h-[72px]
              text-sm
              leading-6
              text-slate-600
              dark:text-slate-300
            "
          >
            {
              destination.shortDescription
            }
          </p>

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              border-t
              border-slate-100
              pt-5
              dark:border-white/10
            "
          >
            <span
              className="
                text-xs
                font-semibold
                text-slate-500
                dark:text-slate-400
              "
            >
              {destination.duration}
            </span>

            {/* This is now part of the card link */}
            <span
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-orange-500
                transition
                group-hover:text-orange-400
              "
            >
              Explore

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </span>
          </div>
        </div>
      </Link>

      {/* Heart is outside the card Link */}
      <button
        type="button"
        onClick={handleFavorite}
        aria-label={
          saved
            ? `Remove ${destination.name} from favorites`
            : `Save ${destination.name} to favorites`
        }
        className={`
          absolute
          right-5
          top-5
          z-20
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white/90
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-110
          ${
            saved
              ? `
                text-red-500
                shadow-lg
              `
              : `
                text-slate-700
                hover:text-red-500
              `
          }
        `}
      >
        <Heart
          size={19}
          fill={
            saved
              ? "currentColor"
              : "none"
          }
        />
      </button>
    </article>
  );
}

export default DestinationCard;