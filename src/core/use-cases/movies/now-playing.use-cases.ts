import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse, Result } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from "../../../infrastructure/mapppers/movie.mapper";
import { Movie } from "../../entities/movie.entity";



export const moviesNowPlayingUseCase = async( fercher: HttpAdapter ):Promise<Movie[]>=>{

    try{
        const nowPlaying = await fercher.get<NowPlayingResponse>('/now_playing')

        return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity)



    }catch(error){

        throw new Error('Error fetching movies - nowPlaying')

    }

}