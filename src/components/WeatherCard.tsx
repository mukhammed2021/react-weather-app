import CurrentWeather from "./CurrentWeather";
import Header from "./Header";
import WeatherDetails from "./WeatherDetails";

export default function WeatherCard() {
   return (
      <div className="rounded-xl bg-white/75 px-8 pb-6 pt-4 max-[520px]:px-7 max-[425px]:px-5 max-[375px]:px-4 dark:bg-black/75">
         <Header />
         <CurrentWeather />
         <WeatherDetails />
      </div>
   );
}
