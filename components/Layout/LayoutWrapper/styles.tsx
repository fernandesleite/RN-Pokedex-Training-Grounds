import { StyleSheet } from "react-native";
import { Colors } from "@/utils/constants/Colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.redpokedex,
      padding: 4
    },
    header: {
      paddingStart: 16,
      paddingEnd: 16,
      paddingBottom: 24,
      paddingTop: 16,
    },
    content: {
      flex: 1,
      paddingVertical: 24,
      borderRadius: 20,
      backgroundColor: Colors.white
    }
  })

  export default styles;