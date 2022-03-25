import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [input, setInput] = useState('');
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    if (input) {
      fetch(`https://restcountries.com/v3.1/name/${input}`)
        .then(resposta => resposta.json())
        .then(data => setPaises(data));
    }
  }, [input]);

  console.log(paises);

  return (
    <div className="App">
      <h1>Search de Países</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      {paises.map(pais => (
        <div className="pais" key={pais.name.common}>
          <img src={pais.flags.png} alt={pais.name.common} />
          <h2>{pais.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
