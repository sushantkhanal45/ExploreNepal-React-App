import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
} from "lucide-react";

function NotFound() {
  return (
    <main
      className="
        flex
        min-h-[calc(100vh-73px)]
        items-center
        justify-center
        bg-slate-50
        px-5
        py-16
        transition-colors
        duration-300
        dark:bg-slate-950
      "
    >
      <section
        className="
          max-w-2xl
          text-center
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
            bg-orange-100
            text-orange-500
            dark:bg-orange-500/10
          "
        >
          <MapPin size={38} />
        </div>

        <p
          className="
            mt-8
            text-7xl
            font-black
            tracking-tight
            text-orange-500
            sm:text-9xl
          "
        >
          404
        </p>

        <h1
          className="
            mt-5
            text-3xl
            font-black
            tracking-tight
            text-slate-950
            sm:text-5xl
            dark:text-white
          "
        >
          This path is not on the map.
        </h1>

        <p
          className="
            mx-auto
            mt-5
            max-w-lg
            text-base
            leading-8
            text-slate-600
            dark:text-slate-300
          "
        >
          The page you are looking for
          does not exist or may have
          been moved.
        </p>

        <Link
          to="/"
          className="
            mt-9
            inline-flex
            items-center
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
          "
        >
          <ArrowLeft size={18} />

          Return home
        </Link>
      </section>
    </main>
  );
}

export default NotFound;