import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  taskListWrap: {
    marginBottom: 12
  },
  itemWrap: {
    backgroundColor: colors.surface,
    borderBottomColor: colors.divider,
    borderBottomWidth: 1
  },
  headerWrap: {
    flexDirection: "row",
    alignItems: "center"
  },
  name: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 16,
    paddingVertical: 8,
    color: colors.darkPrimary,
    fontWeight: "600"
  }
});
