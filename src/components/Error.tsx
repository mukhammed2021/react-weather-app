import Icon from "./Icon";

export default function Error() {
   return (
      <div className="fixed bottom-3 right-4 flex max-w-96 items-center gap-3 rounded-lg border border-red-800 bg-red-500 px-5 py-4 text-white max-[375px]:right-0 max-[375px]:w-full max-[375px]:text-sm">
         <Icon xlinkHref="alert" />
         Разрешите доступ к геоданным
      </div>
   );
}
