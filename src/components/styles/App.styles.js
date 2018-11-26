import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screen
  },
  spinnerWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loadingText: {
    color: colors.darkPrimary,
    marginTop: 8
  }
});
