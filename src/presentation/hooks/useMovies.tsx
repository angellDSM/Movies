import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"

import * as UseCases from '../../core/use-cases'
import { movieDBFecther } from "../../config/adapters/movieDB.adapter"



let popularPageNumber = 1;

export const useMovies = () => {

    const [isLoanding, setisLoanding] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);



    useEffect(() => {
        initialLoad();
    }, []);


    const initialLoad = async () => {

        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFecther);
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFecther);
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFecther);
        const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFecther);

        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies
        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ]);

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        setisLoanding(false);

  

    };

    return {

        isLoanding,
        nowPlaying,
        popular,
        topRated,
        upcoming,

        //metodos

        popularNextPage: async() =>{
            popularPageNumber++;
            const popularMovies = await UseCases.moviesPopularUseCase(movieDBFecther,{
                page: popularPageNumber,
            });

            setPopular(prev =>[...prev, ...popularMovies])

        }

    };
};
