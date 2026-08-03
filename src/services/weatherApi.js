const API_KEY =
  import.meta.env.VITE_OPENWEATHER_API_KEY;

const BASE_URL =
  "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(
  latitude,
  longitude
) {
  if (!API_KEY) {
    throw new Error(
      "OpenWeather API key is missing."
    );
  }

  if (
    latitude === undefined ||
    longitude === undefined
  ) {
    throw new Error(
      "Destination coordinates are missing."
    );
  }

  const url =
    `${BASE_URL}` +
    `?lat=${latitude}` +
    `&lon=${longitude}` +
    `&units=metric` +
    `&appid=${API_KEY}`;

  const response =
    await fetch(url);

  const data =
    await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
      "Unable to load weather data."
    );
  }

  return {
    temperature:
      data.main.temp,

    feelsLike:
      data.main.feels_like,

    humidity:
      data.main.humidity,

    windSpeed:
      data.wind.speed,

    condition:
      data.weather[0].main,

    description:
      data.weather[0].description,

    icon:
      data.weather[0].icon,

    location:
      data.name,
  };
}