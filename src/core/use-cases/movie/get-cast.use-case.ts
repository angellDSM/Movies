import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBCastResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { CastMapper } from "../../../infrastructure/mapppers/cast,mapper";
import { Cast } from "../../entities/cast.entity";

export const getMovieCastUseCase = async (fetcher: HttpAdapter, movieId: number):Promise<Cast[]>=>{

    try{

    const {cast} = await fetcher.get<MovieDBCastResponse>(`${movieId}/credits`)
    const actores = cast.map(CastMapper.fromMovieDBToEntity)
    return actores;
      
    }catch(error){
        throw new Error(`cannot get movie cast ${movieId}`)

    }
}