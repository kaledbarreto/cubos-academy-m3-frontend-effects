import { useEffect, useState } from 'react';

function App() {
  const [pessoas, setPessoas] = useState([
    { nome: 'Ana' },
    { nome: 'José' },
    { nome: 'Mário' },
    { nome: 'Bianca' },
  ]);
  const [indice, setIndice] = useState(0);

  useEffect(() => { //Efeito é uma ação que ocorre a partir de outra ação.
    if (indice < 0) {
      setIndice(pessoas.length - 1);
    }

    if (indice === pessoas.length) {
      setIndice(0);
    }
  }, [indice, pessoas]); //Ele so vai rodar se o valor de índice ou de pessoas for atulizado, ou seja, se as dependencias forem atualizadas.

  return (
    <div className="App">
      <button onClick={() => setIndice(indice - 1)}>Anterior</button>
      <h1>
        {pessoas.map((pessoa, indiceAtual) => indiceAtual === indice ? pessoa.nome : '')}
      </h1>
      <button onClick={() => setIndice(indice + 1)}>Próximo</button>
    </div>
  );
}

export default App;
