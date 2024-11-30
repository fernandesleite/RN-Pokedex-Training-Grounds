import { Text, View } from "react-native";
import styles from "./styles";

export interface GenericHeader {
  title: string;
}

export function GenericHeader({ title }: GenericHeader) {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleTextGeneric}>{title}</Text>
      </View>
    </View>
  )
}