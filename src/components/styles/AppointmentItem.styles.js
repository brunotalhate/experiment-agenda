import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  wrap: {
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16
  },
  task: {
    color: colors.darkPrimary
  },
  title: {
    fontWeight: "600"
  }
});
