import { FC, useEffect, useCallback, useState } from "react";
import { AnimeCard } from "../../components/anime-card";
import { Mal } from "../../services/mal";
import { MALRecommended } from "../../utils/malTypes";
import "./recommendedPage.css";

export const RecommendedPage: FC = () => {
    const [recommendedAnime, setRecommendedAnime] = useState<MALRecommended[]>([]);

    const fetchData = useCallback(async () => {
        const animes = await Mal.getRecommendedAnime();
        setRecommendedAnime(animes);
    }, [setRecommendedAnime]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            <h1 className={"text-center page-title"}>Recommendations</h1>
            <div className={"flex-row space-evenly"}>
                {
                    recommendedAnime.map(data => (
                        <AnimeCard 
                            image={data.entry.images.jpg.image_url} 
                            key={data.entry.mal_id} 
                            titleEnglish={data.entry.title}
                            titleJapanese={data.entry.title}
                            malId={data.entry.mal_id} />
                    ))
                }
            </div>
        </div>
    );
}

