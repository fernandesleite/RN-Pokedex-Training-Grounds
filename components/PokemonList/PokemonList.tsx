import { View, FlatList } from "react-native";
import styles from "./style";
import { PokemonCard } from "../PokemonCard";
import { getPokemonList } from "@/services/ListService"
import { useAxiosRequest } from "@/services/useAxiosRequest"
import { capitalizeString } from "@/utils/StringUtils";
import { EmptyList, ErrorPokemonList, ItemSeparator } from "./";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { useState } from "react";
import { SortingOptionsModal } from "./SortingOptionsModal";

interface PokemonListProps {
  searchBarQuery: string;
  filterVisibility: boolean;
  setFilterVisibility: (filterVisibility: boolean) => void;
}
export function PokemonList({
  searchBarQuery,
  filterVisibility,
  setFilterVisibility }: PokemonListProps) {

  const [selectedSort, setSelectedSort] = useState<string | undefined>();

  enum SortingType {
    Id = "1",
    Name = "2"
  }

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

  const { data, error, loading } = useAxiosRequest<PokemonListResponse>({
    request: getPokemonList
  });

  const pokemonListWithId = (pokemonList: PokemonResponse[] | undefined) => {
    if (pokemonList == undefined) {
      return null;
    }
    return pokemonList.map((pokemon) => {
      pokemon.name.toUpperCase();
      const parsedId = parseIdFromUrl(pokemon.url);
      return { ...pokemon, id: parsedId, name: capitalizeString(pokemon.name) };
    })
  }

  const sortedList = (pokemonList: PokemonWithId[] | null) => {
    if (pokemonList == null) {
      return null;
    }
    return pokemonList.sort((a, b) => {
      if (selectedSort == SortingType.Id) {
        return a.id - b.id;
      } else {
        return a.name.localeCompare(b.name);
      }
    })
  }

  function parseIdFromUrl(url: string): number {
    return parseInt(url.split("https://pokeapi.co/api/v2/pokemon/").pop() || '0');
  }

  function setSpriteUrl(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }

  function processData() {
    if (searchBarQuery != null && searchBarQuery != '') {
      const filteredData = data?.results.filter((item) => item.name.includes(searchBarQuery))
      const dataWithId = pokemonListWithId(filteredData)
      return sortedList(dataWithId)
    } else {
      const dataWithId = pokemonListWithId(data?.results)
      return sortedList(dataWithId)
    }

  }
  if (loading) {
    return <LoadingIcon />
  } else if (error) {
    return <ErrorPokemonList />
  } else {
    return (
      <View style={styles.list}>
        <SortingOptionsModal
          filterVisibility={filterVisibility}
          setFilterVisibility={setFilterVisibility}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort} />
        <FlatList
          contentContainerStyle={styles.list}
          data={processData()}
          numColumns={3}
          columnWrapperStyle={styles.row}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={EmptyList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <PokemonCard
                name={item.name}
                id={item.id}
                image={setSpriteUrl(item.id)} />
            )
          }} />
      </View>
    )
  }
}