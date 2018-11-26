import React, { Component } from "react";
import {
  Text,
  ActivityIndicator,
  View,
  SectionList,
  LayoutAnimation,
  UIManager
} from "react-native";

import { getMapa } from "./services";

import { NavBar } from "./components/NavBar";
import { ListHeader } from "./components/ListHeader";
import { ListItem } from "./components/ListItem";
import { PdfRow } from "./components/PdfRow";

import { styles } from "./components/styles/App.styles";

export default class App extends Component {
  state = {
    isLoading: false,
    mapaAlocacao: { nomeMapa: undefined, alocacoes: [] }
  };

  componentDidMount = async () => {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    this.setState({ isLoading: true });
    const mapaAlocacao = await getMapa();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ mapaAlocacao, isLoading: false });
  };

  extractKey = item => item.nome;

  render() {
    const { mapaAlocacao, isLoading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <NavBar title={mapaAlocacao.nomeMapa || "Mapa"} />
          {isLoading ? (
            <View style={styles.spinnerWrap}>
              <ActivityIndicator />
              <Text style={styles.loadingText}>
                Carregando mapa de alocação
              </Text>
            </View>
          ) : (
            mapaAlocacao.alocacoes &&
            mapaAlocacao.alocacoes.length > 0 && (
              <SectionList
                sections={mapaAlocacao.alocacoes}
                renderSectionHeader={({ section: { title } }) => (
                  <ListHeader title={title} />
                )}
                renderItem={({ item }) => (
                  <ListItem nome={item.nome} tarefas={item.tarefas} />
                )}
                renderSectionFooter={() => <View style={{ height: 16 }} />}
                keyExtractor={this.extractKey}
              />
            )
          )}
        </View>
        <PdfRow />
      </View>
    );
  }
}
