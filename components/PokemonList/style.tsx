import { StyleSheet } from "react-native";
import { FontFamily } from "@/utils/constants";

const styles = StyleSheet.create({
  list: {
    alignSelf: "center"
  },
  itemSeparator: {
    height: 8,
  },
  row: {
    justifyContent: "flex-start"
  },
  errorText: {
    fontFamily: FontFamily.bold
  },
  emptyText: {
    fontFamily: FontFamily.bold
  },
  genericContainer: {
    alignSelf: "center",
    padding: 20
  }
});

export default styles;