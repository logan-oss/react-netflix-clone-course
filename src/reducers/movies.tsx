import axios from "axios";
import { MovieInterface } from "../interfaces/MovieInterface";
import { MoviesReducerInterface } from "../interfaces/MoviesReducerInterface";
import { createSlice } from '@reduxjs/toolkit'

const initialState : MoviesReducerInterface = {
    popularMovies: new Array<MovieInterface>(),
    trendingMovies: new Array<MovieInterface>(),
    topMovies: new Array<MovieInterface>(),
};

const moviesReducer = (state : MoviesReducerInterface = initialState, action: any) => {
    switch (action.type) {
        case 'SET_POPULAR_MOVIES':
            return action.data;
        default:
            return state;
    }
}
export default moviesReducer;
