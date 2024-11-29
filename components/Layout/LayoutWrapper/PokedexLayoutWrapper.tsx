import { ComponentType, ReactNode } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";

type WrapperProps<T = {}> = {
    children: ReactNode
    Header: ComponentType<any>
    headerProps?: T
}

export function PokedexLayoutWrapper({children, Header, headerProps }: WrapperProps) {
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            {<Header {...headerProps}/>}
          </View>
          <View style={styles.content}>
            {children}
          </View>
      </SafeAreaView>
  );
}