export default function CurrentWeather() {
   return (
      <>
         <div className="mb-2 flex items-center gap-4">
            <p className="text-5xl font-bold max-[520px]:text-3xl max-[425px]:text-2xl">
               Астана, KZ
            </p>
            <svg className="size-12 text-amber-400 max-[520px]:size-9 max-[425px]:size-8">
               <use xlinkHref="#01d" />
            </svg>
         </div>
         <p className="mb-6 text-xl max-[520px]:text-lg max-[425px]:mb-4 max-[425px]:text-base max-[375px]:text-sm">
            Небольшая облачность, ощущается как 12°
         </p>
         <div className="mb-6 text-9xl font-bold max-[520px]:text-8xl max-[425px]:text-7xl">
            16°
         </div>
      </>
   );
}
