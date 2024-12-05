import { NavBar } from "./components/NavBar";
// import  DigimonDetail  from "./pages/DigimonDetail";
import { DigimonList } from "./pages/DigimonList";
import { Home } from "./pages/Home";
import { PokemonDetail } from "./pages/PokemonDetail";
import { PokemonList } from "./pages/PokemonList";

export const routes = [
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pokemon",
        element: <PokemonList />,
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetail />,
      },
      {
        path: "/digimon",
        element: <DigimonList />,
      },
      // {
      //   path: "/digimon/:id",
      //   element: <DigimonDetail />,
      // },
    ],
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
];
