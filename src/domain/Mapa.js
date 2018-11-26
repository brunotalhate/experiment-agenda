const setAlocacoes = (periodo, recursos) => {
  const alocacoesPorDia = periodo.map(dia => ({
    title: `${dia.nomeDia} - ${dia.diaFormatado}`,
    data: []
  }));
  recursos.forEach(({ nomeRecurso, tarefasData }) => {
    tarefasData.forEach(({ dia, tarefas }) => {
      const indexDiaDasAlocacoes = periodo.findIndex(
        item => item.diaFormatado === dia.diaFormatado
      );
      if (indexDiaDasAlocacoes !== -1) {
        alocacoesPorDia[indexDiaDasAlocacoes].data.push({
          nome: nomeRecurso,
          tarefas
        });
      }
    });
  });
  return alocacoesPorDia;
};
export class Mapa {
  constructor({ nomeMapa, periodo, recursos }) {
    this.nomeMapa = nomeMapa;
    this.periodo = periodo;
    this.alocacoes = setAlocacoes(periodo, recursos);
  }
}
