import Footer from "./components/Footer";
import WeatherCard from "./components/WeatherCard";

export default function App() {
   return (
      <div className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center p-4">
         <div className="mb-3 flex grow flex-col justify-center">
            <WeatherCard />
         </div>
         <Footer />
      </div>
   );
}
