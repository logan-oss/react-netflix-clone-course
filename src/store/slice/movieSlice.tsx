import { MovieInterface } from "../../interfaces/movie/MovieInterface";
import { MoviesReducerInterface } from "../../interfaces/movie/MoviesReducerInterface";
import { combineReducers, createSlice } from '@reduxjs/toolkit'

const initialState: MoviesReducerInterface = {
    popularMovies: new Array<MovieInterface>(),
    trendingMovies: new Array<MovieInterface>(),
    topMovies: new Array<MovieInterface>(),
    searchMovies: {
        keyword: "",
        movies: new Array<MovieInterface>()
    },
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setPopularMovies(state, action) {
            state.popularMovies = action.payload;
        },
        setTrendingMovies(state, action) {
            state.trendingMovies = action.payload;
        },
        setTopMovies(state, action) {
            state.topMovies = action.payload;
        },
        setSearchMovies(state, action){
            state.searchMovies = action.payload;
        }
    }
})

export const { setPopularMovies, setTrendingMovies, setTopMovies, setSearchMovies } = movieSlice.actions;

export default movieSlice.reducer;