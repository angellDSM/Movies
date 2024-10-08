import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from "../../../infrastructure/mapppers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

interface Options {
page?: number,
limit?: number
}


export const moviesPopularUseCase = async( fercher: HttpAdapter, options?: Options ):Promise<Movie[]>=>{

    try{
        const popular = await fercher.get<MovieDBMoviesResponse>('/popular', {
            params:{
                page: options?.page ?? 1
            }
        });

        return popular.results.map(MovieMapper.fromMovieDBResultToEntity)



    }catch(error){

        throw new Error('Error fetching movies - puplarUseCase')

    }

}