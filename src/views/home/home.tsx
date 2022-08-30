import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { ROUTES } from "../../App";
import { AnimeCard } from "../../components/anime-card";
import { Hamburger } from "../../components/hamburger/hamburger";
import { Mal } from "../../services/mal";
import { MALAnime } from "../../utils/malTypes";
import "./home.css";

export const Home: FC = () => {
    const [searchedAnime, setSearchedAnime] = useState<MALAnime[]>([]);
    const [input, setInput] = useState("");
    const [pageCount, setPageCount] = useState(1);
    const [searching, setSearching] = useState(false);
    const [animeList, setAnimeList] = useState<MALAnime[]>([]);

    const fetchData = useCallback(async () => {
        const animes = await Mal.getAllAnime(pageCount);
        setAnimeList(animes);
    }, [pageCount]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    function searchAnime() {
        if (input === "") {
            setSearching(false);
        } else {
            setSearching(true);
            Mal.getAnime(input).then((data) => {
                setSearchedAnime(data);
            });
        }
    }

    function updateInput(event: ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    function increasePageCount() {
        if (pageCount !== 25) {
            setPageCount(pageCount + 1);
        }
    }

    function decreasePageCount() {
        if (pageCount !== 1) {
            setPageCount(pageCount - 1);
        }
    }

    return (
        <div>
            <div>
                <Hamburger />
                <div className={"flex-column center"}>
                    <h1 className={"page-title"}>Ani-Hub</h1>
                    <input
                        className={"home-search-bar"}
                        onChange={updateInput}
                        type="text"
                        placeholder="Anime Name"
                    />
                    <button onClick={searchAnime} className={"search-button"}>
                        Search
                    </button>
                </div>
                <br></br>
                <br></br>
                {searching && (
                    <div className={"flex-row space-evenly anime-list"}>
                        {
                            searchedAnime.map((data) => (
                                <AnimeCard 
                                    image={data.images.jpg.image_url} 
                                    key={data.mal_id} 
                                    titleEnglish={data.title_english}
                                    titleJapanese={data.title_japanese}
                                    malId={data.mal_id} />
                            ))
                        }
                    </div>
                )}
                {!searching && (
                    <div className={"flex-row space-evenly anime-list"}>
                        {
                            animeList.map((data) => (
                                <AnimeCard 
                                    image={data.images.jpg.image_url} 
                                    key={data.mal_id} 
                                    titleEnglish={data.title_english}
                                    titleJapanese={data.title_japanese}
                                    malId={data.mal_id} />
                            ))
                        }
                    </div>
                )}
                <br></br>
                <div className={"flex-row space-evenly"}>
                    <button
                        className={"page-button margin-right"}
                        onClick={decreasePageCount}>
                        Previous
                    </button>
                    <button
                        className={"page-button"}
                        onClick={increasePageCount}>
                        Next
                    </button>
                </div>
                <br></br>
                <br></br>
            </div>
        </div>
    );
};
