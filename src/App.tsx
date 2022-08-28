import { useState } from 'react';
import './App.css';
import {Mal} from "./services/mal";
import {MALAnime} from "./interfaces/malTypes";
import {AnimeCard} from "./components/anime-card";
import {defaultMALAnime} from "./services/defaultValues";

function App() {
  const [anime, setAnime] = useState<MALAnime>(defaultMALAnime);
  const [input, setInput] = useState("");

  function onSearch() {
    Mal.getAnime(input).then(data => {
      setAnime(data);
      console.log(data);
    });
  }

  return (
    <div>
      <h1>Ani-Hub</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Anime name" />
      <button onClick={onSearch}>
        Search
      </button>
      { anime !== null &&
        <>
          <h1>{anime.title_japanese}</h1>
          <AnimeCard image={anime.images.jpg.image_url} title={anime.title_english} />
        </>
      }
    </div>
  );
}

export default App;
