import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    borderTopColor: colors.divider,
    borderTopWidth: 1,
    flexDirection: "row"
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.darkPrimary,
    padding: 16
  },
  buttonsRow: {
    flexDirection: "row"
  }
});
