import React, { PureComponent } from "react";
import { Text, View, LayoutAnimation } from "react-native";

import { AppointmentItem } from "./AppointmentItem";
import { Button } from "./Button";

import { colors } from "../constants/colors";

import { styles } from "./styles/ListItems.styles";

export class ListItem extends PureComponent {
  state = {
    showContent: true
  };

  toggleContentVisibility = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState(({ showContent }) => ({ showContent: !showContent }));
  };

  render() {
    const { nome, tarefas = [] } = this.props;
    const { showContent } = this.state;
    return (
      <View style={styles.itemWrap}>
        <View style={styles.headerWrap}>
          <Text style={styles.name}>{nome}</Text>
          {tarefas.length > 0 && (
            <Button
              color={colors.accent}
              onPress={this.toggleContentVisibility}
              title={showContent ? "Esconder" : "Ver"}
            />
          )}
        </View>
        {showContent && tarefas.length > 0 && (
          <View style={styles.taskListWrap}>
            {tarefas.map(tarefa => (
              <AppointmentItem
                key={`${tarefa.idTarefa} ${tarefa.dataHoraInicioFormatada}`}
                tarefa={tarefa}
              />
            ))}
          </View>
        )}
      </View>
    );
  }
}
