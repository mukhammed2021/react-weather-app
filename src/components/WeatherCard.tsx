import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Header from "./Header";
import WeatherDetails from "./WeatherDetails";
import Loading from "./Loading";
import Error from "./Error";
import { type weatherDataProps } from "../lib/types";

export const API_KEY = "27d8da6e759b5d35bbd2a90d55e38a90";

export default function WeatherCard() {
   const [query, setQuery] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);
   const [weatherData, setWeatherData] = useState<weatherDataProps>(
      {} as weatherDataProps,
   );
   const { name, main, sys, weather, wind } = weatherData;

   useEffect(() => {
      function error() {
         setError(true);
      }

      function success(pos: GeolocationPosition) {
         const { latitude, longitude } = pos.coords;

         async function weather() {
            try {
               setIsLoading(true);

               const res = await fetch(
                  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=ru`,
               );
               const data = await res.json();
               setWeatherData(data);
            } finally {
               setIsLoading(false);
            }
         }
         weather();
      }

      navigator.geolocation.getCurrentPosition(success, error);
   }, []);

   return (
      <div className="rounded-xl bg-white/75 px-8 pb-6 pt-4 max-[520px]:px-7 max-[425px]:px-5 max-[375px]:px-4 dark:bg-black/75">
         {error && (
            <>
               <Loading />
               <Error />
            </>
         )}
         {isLoading && <Loading />}
         {!isLoading && !error && (
            <>
               <Header
                  query={query}
                  setQuery={setQuery}
                  setWeatherData={setWeatherData}
                  setIsLoading={setIsLoading}
               />
               <CurrentWeather
                  name={name}
                  main={main}
                  sys={sys}
                  weather={weather}
               />
               <WeatherDetails main={main} wind={wind} />
            </>
         )}
      </div>
   );
}
