const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast";

export async function getWeather(
  latitude,
  longitude
) {
  const url =
    `${WEATHER_URL}` +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=` +
    `temperature_2m,` +
    `apparent_temperature,` +
    `relative_humidity_2m,` +
    `weather_code,` +
    `wind_speed_10m` +
    `&timezone=auto`;

  const response =
    await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Unable to load weather data."
    );
  }

  const data =
    await response.json();

  return data.current;
}

export function getWeatherInfo(
  weatherCode
) {
  const weatherCodes = {
    0: {
      label: "Clear sky",
      icon: "☀️",
    },

    1: {
      label: "Mainly clear",
      icon: "🌤️",
    },

    2: {
      label: "Partly cloudy",
      icon: "⛅",
    },

    3: {
      label: "Overcast",
      icon: "☁️",
    },

    45: {
      label: "Foggy",
      icon: "🌫️",
    },

    48: {
      label: "Rime fog",
      icon: "🌫️",
    },

    51: {
      label: "Light drizzle",
      icon: "🌦️",
    },

    53: {
      label: "Moderate drizzle",
      icon: "🌦️",
    },

    55: {
      label: "Heavy drizzle",
      icon: "🌧️",
    },

    61: {
      label: "Light rain",
      icon: "🌦️",
    },

    63: {
      label: "Moderate rain",
      icon: "🌧️",
    },

    65: {
      label: "Heavy rain",
      icon: "🌧️",
    },

    71: {
      label: "Light snow",
      icon: "🌨️",
    },

    73: {
      label: "Moderate snow",
      icon: "🌨️",
    },

    75: {
      label: "Heavy snow",
      icon: "❄️",
    },

    80: {
      label: "Rain showers",
      icon: "🌦️",
    },

    81: {
      label: "Moderate showers",
      icon: "🌧️",
    },

    82: {
      label: "Heavy showers",
      icon: "⛈️",
    },

    95: {
      label: "Thunderstorm",
      icon: "⛈️",
    },
  };

  return (
    weatherCodes[
      weatherCode
    ] || {
      label: "Weather unavailable",
      icon: "🌤️",
    }
  );
}