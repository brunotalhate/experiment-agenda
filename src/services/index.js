import { GET_MAPA } from "../constants/routes";
import { ACCESS_KEY, USER_ID } from "../constants/values";
import { Mapa } from "../domain/Mapa";

export const getMapa = async () => {
  return fetch(GET_MAPA(ACCESS_KEY, USER_ID), {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(results => {
      return results.json();
    })
    .then(data => {
      const { retorno } = data;
      if ("mapaAlocacao" in retorno) {
        const mapa = new Mapa(retorno.mapaAlocacao);
        return mapa;
      }
    })
    .catch(err => {
      throw err;
    });
};
