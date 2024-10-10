type IconPros = React.ComponentPropsWithoutRef<"use">;

export default function Icon({ xlinkHref }: IconPros) {
   return (
      <svg className="size-6">
         <use xlinkHref={`#${xlinkHref}`} />
      </svg>
   );
}
