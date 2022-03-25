import { useEffect, useState } from 'react';

function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch('https:/tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false')
      .then(resposta => resposta.json())
      .then(data => setFilmes(data.results));
  }, []);



  return (
    <div className="App">
      {filmes.map(filme => (
        <div className="filme" key={filme.title}>
          <img src={filme.poster_path} alt={filme.title} />
          <h1>{filme.title}</h1>
          <p>{filme.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
