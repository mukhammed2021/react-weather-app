import { useToggleTheme } from "../hooks/useToggleTheme";
import { type weatherDataProps } from "../lib/types";
import { API_KEY } from "./WeatherCard";

type HeaderProps = {
   query: string;
   setQuery: React.Dispatch<React.SetStateAction<string>>;
   setWeatherData: React.Dispatch<React.SetStateAction<weatherDataProps>>;
};

export default function Header({ query, setQuery, setWeatherData }: HeaderProps) {
   const { theme, handleTheme } = useToggleTheme();

   return (
      <header className="mb-11 flex items-center gap-1 max-[520px]:mb-9 max-[425px]:mb-6">
         <button type="button" onClick={handleTheme}>
            {theme === "dark" ? (
               <Icon xlinkHref="light" />
            ) : (
               <Icon xlinkHref="dark" />
            )}
         </button>
         <form
            onSubmit={(e) => {
               e.preventDefault();

               async function coords() {
                  const resCoords = await fetch(
                     `https://nominatim.openstreetmap.org/search?format=json&city=${query}&limit=1`,
                  );
                  const dataCoords = await resCoords.json();

                  const res = await fetch(
                     `https://api.openweathermap.org/data/2.5/weather?lat=${dataCoords[0]?.lat}&lon=${dataCoords[0]?.lon}&appid=${API_KEY}&units=metric&lang=ru`,
                  );
                  const data = await res.json();
                  setWeatherData(data);
               }
               coords();
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
         <button type="button">
            <Icon xlinkHref="search" />
         </button>
      </header>
   );
}

type IconPros = React.ComponentPropsWithoutRef<"use">;

function Icon({ xlinkHref }: IconPros) {
   return (
      <svg className="size-6">
         <use xlinkHref={`#${xlinkHref}`} />
      </svg>
   );
}
