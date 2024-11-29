import { StyleSheet } from "react-native";
import { Colors } from "@/utils/constants/Colors";

const styles = StyleSheet.create({
  cardContainer: {
    minHeight: "auto",
    backgroundColor: Colors.white,
    maxWidth: 104,
    padding: 8,
    alignItems: "center",
    marginHorizontal: 12,
    borderRadius: 8
  },
  cardShadow: {
    shadowColor: Colors.grayshadow,
    shadowOffset: {
      width: 8,
      height: 8
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 8,
  },
  pokemonId: {
    fontFamily: "Poppins-Regular",
    fontSize: 8,
    color: Colors.lightgray,
    alignSelf: "flex-end"
  },
  pokemonImage: {
    width: 72,
    height: 72,
    aspectRatio: 1,
    marginBottom: 8,
    marginHorizontal: 8
  },
  pokemonName: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: Colors.gray
  }
});

export default styles;