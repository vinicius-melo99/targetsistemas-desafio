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
    //chama a função que resolve o desafio 1
    const result = sum();
    setChallangeOne(result);

    // chama a função que resolve o desafio 3
    setDadosFaturamento(calculaFaturamento());

    // chama a função que resolve o desafio 4
    setdesempenhoEstado(desempenhoPorEstado());
  }, []);

  const handleInputFibo = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value));
  };

  const handleButtonCalcFibo = () => {
    // chama a função que resolve o desafio 2 e altera o estado fiboResult
    setFiboResult(fibo(number as number));
  };

  const handleInputWord = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const handleButtonReverseWord = () => {
    // chama a função que resolve o desafio 5 e altera o estado reverseWord
    setReversedWord(reverseWord(word));
  };

  return (
    <div className="container">
      <div className="challenge-box">
        <h2>
          Desafio 1: Ao final do processamento qual vai ser o valor de SOMA?
        </h2>
        <p>Soma é: {challengeOne}</p>
      </div>

      <div className="challenge-box">
        <h2>
          Desafio 2: informe um número para calcular a sequencia de fibonacci:
        </h2>
        <input
          id="fibo"
          type="number"
          value={number}
          onChange={handleInputFibo}
        />
        <button disabled={!number} onClick={handleButtonCalcFibo}>
          Calcular
        </button>
        <p>
          Fibonacci é: {'('}
          {fiboResult?.map((num, index) => <span key={index}>{num}, </span>)}
          {')'}
        </p>
        <p>
          {fiboResult?.find((num) => num === number)
            ? `${number} está na sequencia`
            : `${number} nao esta na sequencia`}
        </p>
      </div>

      <div className="challenge-box">
        <h2>Desafio 3: Faturamento diário de uma distribuidora</h2>
        <p>
          O menor valor de faturamento ocorrido em um dia do mês:{' '}
          {`R$ ${dadosFaturamento?.menorFaturamento.toFixed(2)}`}
          <div />O maior valor de faturamento ocorrido em um dia do mês:{' '}
          {`R$ ${dadosFaturamento?.maiorFaturamento.toFixed(2)}`}
          <div />
          Número de dias no mês em que ovalor de faturamento diário foi superior
          à média mensal.: {dadosFaturamento?.maiorQueAMedia}
        </p>
      </div>

      <div className="challenge-box">
        <h2>Desafio 4: Desempenho por estado:</h2>
        {desempenhoEstado?.map((state, index) => (
          <div key={index}>
            <h4>Estado: {state.stateName}</h4>
            <h4>Desempenho: {state.performance.toFixed(2)} %</h4>
            <br />
          </div>
        ))}
      </div>

      <div className="challenge-box">
        <h2>Desafio 5: Inverte a palavra:</h2>
        <input id="word" type="text" value={word} onChange={handleInputWord} />
        <button onClick={handleButtonReverseWord}>Inverter Palavra</button>
        <h3>{reversedWord && `A palavra invertida é: ${reversedWord}`}</h3>
      </div>
    </div>
  );
}

export default App;
