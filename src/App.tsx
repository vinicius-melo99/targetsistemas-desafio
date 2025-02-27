import { useEffect, useState } from 'react';
import sum from './functions/sum';

function App() {
  const [challengeOne, setChallangeOne] = useState<number>();

  useEffect(() => {
    const result = sum();
    setChallangeOne(result);
  }, []);

  return (
    <>
      <div>
        <h1>
          Desafio 1: Ao final do processamento qual vai ser o valor de SOMA?
        </h1>
        <h2>Soma é: {challengeOne}</h2>
      </div>
    </>
  );
}

export default App;
