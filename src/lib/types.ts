export type weatherDataProps = {
   name: string;
   main: {
      feels_like: number;
      temp: number;
   };
   sys: {
      country: string;
   };
   weather: [
      {
         description: string;
         icon: string;
      },
   ];
};