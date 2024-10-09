import { useEffect, useState } from "react";

export function useToggleTheme() {
   const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

   useEffect(() => {
      localStorage.setItem("theme", theme);
      if (theme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
   }, [theme]);

   function handleTheme() {
      setTheme(theme === "dark" ? "light" : "dark");
   }

   return { theme, handleTheme };
}
