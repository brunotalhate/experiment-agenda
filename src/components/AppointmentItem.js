import React, { PureComponent } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles/AppointmentItem.styles";

export class AppointmentItem extends PureComponent {
  render() {
    const { tarefa } = this.props;
    const { descricaoTarefa } = tarefa;
    const dataTarefa = new Date(tarefa.dataHoraInicio);
    const inicioDaTarefa = tarefa.dataHoraInicioFormatada.split(" ").pop();
    return (
      <View style={styles.wrap}>
        <Text style={styles.task}>
          {inicioDaTarefa} - <Text style={styles.title}>{descricaoTarefa}</Text>
        </Text>
      </View>
    );
  }
}
