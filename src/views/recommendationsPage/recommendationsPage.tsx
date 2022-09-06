import './recommendationsPage.css';

import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AnimeCard } from '../../components/anime-card/anime-card';
import { Hamburger } from '../../components/hamburger/hamburger';
import { Mal } from '../../services/mal';
import { MALRecommended } from '../../utils/malTypes';

export const RecommendationsPage: FC = () => {
    const [recommendedAnime, setRecommendedAnime] = useState<MALRecommended[]>([]);
    const { id } = useParams();

    const fetchData = useCallback(async () => {
      if (typeof id === "string") {
        const res = await Mal.getRecommendedAnime(id);
        setRecommendedAnime(res);
      }
    }, [setRecommendedAnime]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            <Hamburger />
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