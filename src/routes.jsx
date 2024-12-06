import { createHashRouter } from "react-router-dom";
import { DigimonDetail } from "./pages/DigimonDetail";
import { DigimonList } from "./pages/DigimonList";
import { Home } from "./pages/Home";
import { PokemonDetail } from "./pages/PokemonDetail";
import { PokemonList } from "./pages/PokemonList";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon",
    element: <PokemonList />,
  },
  {
    path: "/digimon",
    element: <DigimonList />,
  },
  {
    path: "/pokemon/:name",
    element: <PokemonDetail />,
  },
  {
    path: "/digimon/:id",
    element: <DigimonDetail />,
  },
  {
    path: "*",
    element: <h1 className="text-white">404 Not Found</h1>,
  },
]);
