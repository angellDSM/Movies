import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from "../../../infrastructure/mapppers/movie.mapper";
import { Movie } from "../../entities/movie.entity";



export const moviesTopRatedUseCase = async( fercher: HttpAdapter ):Promise<Movie[]>=>{

    try{
        const topRated = await fercher.get<MovieDBMoviesResponse>('/top_rated')

        return topRated.results.map(MovieMapper.fromMovieDBResultToEntity)



    }catch(error){

        throw new Error('Error fetching movies - topRatedUseCase')

    }

}