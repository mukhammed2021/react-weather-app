import { useContext } from "react";
import { WeatherCardContext } from "./WeatherCard";

export default function WeatherDetails() {
   const { main, wind } = useContext(WeatherCardContext);

   return (
      <div className="flex justify-around gap-2">
         <div className="flex-1 text-center">
            <p className="mb-1 text-slate-400 max-[520px]:text-sm dark:text-slate-300">
               Ветер
            </p>
            <div className="text-2xl font-semibold max-[520px]:text-base">
               {wind?.speed}
               <span className="text-base font-normal max-[520px]:text-xs">
                  м/с
               </span>
            </div>
         </div>
         <div className="flex-1 text-center">
            <p className="mb-1 text-slate-400 max-[520px]:text-sm dark:text-slate-300">
               Влажность
            </p>
            <div className="text-2xl font-semibold max-[520px]:text-base">
               {main?.humidity}
               <span className="text-base font-normal max-[520px]:text-xs">
                  %
               </span>
            </div>
         </div>
         <div className="flex-1 text-center">
            <p className="mb-1 text-slate-400 max-[520px]:text-sm dark:text-slate-300">
               Давление
            </p>
            <div className="text-2xl font-semibold max-[520px]:text-base">
               {Math.round(main?.pressure * 0.75)}{" "}
               <p className="text-base font-normal max-[520px]:text-xs">
                  мм рт.ст.
               </p>
            </div>
         </div>
      </div>
   );
}
