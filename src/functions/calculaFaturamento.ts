// desafio 3

import data from '../data/dados.json';

export default () => {
  let dias = 0;
  let faturamentoSoma = 0;
  let menorFaturamento = data[0].valor;
  let maiorFaturamento = 0;

  data.forEach((dado) => {
    if (dado.valor !== 0) dias += 1;
    if (dado.valor > maiorFaturamento) maiorFaturamento = dado.valor;

    if (dado.valor < menorFaturamento && dado.valor !== 0) {
      menorFaturamento = dado.valor;
    }

    faturamentoSoma += dado.valor;
  });

  const faturamentoMedia = faturamentoSoma / dias;

  return {
    menorFaturamento,
    maiorFaturamento,
    maiorQueAMedia: data.reduce(
      (acc, { valor }) => (valor > faturamentoMedia ? acc + 1 : acc),
      0
    ),
  };
};
