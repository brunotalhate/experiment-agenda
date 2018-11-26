import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderBottomColor: colors.divider,
    borderBottomWidth: 1
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.darkPrimary,
    padding: 16
  }
});
