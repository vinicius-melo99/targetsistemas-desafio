import { ChangeEvent, useEffect, useState } from 'react';
import sum from './functions/sum';
import fibo from './functions/fibo';
import calculaFaturamento from './functions/calculaFaturamento';
import desempenhoPorEstado from './functions/desempenhoPorEstado';
import reverseWord from './functions/reverseWord';

function App() {
  const [challengeOne, setChallangeOne] = useState<number>();
  const [number, setNumber] = useState<number>(0);
  const [fiboResult, setFiboResult] = useState<number[]>();
  const [dadosFaturamento, setDadosFaturamento] = useState<{
    menorFaturamento: number;
    maiorFaturamento: number;
    maiorQueAMedia: number;
  }>();

  const [word, setWord] = useState<string>('');

  const [reversedWord, setReversedWord] = useState<string>('');

  const [desempenhoEstado, setdesempenhoEstado] = useState<
    {
      stateName: string;
      performance: number;
    }[]
  >();

  useEffect(() => {
    const result = sum();
    setChallangeOne(result);

    setDadosFaturamento(calculaFaturamento());

    setdesempenhoEstado(desempenhoPorEstado());
  }, []);

  const handleInputFibo = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value));
  };

  const handleButtonCalcFibo = () => {
    setFiboResult(fibo(number as number));
  };

  const handleInputWord = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const handleButtonReverseWord = () => {
    setReversedWord(reverseWord(word));
  };

  return (
    <>
      <div className="challenge-box">
        <h1>
          Desafio 1: Ao final do processamento qual vai ser o valor de SOMA?
        </h1>
        <h2>Soma é: {challengeOne}</h2>
      </div>

      <div className="challenge-box">
        <h1>
          Desafio 2: informe um número para calcular a sequencia de fibonacci:
        </h1>
        <input
          id="fibo"
          type="number"
          value={number}
          onChange={handleInputFibo}
        />
        <button disabled={!number} onClick={handleButtonCalcFibo}>
          Calcular
        </button>
        <h2>
          Fibonacci é: {'('}
          {fiboResult?.map((num, index) => <span key={index}>{num}, </span>)}
          {')'}
        </h2>
        <p>
          {fiboResult?.find((num) => num === number)
            ? `${number} está na sequencia`
            : `${number} nao esta na sequencia`}
        </p>
      </div>

      <div className="challenge-box">
        <h1>Desafio 3: Faturamento diário de uma distribuidora</h1>
        <h3>
          O menor valor de faturamento ocorrido em um dia do mês:{' '}
          {`R$ ${dadosFaturamento?.menorFaturamento.toFixed(2)}`}
          <div />O maior valor de faturamento ocorrido em um dia do mês:{' '}
          {`R$ ${dadosFaturamento?.maiorFaturamento.toFixed(2)}`}
          <div />
          Número de dias no mês em que ovalor de faturamento diário foi superior
          à média mensal.: {dadosFaturamento?.maiorQueAMedia}
        </h3>
      </div>

      <div className="challenge-box">
        <h1>Desafio 4: Desempenho por estado:</h1>
        {desempenhoEstado?.map((state, index) => (
          <div key={index}>
            <h4>Estado: {state.stateName}</h4>
            <h4>Desempenho: {state.performance.toFixed(2)} %</h4>
            <br />
          </div>
        ))}
      </div>

      <div className="challenge-box">
        <h1>Desafio 5: Inverte a palavra:</h1>
        <input id="word" type="text" value={word} onChange={handleInputWord} />
        <button onClick={handleButtonReverseWord}>Inverter Palavra</button>
        <h3>{reversedWord && `A palavra invertida é: ${reversedWord}`}</h3>
      </div>
    </>
  );
}

export default App;
