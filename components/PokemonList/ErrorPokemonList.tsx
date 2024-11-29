import { View, Text } from "react-native"
import styles from "./style"

export const ErrorPokemonList = () => {
  return (
    <View style={styles.genericContainer}>
      <Text style={styles.errorText}>Error</Text>
    </View>
  )
}