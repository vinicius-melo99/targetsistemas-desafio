// desafio 4

const states = [
  {
    state: 'SP',
    value: 67836.43,
  },
  {
    state: 'RJ',
    value: 36678.66,
  },
  {
    state: 'MG',
    value: 29229.88,
  },
  {
    state: 'ES',
    value: 27165.48,
  },
  {
    state: 'Outros',
    value: 19849.53,
  },
];

export default () => {
  let sumStates = 0;

  states.forEach((state) => {
    sumStates += state.value;
  });

  const desempenho = states.map((state) => ({
    stateName: state.state,
    performance: (state.value * 100) / sumStates,
  }));

  return desempenho;
};
