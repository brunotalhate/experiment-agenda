import React from "react";
import { Text, SafeAreaView } from "react-native";

import { styles } from "./styles/NavBar.styles";

export const NavBar = ({ title }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </SafeAreaView>
);
