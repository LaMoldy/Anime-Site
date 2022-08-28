import './App.css';
import { ChangeEvent, useCallback, useEffect, useState, FC } from 'react';
import { Mal } from "./services/mal";
import { MALAnime } from "./interfaces/malTypes";
import { AnimeCard } from "./components/anime-card";

const App: FC = () => {
    const [searchedAnime, setSearchedAnime] = useState<MALAnime[]>([]);
    const [input, setInput] = useState("");
    const [searching, setSearching] = useState(false);
    const [animeList, setAnimeList] = useState<MALAnime[]>([]);

    const fetchData = useCallback(async () => {
      const animes = await Mal.getAllAnime();
      setAnimeList(animes);
    }, [setAnimeList]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    function searchAnime() {
        if (input === "") {
          setSearching(false);
        } else {
          setSearching(true)
          Mal.getAnime(input).then(data => {
            setSearchedAnime(data);
          });
        }
    }

    function updateInput(event: ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
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
                        anime={data}
                        key={data.mal_id} />
                )}
            </div>
          }
          {!searching &&
            <div className="flex-row space-evenly anime-list">
                {animeList.map(data =>
                <AnimeCard
                    anime={data}
                    key={data.mal_id} />
                )}
              </div>
          }
        </div>
    );
}

export default App;
