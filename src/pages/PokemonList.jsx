import { useState } from "react";
import { usePokemonData } from "../api/api";
import BallLoading from "../assets/ball-loading.svg";
import { PokemonDetail } from "./PokemonDetail";

export const PokemonList = () => {
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const { data, error, isLoading } = usePokemonData(offset, limit);
  // const { data: pokemonData, error: pokemonError, isLoading: pokemonIsLoading } = usePokemonDataById();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const handlePreviousPage = () => {
    setOffset((prevOffset) => prevOffset - limit);
  };

  const handlePokemonSelect = (pokemonUrl) => {
    console.log(pokemonUrl);
    const pokemonId = pokemonUrl.split("/");
    setSelectedPokemon(pokemonId);
  };

  if (isLoading)
    return (
      <img src={BallLoading} alt="loading" className="w-100 h-100 mx-auto" />
    );

  if (error) return <p className="text-white">Error: {error.message}</p>;

  return (
    <>
      <div className="pt-16 w-full h-auto xl:w-9/12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data?.results.map((pokemon, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => handlePokemonSelect(pokemon.name)}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  pokemon.url.split("/")[6]
                }.png`}
                alt={pokemon.name}
                className="w-32 h-32 mx-auto xl:w-40 xl:h-40"
                loading="lazy"
              />
              <h3 className="text-lg text-center font-semibold capitalize">
                {pokemon.name}
              </h3>
            </div>
          ))}
        </div>
        {selectedPokemon && <PokemonDetail id={"bulbasaur"} />}

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={offset === 0}
            className="px-4 py-2 bg-red-300 hover:bg-red-400 text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={data?.results.length < limit}
            className="px-4 py-2 bg-red-300 hover:bg-red-400 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
