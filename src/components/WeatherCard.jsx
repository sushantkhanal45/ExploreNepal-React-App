import {
  useEffect,
  useState,
} from "react";

import {
  CloudSun,
  Droplets,
  Thermometer,
  Wind,
} from "lucide-react";

import {
  getWeather,
} from "../services/weatherApi";

function WeatherCard({
  latitude,
  longitude,
  destinationName,
}) {
  const [weather, setWeather] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadWeather() {
      try {
        setLoading(true);
        setError("");

        const weatherData =
          await getWeather(
            latitude,
            longitude
          );

        setWeather(
          weatherData
        );
      } catch (error) {
        setError(
          error.message ||
          "Weather data is unavailable."
        );
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, [
    latitude,
    longitude,
  ]);

  if (loading) {
    return (
      <div
        className="
          mt-6
          animate-pulse
          rounded-[2rem]
          bg-slate-200
          p-7
          dark:bg-white/10
        "
      >
        <div
          className="
            h-5
            w-36
            rounded
            bg-slate-300
            dark:bg-white/10
          "
        />

        <div
          className="
            mt-6
            h-16
            w-40
            rounded
            bg-slate-300
            dark:bg-white/10
          "
        />
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div
        className="
          mt-6
          rounded-[2rem]
          border
          border-red-200
          bg-red-50
          p-6
          dark:border-red-500/20
          dark:bg-red-500/5
        "
      >
        <p
          className="
            font-bold
            text-red-600
            dark:text-red-400
          "
        >
          Weather unavailable
        </p>

        <p
          className="
            mt-2
            text-sm
            text-red-500
          "
        >
          {error}
        </p>
      </div>
    );
  }

  const weatherIconUrl =
    `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <section
      className="
        mt-6
        overflow-hidden
        rounded-[2rem]
        bg-gradient-to-br
        from-orange-500
        to-amber-400
        p-6
        text-white
        shadow-xl
        shadow-orange-500/20
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <div>
          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              font-black
              tracking-wider
              text-white/80
            "
          >
            <CloudSun size={17} />

            LIVE WEATHER
          </div>

          <h3
            className="
              mt-3
              text-2xl
              font-black
            "
          >
            {destinationName}
          </h3>

          <p
            className="
              mt-1
              capitalize
              text-sm
              text-white/80
            "
          >
            {weather.description}
          </p>
        </div>

        <img
          src={weatherIconUrl}
          alt={weather.condition}
          className="
            h-20
            w-20
            object-contain
          "
        />
      </div>

      <div
        className="
          mt-6
          flex
          items-end
          gap-3
        "
      >
        <Thermometer
          size={27}
        />

        <span
          className="
            text-6xl
            font-black
            tracking-tight
          "
        >
          {Math.round(
            weather.temperature
          )}
          °
        </span>

        <span
          className="
            mb-2
            text-lg
            text-white/80
          "
        >
          C
        </span>
      </div>

      <p
        className="
          mt-2
          text-sm
          text-white/75
        "
      >
        Feels like{" "}
        {Math.round(
          weather.feelsLike
        )}
        °C
      </p>

      <div
        className="
          mt-7
          grid
          grid-cols-2
          gap-3
        "
      >
        <div
          className="
            rounded-2xl
            bg-white/15
            p-4
            backdrop-blur-md
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              font-semibold
              text-white/75
            "
          >
            <Droplets size={16} />

            Humidity
          </div>

          <p
            className="
              mt-2
              text-xl
              font-black
            "
          >
            {weather.humidity}%
          </p>
        </div>

        <div
          className="
            rounded-2xl
            bg-white/15
            p-4
            backdrop-blur-md
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              font-semibold
              text-white/75
            "
          >
            <Wind size={16} />

            Wind
          </div>

          <p
            className="
              mt-2
              text-xl
              font-black
            "
          >
            {Math.round(
              weather.windSpeed
            )}{" "}
            m/s
          </p>
        </div>
      </div>

      <p
        className="
          mt-5
          text-xs
          text-white/65
        "
      >
        Live data powered by OpenWeather
      </p>
    </section>
  );
}

export default WeatherCard;