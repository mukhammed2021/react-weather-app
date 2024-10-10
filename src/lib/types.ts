export type weatherDataProps = {
   name?: string;
   main: Record<string, number>;
   sys?: {
      country?: string;
   };
   weather?: [
      {
         description?: string;
         icon?: string;
      },
   ];
   wind?: Record<string, number>;
};
