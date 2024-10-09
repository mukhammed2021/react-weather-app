export default function WeatherDetails() {
   return (
      <div className="flex justify-around gap-2">
         <div className="flex-1 text-center">
            <p className="mb-1 text-slate-400 max-[520px]:text-sm">Ветер</p>
            <div className="text-2xl font-semibold max-[520px]:text-base">
               2
               <span className="text-base font-normal max-[520px]:text-xs">
                  м/с
               </span>
            </div>
         </div>
         <div className="flex-1 text-center">
            <p className="mb-1 text-slate-400 max-[520px]:text-sm">Влажность</p>
            <div className="text-2xl font-semibold max-[520px]:text-base">
               68
               <span className="text-base font-normal max-[520px]:text-xs">
                  %
               </span>
            </div>
         </div>
         <div className="flex-1 text-center">
            <p className="mb-1 text-slate-400 max-[520px]:text-sm">Давление</p>
            <div className="text-2xl font-semibold max-[520px]:text-base">
               768{" "}
               <p className="text-base font-normal max-[520px]:text-xs">
                  мм рт.ст.
               </p>
            </div>
         </div>
      </div>
   );
}
