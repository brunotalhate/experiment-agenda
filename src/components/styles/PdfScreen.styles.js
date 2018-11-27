import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width
  }
});
