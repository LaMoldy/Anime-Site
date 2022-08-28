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
    <div className={"background"}>
      <div className={"flex-row center"}>
        <h1 className={"page-title"}>Ani-Hub</h1>
        <input
          className={"home-search-bar"}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Anime Name" />
        <button
          onClick={onSearch}
          className={"search-button"}>
          Search
        </button>
      </div>
      { (anime.title_english !== null && anime.title_english !== "") &&
        <>
          <AnimeCard image={anime.images.jpg.image_url} title={anime.title_english} />
        </>
      }
    </div>
  );
}

export default App;
