import "./anime-card.css";

export function AnimeCard(anime: any) {
    return (
        <div className={"card"}>
            <img className={"card-image"} src={anime.image} />
            <h6 className={"card-title"}>{anime.title}</h6>
        </div>
    )
}
