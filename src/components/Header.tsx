import { useToggleTheme } from "../hooks/useToggleTheme";

export default function Header() {
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
         <form className="grow">
            <input
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
