import { StyleSheet } from "react-native";
import { Colors, FontFamily } from "@/utils/constants";

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
  },
  modal: {
    width: '50%',
    alignSelf: "flex-end",
    top: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  radiobutton: {
    fontSize: 16,
    fontFamily: FontFamily.regular
  },
  radioButtonContainer: {
    alignSelf: "flex-start"
  },
  radioGroupContainer: {
    alignSelf: "center"
  }
});

export default styles;