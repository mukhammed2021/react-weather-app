import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Header from "./Header";
import WeatherDetails from "./WeatherDetails";

type weatherDataProps = {
   name: string;
   main: {
      feels_like: number;
      temp: number;
   };
   sys: {
      country: string;
   };
   weather: [
      {
         description: string;
         icon: string;
      },
   ];
};

export const API_KEY = "27d8da6e759b5d35bbd2a90d55e38a90";

export default function WeatherCard() {
   const [query, setQuery] = useState("");
   const [weatherData, setWeatherData] = useState<weatherDataProps>(
      {} as weatherDataProps,
   );
   const { name, main, sys, weather } = weatherData;

   useEffect(() => {
      function success(pos: GeolocationPosition) {
         const { latitude, longitude } = pos.coords;

         async function weather() {
            const res = await fetch(
               `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=ru`,
            );
            const data = await res.json();
            setWeatherData(data);
         }
         weather();
      }

      navigator.geolocation.getCurrentPosition(success);
   }, []);

   return (
      <div className="rounded-xl bg-white/75 px-8 pb-6 pt-4 max-[520px]:px-7 max-[425px]:px-5 max-[375px]:px-4 dark:bg-black/75">
         <Header query={query} setQuery={setQuery} setWeatherData={setWeatherData} />
         <CurrentWeather name={name} main={main} sys={sys} weather={weather} />
         <WeatherDetails />
      </div>
   );
}
