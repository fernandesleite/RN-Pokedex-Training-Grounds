import { Text, View, SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function Index() {
  return (
      <SafeAreaView  style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.topbar}>
            <Text>Testing</Text>
          </View>
          <View style={styles.content}>
          <Text>Testing</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DC0A2D",
    padding: 4
  },
  topbar: {
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 24,
    paddingTop: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 20,
    backgroundColor: "#fff"
  }
})
