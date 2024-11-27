import {api} from "./Api";

export function getPokemonList() {
    const instance = api();
    return instance.get('pokemon?limit=100000&offset=0');
}