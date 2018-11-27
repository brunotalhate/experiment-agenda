import React, { Component } from "react";
import { View } from "react-native";

import Pdf from "react-native-pdf";

import { PDF_URL } from "../constants/values";

import { styles } from "./styles/PdfScreen.styles";

export class PdfScreen extends Component {
  static navigationOptions = { title: "Ramais" };

  render() {
    const source = {
      uri: PDF_URL,
      cache: true
    };

    return (
      <View style={styles.container}>
        <Pdf source={source} style={styles.pdf} />
      </View>
    );
  }
}
