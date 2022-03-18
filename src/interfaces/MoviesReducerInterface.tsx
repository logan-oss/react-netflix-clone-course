import { MovieInterface } from "./MovieInterface";

export type MoviesReducerInterface = {
    popularMovies: Array<MovieInterface>,
    trendingMovies: Array<MovieInterface>,
    topMovies: Array<MovieInterface>,
};