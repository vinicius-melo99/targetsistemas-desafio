// desafio 1

export default () => {
  const INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
    K += 1;
    SOMA += K;
  }

  return SOMA;
};
