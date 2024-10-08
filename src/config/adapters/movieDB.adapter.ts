import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFecther = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params:{
       // api_key: 'bc0bcaacbef3a80fa1362ce16e3d5a68',
       api_key: THE_MOVIE_DB_KEY ?? 'no_key',
        language: 'es'
    }
})