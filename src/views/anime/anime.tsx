import {FC, useCallback, useEffect, useState} from "react";
import {Mal} from "../../services/mal";
import {useParams} from "react-router-dom";
import {MALAnime} from "../../utils/malTypes";
import "./anime.css";

export const AnimePage: FC = () => {
  const [anime, setAnime] = useState<MALAnime>();
  const {id} = useParams();

  const getAnime = useCallback(async () =>{
    if (typeof id === "string") {
      const res = await Mal.getAnimeById(Number.parseInt(id));
      setAnime(res);
    }
  }, [setAnime]);

  useEffect(() => {
    return () => {
      getAnime()
    };
  }, [getAnime]);

return (
    <div className="flex-column center">
      <a href="/" className="backButton"><img className="homeImg" src='https://cdn-icons-png.flaticon.com/512/25/25694.png'/></a>
      <img
          className="animeImage"
        src={anime?.images.jpg.image_url}/>
      <h6 className="animeTitle">{anime?.title_english}</h6>
      <p>{anime?.synopsis}</p>
    </div>
)

}