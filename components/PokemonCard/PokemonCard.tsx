import { View, Image, Text } from "react-native"
import styles from "./styles"

type PokemonCardProps = {
  id: number,
  name: string,
  image: string
}

export function PokemonCard({ id, name, image }: PokemonCardProps) {
  return (
    <View style={[styles.cardContainer, styles.cardShadow]} >
      <Text style={styles.pokemonId}>{`#${id}`}</Text>
      <Image src={image} style={styles.pokemonImage} />
      <Text style={styles.pokemonName}>{name}</Text>
    </View>
  )
}