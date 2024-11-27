import { StyleSheet } from "react-native";
import { Colors } from "@/utils/constants/Colors";

const styles = StyleSheet.create({
    header: {
      flexDirection: "column"
    },
    title: {
      flexDirection: "row",
      marginBottom: 16
    },
    titleText: {
      fontSize: 24,
      lineHeight: 32,
      marginStart: 16,
      top: -3,
      color: Colors.white,
      fontFamily: "Poppins-Bold"
    },
    searchPokemon: {
      backgroundColor: Colors.white,
      flex: 1,
      borderRadius: 16,
      paddingStart: 48
    },
    searchContainer: {
      flexDirection: "row"
    },
    searchIcon: {
      position: "absolute",
      top: 12,
      start: 16
    },
    filterContainer: {
      marginStart: 16
    },
    filterButton: {
      minHeight: 40,
      minWidth: 40,
      backgroundColor: Colors.white,
      borderRadius: "50%"
    },
    filterIcon: {
      position: "absolute",
      top: 12,
      start: 12
    }
  })

  export default styles;