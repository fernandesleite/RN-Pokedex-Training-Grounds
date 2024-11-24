import { Text, View } from "react-native";
import * as Font from 'expo-font';
import { PokedexLayoutWrapper } from "@/components/Layout";
import { SearchBarHeader } from "@/components/Header";
import { PokemonCard } from "@/components/PokemonCard";

const Content = () => {
  const logoImg = require("../assets/images/adaptive-icon.png")
  return (
    <View>
      <PokemonCard name="Charmander"id="#001" image={logoImg}/>
    </View>
  )
}

export default function Index() {

  const [loadedFonts] = Font.useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  })

  if (loadedFonts) {
    return (
      <PokedexLayoutWrapper Header={SearchBarHeader}>
          <Content/>
      </PokedexLayoutWrapper>
    );
  }

}
