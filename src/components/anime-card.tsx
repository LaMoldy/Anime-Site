import { FC } from "react";
import { MALAnime } from "../utils/malTypes";
import {ROUTES,ROUTETO} from "../App";
import "./anime-card.css";
import {Routes} from "react-router-dom";

interface AnimeProps {
    anime: MALAnime
}

export const AnimeCard: FC<AnimeProps> = (props: AnimeProps) => {
    return (
        <div className={"card"}>
            <a href={ROUTETO.routeToAnime(props.anime.mal_id.toString())}>
            <img
                className={"card-image"} src={props.anime.images.jpg.image_url}
                alt={"Anime Thumbnail"} />
            <h6 className={"card-title"}>{props.anime.title_english}</h6>
            </a>

        </div>
    )
}
