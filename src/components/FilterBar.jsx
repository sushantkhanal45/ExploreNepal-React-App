const categories = [
  "All",
  "Nature",
  "Adventure",
  "Wildlife",
  "Culture",
  "Mountain",
];

function FilterBar({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div
      className="
        flex gap-3
        overflow-x-auto
        pb-2
        scrollbar-hide
      "
    >
      {categories.map((category) => {
        const isSelected =
          selectedCategory === category;

        return (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
            className={`
              shrink-0 rounded-full
              px-5 py-2.5
              text-sm font-semibold
              transition-all duration-300
              ${
                isSelected
                  ? `
                    bg-orange-500
                    text-white
                    shadow-lg
                    shadow-orange-500/20
                  `
                  : `
                    border border-slate-200
                    bg-white
                    text-slate-600
                    hover:border-orange-300
                    hover:text-orange-500
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-slate-300
                    dark:hover:border-orange-500/40
                    dark:hover:text-orange-400
                  `
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default FilterBar;