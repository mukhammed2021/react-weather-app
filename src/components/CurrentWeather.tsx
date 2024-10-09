import { useEffect, useState } from "react";

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

const API_KEY = "27d8da6e759b5d35bbd2a90d55e38a90";

export default function CurrentWeather() {
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
      <>
         <div className="mb-2 flex items-center gap-4">
            <p className="text-5xl font-bold max-[520px]:text-3xl max-[425px]:text-2xl">
               {name}, {sys?.country}
            </p>
            <svg className="size-12 max-[520px]:size-9 max-[425px]:size-8">
               <use xlinkHref={`#${weather?.[0].icon}`} />
            </svg>
         </div>
         <p className="mb-6 text-xl max-[520px]:text-lg max-[425px]:mb-4 max-[425px]:text-base max-[375px]:text-sm">
            {weather?.[0].description}, ощущается как{" "}
            {Math.floor(main?.feels_like)}°
         </p>
         <div className="mb-6 text-9xl font-bold max-[520px]:text-8xl max-[425px]:text-7xl">
            {Math.floor(main?.temp)}°
         </div>
      </>
   );
}
