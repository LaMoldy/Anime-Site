import './anime.css';

import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ROUTETO } from '../../App';
import { Hamburger } from '../../components/hamburger/hamburger';
import { defaultMALAnime } from '../../services/defaultValues';
import { Mal } from '../../services/mal';
import { MALAnime } from '../../utils/malTypes';

interface storageData {
    id: string[]
}

export const AnimePage: FC = () => {
    const [anime, setAnime] = useState<MALAnime>(defaultMALAnime);
    const [isInWatchlist, setIsInWatchlist] = useState(false);

    const {id} = useParams();

    const checkWatchlist = useCallback(() => {
       let watchlist: storageData = JSON.parse(localStorage.getItem("id")!);
       watchlist.id.forEach(value => {
            if (value === id!) {
                setIsInWatchlist(true);
            }
       })
    }, [setIsInWatchlist, id]);

    const getAnime = useCallback(async () => {
        if (typeof id === "string") {
            const res = await Mal.getAnimeById(Number.parseInt(id));
            setAnime(res);

        }
    }, [setAnime, id]);

    useEffect(() => {
        getAnime()
        checkWatchlist();
    }, [getAnime, checkWatchlist]);

    function addWatchlist() {
        let array: storageData = {
            id: []
        };

        array.id.push(id!)
        localStorage.setItem("id", JSON.stringify(array));

        setIsInWatchlist(true);
    }

    function removeFromWatchlist() {
        let newList: storageData = JSON.parse(localStorage.getItem("id")!);
        newList.id = newList.id.filter(value => value !== id);
        
        localStorage.setItem("id", JSON.stringify(newList));

        setIsInWatchlist(false);
    }

    return (
        <div>
            <div className="titleBar flex-row">
                <div>
                    <a href={anime.url} target="_blank" rel="noopener noreferrer" >
                        <h3 className="animeTitle">{anime.title_english === null ? anime.title_japanese : anime.title_english} ({anime.score}/10)</h3>
                    </a>
                    <h5>Episodes: {anime.episodes} ({anime.duration})</h5>
                </div>
                <Hamburger />
            </div>
            <div className="flex-row flex-center" id="anime-content">
                <img
                    className="animeImage"
                    alt="Poster of The Anime"
                    src={anime?.images.jpg.image_url} />
                <div className="anime-syn">
                    <p>{anime?.synopsis}</p>
                </div>
            </div>
            <div className="page-buttons">
                {!isInWatchlist &&
                    <a className="btn" onClick={addWatchlist}>Add to Watchlist</a>
                }
                {isInWatchlist && 
                    <a className="btn" onClick={removeFromWatchlist}>Remove from Watchlist</a>
                }
                <a className="btn" href={ROUTETO.routeToRecommendations(anime.mal_id.toString())}>Recommendations</a>
            </div>
        </div>
    )

}
