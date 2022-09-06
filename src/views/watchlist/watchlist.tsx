import { FC, useCallback, useEffect, useState } from 'react';

import { AnimeCard } from '../../components/anime-card/anime-card';
import { Mal } from '../../services/mal';
import { MALAnime } from '../../utils/malTypes';

interface storageData {
  id: []
}

export const WatchlistPage: FC = () => {
  const [anime, setAnime] = useState<MALAnime[]>([]);

  const getWatchlistAnime = useCallback(async() => {
    let animes: MALAnime[] = [];

    const watchlist: storageData = JSON.parse(localStorage.getItem("id")!);
    
    watchlist.id.forEach(async(value) => {
      const data: MALAnime = await Mal.getAnimeById(value);
      animes.push(data);
      setAnime(animes);
      console.log("here")
    });

  }, [setAnime])

  useEffect(() => {
    getWatchlistAnime();
  }, [getWatchlistAnime]);

  return (
    <div>
      <h1>Watchlist</h1>
      {
        anime.map((data) => (
            <AnimeCard 
              image={data.images.jpg.image_url} 
              key={data.mal_id} 
              titleEnglish={data.title_english}
              titleJapanese={data.title_japanese}
              malId={data.mal_id} />
        ))
      }
    </div>
  )
}