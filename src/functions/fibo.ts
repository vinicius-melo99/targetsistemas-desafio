// desafio 2

export default (numberToCalc: number) => {
  const fibo = [0];

  for (let i = 0; i <= numberToCalc; i++) {
    let sum = 0;

    if (i === 0) {
      fibo.push(1);
      continue;
    }

    sum += fibo[i] + fibo[i - 1];
    fibo.push(sum);
  }

  return fibo;
};
