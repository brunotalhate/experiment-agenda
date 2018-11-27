import React, { Component } from "react";
import {
  Linking,
  ScrollView,
  Share,
  Text,
  View,
  Platform,
  PermissionsAndroid,
  Alert
} from "react-native";

import RNFetchBlob from "rn-fetch-blob";

import { Button } from "./Button";

import { PDF_URL } from "../constants/values";

import { styles } from "./styles/PdfRow.styles";

export class PdfRow extends Component {
  state = {
    hasDownloadPermission: false
  };

  componentDidMount = () => {
    this.requestExternalStorage();
  };

  requestExternalStorage = async withMessage => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Acesso ao armazenamento",
          message:
            "É neccesário acesso ao armazenamento do dispositivo para salvar aquivos"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({ hasDownloadPermission: true });
        return true;
      } else if (
        granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN &&
        withMessage
      ) {
        Alert.alert(
          "Armazenamento não autorizado",
          "Você não autorizou acesso ao armazenamento do dispositivo"
        );
        return false;
      }
    } catch (err) {
      console.warn(err);
      throw false;
    }
  };

  onDownloadFile = async () => {
    if (!this.state.hasDownloadPermission) {
      await this.requestExternalStorage(true);
    }
    if (this.state.hasDownloadPermission) {
      const { config, fs } = RNFetchBlob;
      let DownloadDir = fs.dirs.DownloadDir;
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: DownloadDir + "/ramais.pdf",
          description: "Baixando ramais"
        }
      };
      config(options).fetch("GET", PDF_URL);
    }
  };

  onOpenFile = () => Linking.openURL(PDF_URL);

  onShare = async post => {
    try {
      Share.share(
        {
          ...Platform.select({
            ios: { message: "Confira o pdf com os ramais", url: PDF_URL },
            android: { message: `Confira o pdf com os ramais ${PDF_URL}` }
          }),
          title: "Compartilhando ramais"
        },
        {
          ...Platform.select({
            ios: { subject: "Ramais" },
            android: { dialogTitle: "Compartilhar" }
          })
        }
      );
    } catch (error) {
      Alert.alert(
        "Algo de errado não está certo",
        "Não foi possível compartilhar este arquivo, desculpe",
        [{ text: "OK", onPress: () => {} }],
        { cancelable: true }
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <Text style={styles.title}>Ramais</Text>
          <View style={styles.buttonsRow}>
            {Platform.OS === "android" && (
              <Button title="Baixar" onPress={this.onDownloadFile} />
            )}
            <Button title="Abrir" onPress={this.props.onViewPdfPress} />
            <Button title="Compartilhar" onPress={this.onShare} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
