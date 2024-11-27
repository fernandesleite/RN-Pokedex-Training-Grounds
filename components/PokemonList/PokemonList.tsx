import { View, FlatList, Text, ActivityIndicator } from "react-native";
import styles from "./style";
import { PokemonCard } from "../PokemonCard";
import { getPokemonList } from "@/services/ListService"
import { useAxiosRequest } from "@/services/useAxiosRequest"
import { capitalizeString } from "@/utils/StringUtils";
import { FontFamily, Colors } from "@/utils/constants";
import { EmptyList, ErrorPokemonList, ItemSeparator } from "./";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

export function PokemonList() {
  const logoImg = require("../../assets/images/adaptive-icon.png")

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

  if (loading) {
      return <LoadingIcon/>
  } else if (error) {
      return <ErrorPokemonList/>
  }else {
    return(
      <View style={styles.list}>
        <FlatList 
          contentContainerStyle={styles.list}
          data={pokemonListWithId(data?.results)}
          numColumns={3}
          columnWrapperStyle={styles.row}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={EmptyList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <PokemonCard name={item.name} id={item.id} image={logoImg}/>
            )
          }}
          />
      </View>
    )
  }
}