import * as Font from 'expo-font';
import { useState } from "react";
import { PokedexLayoutWrapper } from "@/components/Layout";
import { SearchBarHeader } from "@/components/Header";
import { PokemonList } from "@/components/PokemonList";

export default function Index() {

  const [query, setQuery] = useState<string>("");
  const [filterVisibility, setFilterVisibility] = useState(false)

  const [loadedFonts] = Font.useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  })

  if (loadedFonts) {
    return (
      <PokedexLayoutWrapper
        Header={SearchBarHeader}
        headerProps={
          {
            searchQuery: query,
            setSearchQuery: setQuery,
            filterVisibility: filterVisibility,
            setFilterVisibility: setFilterVisibility
          }
        }>
        <PokemonList
          searchBarQuery={query}
          filterVisibility={filterVisibility}
          setFilterVisibility={setFilterVisibility} />
      </PokedexLayoutWrapper>
    );
  }

}
