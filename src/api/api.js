import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import queryKeys from "./queryKeys";

export const fetchPokemon = async (offset, limit) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  return data;
};

export const fetchPokemonById = async (idOrName) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${idOrName}`
  );
  return data;
};

export const usePokemonData = (offset, limit) => {
  return useQuery({
    queryKey: queryKeys.pokemon.list(offset, limit),
    queryFn: () => fetchPokemon(offset, limit),
  });
};

export const usePokemonDataById = (idOrName) => {
  return useQuery({
    queryKey: [queryKeys.pokemon.byId, idOrName],
    queryFn: () => fetchPokemonById(idOrName),
    enabled: !!idOrName,
  });
};

export const fetchDigimon = async (page = 0) => {
  const { data } = await axios.get(
    `https://digi-api.com/api/v1/digimon?page=${page}`
  );
  return data;
};

export const useDigimonData = (page) => {
  return useQuery({
    queryKey: [queryKeys.digimon.list, page],
    queryFn: () => fetchDigimon(page),
  });
};

export const fetchDigimonById = async (id) => {
  const { data } = await axios.get(`https://digi-api.com/api/v1/digimon/${id}`);
  return data;
};

export const useDigimonDataById = (id) => {
  return useQuery({
    quertKey: [queryKeys.digimon.byId, id],
    queryFn: () => fetchDigimonById(id),
  });
};
