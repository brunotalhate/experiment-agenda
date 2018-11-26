import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles/ListHeader.style";

export const ListHeader = ({ title }) => (
  <View style={styles.titleWrap}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
