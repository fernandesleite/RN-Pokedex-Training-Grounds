import { View, FlatList, Text, ActivityIndicator } from "react-native";
import styles from "./style";
import { PokemonCard } from "../PokemonCard";
import { getPokemonList } from "@/services/ListService"
import { useAxiosRequest } from "@/services/useAxiosRequest"
import { capitalizeString } from "@/utils/StringUtils";
import { EmptyList, ErrorPokemonList, ItemSeparator } from "./";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

interface PokemonListProps {
  searchBarQuery: string; 
}

export function PokemonList({ searchBarQuery }: PokemonListProps) {
  interface PokemonListResponse {
    count: number,
    next: string,
    previous: string,
    results: PokemonResponse[]
  }

  interface PokemonResponse {
    name: string,
    url: string
  }

  interface PokemonWithId extends PokemonResponse {
    id: number
  }

  const {data, error, loading } = useAxiosRequest<PokemonListResponse>({
    request: getPokemonList
  });

  const pokemonListWithId = (pokemonList: PokemonResponse[] | undefined): PokemonWithId[] | null => { 
    if (pokemonList == undefined) {
      return null;
    }
    return pokemonList.map((pokemon) => {
      pokemon.name.toUpperCase();
      const parsedId = parseIdFromUrl(pokemon.url);
      return { ...pokemon, id: parsedId, name: capitalizeString(pokemon.name)};   
})}

function parseIdFromUrl(url: string): number {
  return parseInt(url.split("https://pokeapi.co/api/v2/pokemon/").pop() || '0');
}

function setSpriteUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

function processData() {
  if(searchBarQuery != null) {
    const filteredData = data?.results.filter((item) => item.name.includes(searchBarQuery))
    return pokemonListWithId(filteredData)
  } else{
    return pokemonListWithId(data?.results)
  }
  
}
  if (loading) {
      return <LoadingIcon/>
  } else if (error) {
      return <ErrorPokemonList/>
  }else {
    return(
      <View style={styles.list}>
        <FlatList 
          contentContainerStyle={styles.list}
          data={processData()}
          numColumns={3}
          columnWrapperStyle={styles.row}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={EmptyList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <PokemonCard name={item.name} id={item.id} image={setSpriteUrl(item.id)}/>
            )
          }}
          />
      </View>
    )
  }
}