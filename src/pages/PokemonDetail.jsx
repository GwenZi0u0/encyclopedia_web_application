import { useParams } from "react-router-dom";
import { usePokemonDataById } from "../api/api";
import { DetailBar } from "../components/DetailBar";

export const PokemonDetail = () => {
  const { name } = useParams();
  const { data, isLoading, error } = usePokemonDataById(name);

  if (isLoading) return <p className="text-white">Loading details...</p>;
  if (error) return <p className="text-white">Error: {error.message}</p>;

  if (!data) return <p>No data found.</p>;

  const maxStats = {
    hp: 300,
    attack: 300,
    defense: 300,
    speed: 300,
    exp: 1000,
  };

  return (
    <>
      <DetailBar />
      <div className="flex flex-col items-center w-full h-screen sm:w-full">
        <div className="flex justify-center items-center bg-red-300 w-full h-2/5 rounded-bl-[50px] rounded-br-[50px]">
          <img
            className="rounded-lg w-48 h-48 sm:w-52 sm:h-52 md:w-60 md:h-60 mt-5"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
            alt={data.name}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-8/12 lg:w-9/12 xl:w-9/12">
          <h1 className="text-center text-2xl md:text-3xl font-bold text-white pt-5 md:py-5">
            {data.name}
          </h1>
          <ul className="list-disc list-inside text-white text-center p-2 ">
            {data.types.map((type) => (
              <li
                key={type.type.name}
                className="bg-blue-500 text-white rounded-3xl px-4 py-1 inline-block w-24 sm:w-28 mx-2"
              >
                {type.type.name}
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center mt-2 px-16 w-full gap-16">
            <div className="text-center">
              <div className="text-lg lg:text-xl xl:text-2xl font-bold text-white">
                {data.weight / 10} KG
              </div>
              <div className="text-sm lg:text-lg xl:text-xl text-gray-400 ">
                Weight
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg lg:text-xl xl:text-2xl font-bold text-white">
                {data.height / 10} M
              </div>
              <div className="text-sm lg:text-lg xl:text-xl text-gray-400">
                Height
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full px-10 py-4 xl:w-4/5">
            <h2 className="text-xl font-semibold text-white text-center">
              Base Stats
            </h2>
            <ul className="flex flex-col text-white gap-3 pt-2">
              <li className="flex flex-row items-center">
                HP
                <div className="mx-2 bg-white w-full h-3 rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${
                        (data.stats[0].base_stat / maxStats.hp) * 100
                      }%`,
                      backgroundColor: "#D63947",
                    }}
                  />
                  <p className="text-sm text-stone-400">
                    {data.stats[0].base_stat}/{maxStats.hp}
                  </p>
                </div>
              </li>
              <li className="flex flex-row items-center">
                ATK
                <div className="mx-2 bg-white w-full h-3 rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${
                        (data.stats[1].base_stat / maxStats.attack) * 100
                      }%`,
                      backgroundColor: "#FDA724",
                    }}
                  />
                  <p className="text-sm text-stone-400">
                    {data.stats[1].base_stat}/{maxStats.attack}
                  </p>
                </div>
              </li>
              <li className="flex flex-row items-center">
                DEF
                <div className="mx-2 bg-white w-full h-3 rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${
                        (data.stats[2].base_stat / maxStats.defense) * 100
                      }%`,
                      backgroundColor: "#0094EB",
                    }}
                  />
                  <p className="text-sm text-stone-400">
                    {data.stats[2].base_stat}/{maxStats.defense}
                  </p>
                </div>
              </li>
              <li className="flex flex-row items-center">
                SPD
                <div className="mx-2 bg-white w-full h-3 rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${
                        (data.stats[5].base_stat / maxStats.speed) * 100
                      }%`,
                      backgroundColor: "#8DB0C7",
                    }}
                  />
                  <p className="text-sm text-stone-400">
                    {data.stats[5].base_stat}/{maxStats.speed}
                  </p>
                </div>
              </li>
              <li className="flex flex-row items-center">
                EXP
                <div className="mx-2 bg-white w-full h-3 rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(data.base_experience / maxStats.exp) * 100}%`,
                      backgroundColor: "green",
                    }}
                  />
                  <p className="text-sm text-stone-400">
                    {data.base_experience}/{maxStats.exp}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
