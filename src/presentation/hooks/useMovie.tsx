import { useEffect, useState } from 'react'
import * as useCase  from '../../core/use-cases';
import { movieDBFecther } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {

  const [isLoading, setIsLoanding] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[] | undefined>()

  useEffect(() => {
    loadMovie();
  }, [movieId]);


  const loadMovie = async () => {
    setIsLoanding(true)
    
    const fullMoviePromise = useCase.getMovieByIdUseCase( movieDBFecther, movieId);
    const castPromise = useCase.getMovieCastUseCase(movieDBFecther, movieId);

    const [fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise])


    setMovie(fullMovie);
    setCast(cast)

    setIsLoanding(false);
   

  }



  return {
    isLoading,
    movie,
    cast
  }
}
