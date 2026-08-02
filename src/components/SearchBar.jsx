import { Search, X } from "lucide-react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="
          absolute left-5 top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />

      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search Pokhara, Chitwan, Mustang..."
        className="
  w-full rounded-2xl
  border border-slate-200
  bg-white py-4
  pl-12 pr-14
  text-sm text-slate-900
  outline-none
  transition-all
  placeholder:text-slate-400
  focus:border-orange-400
  focus:ring-4
  focus:ring-orange-500/10
  dark:border-white/10
  dark:bg-white/5
  dark:text-white
  dark:placeholder:text-slate-500
"
      />

      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          aria-label="Clear search"
          className="
            absolute right-4 top-1/2
            flex h-8 w-8
            -translate-y-1/2
            items-center justify-center
            rounded-full
            text-slate-400
            transition
            hover:bg-slate-100
            hover:text-slate-700
            dark:hover:bg-white/10
            dark:hover:text-white
          "
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
