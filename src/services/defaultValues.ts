import {MALAnime} from "../interfaces/malTypes";

export const defaultMALAnime: MALAnime = {
  aired: {},
  airing: false,
  approved: false,
  background: "",
  broadcast: {},
  demographics: [],
  duration: "",
  episodes: 0,
  explicitGenres: [],
  favourite: 0,
  genres: [],
  images: {
    jpg: {
      image_url: "",
      large_image_url: "",
      small_image_url: ""
    },
    webp: {
      image_url: "",
      large_image_url: "",
      small_image_url: ""
    }},
  licensors: [],
  mal_id: 0,
  members: 0,
  popularity: 0,
  producers: [],
  rank: 0,
  rating: "",
  score: 0,
  scoredBy: 0,
  season: "",
  source: "",
  status: "",
  studios: [],
  synopsis: "",
  themes: [],
  title_english: "",
  title_japanese: "",
  title_synonyms: [],
  titles: [],
  trailer: {},
  type: "",
  url: "",
  year: 0
}