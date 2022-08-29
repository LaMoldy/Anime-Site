import {FC, useCallback, useEffect, useState} from "react";
import {Mal} from "../../services/mal";
import {useParams} from "react-router-dom";
import {MALAnime} from "../../utils/malTypes";
import "./anime.css";
import {defaultMALAnime} from "../../services/defaultValues";

export const AnimePage: FC = () => {
    const [anime, setAnime] = useState<MALAnime>(defaultMALAnime);
    const {id} = useParams();

    const getAnime = useCallback(async () => {
        if (typeof id === "string") {
            const res = await Mal.getAnimeById(Number.parseInt(id));
            setAnime(res);
        }
    }, [setAnime]);

    useEffect(() => {
        getAnime()
    }, [getAnime]);

    return (
        <div className="flex-column center">
            <a
                href="/"
                className="backButton">
                <img
                    alt="Home Button"
                    className="homeImg"
                    src='https://www.nicepng.com/png/full/115-1153942_white-home-icon-png-white-home-logo-transparent.png' />
            </a>
            <img
                className="animeImage"
                alt="Image of Anime"
                src={anime?.images.jpg.image_url} />
            <h3 className="animeTitle">{anime.title_english === null ? anime.title_japanese : anime.title_english} ({anime.score}/10)</h3>
            <h5>Episodes: {anime.episodes} ({anime.duration})</h5>
            <p>{anime?.synopsis}</p>
        </div>
    )

}