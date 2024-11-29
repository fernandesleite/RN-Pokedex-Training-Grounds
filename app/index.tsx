import { Text, View } from "react-native";
import * as Font from 'expo-font';
import { useState } from "react";
import { PokedexLayoutWrapper } from "@/components/Layout";
import { SearchBarHeader } from "@/components/Header";
import { PokemonList } from "@/components/PokemonList";

const Content = () => {
  return (
    <View>
      
    </View>
  )
}

export default function Index() {

  const [query, setQuery] = useState<string>("");

  const [loadedFonts] = Font.useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  })

  if (loadedFonts) {
    return (
      <PokedexLayoutWrapper Header={SearchBarHeader} headerProps={{searchQuery: query, setSearchQuery: setQuery}}>
          <PokemonList searchBarQuery={query}/>
      </PokedexLayoutWrapper>
    );
  }

}
