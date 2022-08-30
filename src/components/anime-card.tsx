import { FC } from "react";
import { MALAnime, MALImage } from "../utils/malTypes";
import {ROUTETO} from "../App";
import "./anime-card.css";

interface AnimeProps {
    image: string,
    titleEnglish: string,
    titleJapanese: string,
    malId: number
}

export const AnimeCard: FC<AnimeProps> = (props: AnimeProps) => {
    return (
        <div className={"card"}>
            <a href={ROUTETO.routeToAnime(props.malId.toString())}>
                <img
                    className={"card-image"} src={props.image}
                    alt={"Anime Thumbnail"} />
                <h6 className={"card-title"}>{props.titleEnglish === null ? props.titleJapanese: props.titleEnglish}</h6>
            </a>
        </div>
    )
}
