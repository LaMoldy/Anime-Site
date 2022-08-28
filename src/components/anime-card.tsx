import { FC } from "react";
import { MALAnime } from "../interfaces/malTypes";
import "./anime-card.css";

interface AnimeProps {
    anime: MALAnime
}

export const AnimeCard: FC<AnimeProps> = (props: AnimeProps) => {
    return (
        <div className={"card"}>
            <img className={"card-image"} src={props.anime.images.jpg.image_url} />
            <h6 className={"card-title"}>{props.anime.title_english}</h6>
        </div>
    )
}
