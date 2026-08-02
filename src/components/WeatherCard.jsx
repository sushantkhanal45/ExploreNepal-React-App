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
  getWeatherInfo,
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

        const currentWeather =
          await getWeather(
            latitude,
            longitude
          );

        setWeather(
          currentWeather
        );
      } catch (error) {
        setError(
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
          mt-8
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
            w-32
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
          mt-8
          rounded-[2rem]
          border
          border-orange-200
          bg-orange-50
          p-6
          dark:border-orange-500/20
          dark:bg-orange-500/5
        "
      >
        <p
          className="
            font-semibold
            text-orange-600
          "
        >
          {error}
        </p>
      </div>
    );
  }

  const weatherInfo =
    getWeatherInfo(
      weather.weather_code
    );

  return (
    <section
      className="
        mt-8
        overflow-hidden
        rounded-[2rem]
        bg-gradient-to-br
        from-orange-500
        to-amber-400
        p-6
        text-white
        shadow-xl
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
              text-sm
              font-bold
              text-white/80
            "
          >
            <CloudSun size={18} />

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

          <p className="mt-1 text-white/80">
            {weatherInfo.label}
          </p>
        </div>

        <span className="text-5xl">
          {weatherInfo.icon}
        </span>
      </div>

      <div
        className="
          mt-8
          flex
          items-end
          gap-3
        "
      >
        <Thermometer
          size={28}
        />

        <span
          className="
            text-6xl
            font-black
            tracking-tight
          "
        >
          {Math.round(
            weather.temperature_2m
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

      <div
        className="
          mt-8
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
              text-sm
              text-white/75
            "
          >
            <Droplets size={17} />

            Humidity
          </div>

          <p
            className="
              mt-2
              text-xl
              font-black
            "
          >
            {
              weather.relative_humidity_2m
            }
            %
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
              text-sm
              text-white/75
            "
          >
            <Wind size={17} />

            Wind
          </div>

          <p
            className="
              mt-2
              text-xl
              font-black
            "
          >
            {
              Math.round(
                weather.wind_speed_10m
              )
            }{" "}
            km/h
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
        Updated from live weather data
      </p>
    </section>
  );
}

export default WeatherCard;