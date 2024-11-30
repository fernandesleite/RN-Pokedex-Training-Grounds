import { StyleSheet } from "react-native";
import { Colors } from "@/utils/constants/Colors";

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.redpokedex,
      padding: 4,
      borderRadius: 20,
    },
    header: {
      paddingStart: 16,
      paddingEnd: 16,
      paddingBottom: 16,
      paddingTop: 16,
    },
    content: {
      paddingVertical: 24,
      borderRadius: 20,
      backgroundColor: Colors.white
    }
  })

  export default styles;