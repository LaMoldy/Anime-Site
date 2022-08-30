export interface MALAnime {
    mal_id: number,
    url: string,
    images: MALImage,
    trailer: {},
    approved: boolean,
    titles: string[],
    title_english: string,
    title_japanese: string,
    title_synonyms: string[],
    type: string,
    source: string,
    episodes: number,
    status: string,
    airing: boolean,
    aired: {},
    duration: string,
    rating: string,
    score: number,
    scoredBy: number,
    rank: number,
    popularity: number,
    members: number,
    favourite: number,
    synopsis: string,
    background: string,
    season: string,
    year: number,
    broadcast: {},
    producers: MALOther[],
    licensors: MALOther[],
    studios: MALOther[],
    genres: MALOther[],
    explicitGenres: MALOther[],
    themes: MALOther[],
    demographics: MALOther[]
}

export interface MALOther  {
    malId: number,
    type: string,
    name: string,
    url: string
}

export interface MALImage {
    jpg: Image,
    webp: Image
}

export interface Image {
   image_url: string,
   large_image_url: string,
   small_image_url: string
}

export interface MALRecommended {
    entry: MALEntry,
    url: string,
    votes: number
}

export interface MALEntry {
    mal_id: number,
    url: string,
    images: MALImage,
    title: string
}
