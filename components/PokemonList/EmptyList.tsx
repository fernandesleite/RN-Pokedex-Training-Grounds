import { View, Text } from "react-native"
import styles from "./style"

export const EmptyList = () => {
  return (
    <View style={styles.genericContainer}>
      <Text style={styles.emptyText}>No pokemons found!</Text>
    </View>
  )
}