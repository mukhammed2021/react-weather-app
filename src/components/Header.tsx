export default function Header() {
   return (
      <header className="mb-11 flex items-center gap-1 max-[520px]:mb-9 max-[425px]:mb-6">
         <button type="button">
            <svg className="size-6">
               <use xlinkHref="#dark" />
            </svg>
         </button>
         <form className="grow">
            <input
               type="search"
               placeholder="Введите город"
               autoComplete="off"
               className="block w-full appearance-none rounded-lg bg-transparent px-3 py-2 placeholder:text-slate-400"
            />
         </form>
         <button type="button">
            <svg className="size-6">
               <use xlinkHref="#search" />
            </svg>
         </button>
      </header>
   );
}
