import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  titleWrap: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.primary,
    borderBottomColor: colors.divider,
    borderBottomWidth: 1
  },
  title: {
    fontSize: 17,
    color: colors.darkPrimary
  }
});
