import { ComponentType, ReactNode } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";

type WrapperProps = {
    children: ReactNode
    Header: ComponentType
}

export function PokedexLayoutWrapper({children, Header}: WrapperProps) {
  return (
      <SafeAreaView  style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Header/>
          </View>
          <View style={styles.content}>
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}