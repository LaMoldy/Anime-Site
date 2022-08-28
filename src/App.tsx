import {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Mal} from "./services/mal";
import {MALAnime} from "./interfaces/malTypes";
import {AnimeCard} from "./components/anime-card";
import {defaultMALAnime} from "./services/defaultValues";

function App() {
  const [searchedAnime, setSearchedAnime] = useState<MALAnime[]>([]);
  const [input, setInput] = useState("");
  const [searching, setSearching] = useState(false);
  const [animeList, setAnimeList] = useState<MALAnime[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      loadAllAnime();
      setLoaded(true);
    }
  })

  function searchAnime() {
    if (input === "") {
      setSearching(false);
    } else {
      setSearching(true)
      Mal.getAnime(input).then(data => {
        setSearchedAnime(data);
        console.log("Data:")
        console.log(data);
      });
    }

  }

  function updateInput(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function loadAllAnime() {
    Mal.getAllAnime().then(data => {
      setAnimeList(data);
      console.log(data);
    });
  }

  return (
    <div className={"background"}>
      <div className={"flex-column center"}>
        <h1 className={"page-title"}>Ani-Hub</h1>
        <input
          className={"home-search-bar"}
          onChange={updateInput}
          type="text"
          placeholder="Anime Name"/>
        <button
          onClick={searchAnime}
          className={"search-button"}>
          Search
        </button>
      </div>
      <br></br>
      <br></br>
      {searching &&
          <div className="flex-row space-evenly anime-list">
            {searchedAnime.map(data =>
              <AnimeCard
                image={data.images.jpg.image_url}
                title={data.title_english}
                key={data.mal_id}
              />
            )}
          </div>
      }
      {!searching &&
          <div className="flex-row space-evenly anime-list">
            {animeList.map(data =>
              <AnimeCard
                image={data.images.jpg.image_url}
                title={data.title_english}
                key={data.mal_id}
              />
            )}
          </div>
      }
    </div>
  );
}

export default App;
