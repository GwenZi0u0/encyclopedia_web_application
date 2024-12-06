import { usePokemonDataById } from "../api/api";

export const PokemonDetail = (id) => {
  const { data, isLoading, error } = usePokemonDataById(id);
  console.log(data, isLoading, error);

  if (isLoading) return <p>Loading details...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
      <h1 className="text-4xl font-bold">Welcome to the PokemonDetail </h1>
    </div>
  );
};
