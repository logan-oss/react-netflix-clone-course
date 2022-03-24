import { MovieInterface } from "./MovieInterface";

interface SearchMoviesInterface {
    keyword: string,
    movies: Array<MovieInterface>
}

export type MoviesReducerInterface = {
    popularMovies: Array<MovieInterface>,
    trendingMovies: Array<MovieInterface>,
    topMovies: Array<MovieInterface>,
    searchMovies: SearchMoviesInterface,
};