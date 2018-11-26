import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles/Button.styles";

export class Button extends Component {
  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.buttonWrap}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
