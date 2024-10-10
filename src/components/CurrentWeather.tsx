import { weatherDataProps } from "../lib/types";

type CurrentWeatherProps = weatherDataProps;

export default function CurrentWeather({
   name,
   main,
   sys,
   weather,
}: CurrentWeatherProps) {
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
