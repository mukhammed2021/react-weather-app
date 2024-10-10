import { useContext } from "react";
import { useToggleTheme } from "../hooks/useToggleTheme";
import Icon from "./Icon";
import { API_KEY, WeatherCardContext } from "./WeatherCard";

export default function Header() {
   const { query, setQuery, setWeatherData, setIsLoading } =
      useContext(WeatherCardContext);
   const { theme, handleTheme } = useToggleTheme();

   function handleWeather() {
      if (query.trim() === "") {
         setQuery("");
         return;
      }

      async function coords() {
         try {
            setIsLoading(true);
            const resCoords = await fetch(
               `https://nominatim.openstreetmap.org/search?format=json&city=${query}&limit=1`,
            );
            const dataCoords = await resCoords.json();

            const res = await fetch(
               `https://api.openweathermap.org/data/2.5/weather?lat=${dataCoords[0]?.lat}&lon=${dataCoords[0]?.lon}&appid=${API_KEY}&units=metric&lang=ru`,
            );

            if (!res.ok) return;

            const data = await res.json();
            setWeatherData(data);
         } finally {
            setIsLoading(false);
            setQuery("");
         }
      }
      coords();
   }

   return (
      <header className="mb-11 flex items-center gap-1 max-[520px]:mb-9 max-[425px]:mb-6">
         <button
            type="button"
            onClick={handleTheme}
            className="rounded transition-colors hover:bg-slate-300 dark:hover:bg-slate-700"
         >
            {theme === "dark" ? (
               <Icon xlinkHref="light" />
            ) : (
               <Icon xlinkHref="dark" />
            )}
         </button>
         <form
            onSubmit={(e) => {
               e.preventDefault();
               handleWeather();
            }}
            className="grow"
         >
            <input
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               type="search"
               placeholder="Введите город"
               autoComplete="off"
               className="block w-full appearance-none rounded-lg bg-transparent px-3 py-2 placeholder:text-slate-400 dark:placeholder:text-slate-300"
            />
         </form>
         <button
            type="button"
            onClick={handleWeather}
            className="rounded transition-colors hover:bg-slate-300 dark:hover:bg-slate-700"
         >
            <Icon xlinkHref="search" />
         </button>
      </header>
   );
}
