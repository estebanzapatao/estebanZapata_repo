import axios from 'axios';
import { pokemonList, nameUrl, pokemonDescription } from "../interfaces/index"

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonList = async (page: number) => {
    const resp = await axios.get(`${urlPokemon}?limit=4&offset=${page * 4}`);
    if (resp.status === 200) {
        const data: pokemonList = await resp.data;
        return data.results;
    }
    else throw new Error('No se puedo conectar a la API');
}

export const getPokemonByName = async (name: string) => {
    const resp = await axios.get(`${urlPokemon}/${name}`)
    if (resp.status === 200) {
        const data: pokemonDescription = await resp.data;
        return [data]
    }
    else throw new Error('No se puedo conectar a la API');
}

export const getArrayPokemons = async (pokemons: nameUrl[]) => {
    const promises = pokemons.map(pokemon => axios.get(`${urlPokemon}/${pokemon.name}`));
    const response = await Promise.all(promises);
    return response.map(res => res.data as pokemonDescription)
}