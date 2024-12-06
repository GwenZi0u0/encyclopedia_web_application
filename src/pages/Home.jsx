import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="pt-20 p-4 flex flex-col items-center justify-center w-full h-full space-y-4">
        <h1 className="text-4xl font-bold text-white">
          Welcome to the Encyclopedia Web
        </h1>
        <p className="text-lg text-white">
          This is a Pokémon X Digimon Encyclopedia Web Application
        </p>
      </div>
    </>
  );
};
