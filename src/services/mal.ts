import axios from "axios";
import {MALAnime} from "../utils/malTypes";

export class Mal {
    private static BASE_URL: string = "https://api.jikan.moe/v4";

    private static async searchAnime(animeName: string) {
        const response = await axios.get(`${this.BASE_URL}/anime?q=${animeName}&sfw`);
        const { data: anime } = response.data;
        return anime;
    }

    public static async getAnime(animeName: string) {
        const animes: MALAnime[] = await this.searchAnime(animeName);
        return animes;
    }

    public static async getAllAnime(pageCount: number) {
        const response = await axios.get(`${this.BASE_URL}/anime?page=${pageCount}`);
        const { data: animes } = response.data;
        return animes;
    }
}
