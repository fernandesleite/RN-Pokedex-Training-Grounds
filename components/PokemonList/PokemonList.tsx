import { View, FlatList } from "react-native";
import styles from "./style";
import { PokemonCard } from "../PokemonCard";

export function PokemonList() {
  const logoImg = require("../../assets/images/adaptive-icon.png")
  
  const pokemonList = [
    {name: "Charmander_1", id: "001", image: logoImg},
    {name: "Charmander_2", id: "002", image: logoImg},
    {name: "Charmander_3", id: "003", image: logoImg},
    {name: "Charmander_4", id: "004", image: logoImg},
    {name: "Charmander_5", id: "005", image: logoImg},
    {name: "Charmander_6", id: "006", image: logoImg},
    {name: "Charmander_7", id: "007", image: logoImg},
    
  ]

  const itemSeparator = () => {
    return (
      <View style={styles.itemSeparator}/>
    )
  }

  return(
    <View style={styles.list}>
      <FlatList 
        contentContainerStyle={styles.list}
        data={pokemonList}
        numColumns={3}
        columnWrapperStyle={styles.row}
        ItemSeparatorComponent={itemSeparator}
        renderItem={({item}) => {
          return (
            <PokemonCard name={item.name} id={item.id} image={item.image}/>
          )
        }}
        />
    </View>
  )
}