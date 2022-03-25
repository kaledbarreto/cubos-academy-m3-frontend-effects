import { useEffect, useState } from 'react';

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState();

  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(dados => setEndereco(dados));
    }
  })

  return (
    <div className="App">
      <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
      {endereco && (
        <>
          <h1>{endereco.logradouro}, {endereco.bairro}</h1>
          <h2>{endereco.localidade} - {endereco.uf}</h2>
        </>
      )}
    </div>
  );
}

export default App;
