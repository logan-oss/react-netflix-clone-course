import { MovieInterface } from "../../interfaces/movie/MovieInterface";
import { MoviesReducerInterface } from "../../interfaces/movie/MoviesReducerInterface";
import { combineReducers, createSlice } from '@reduxjs/toolkit'
import { SeriesReducerInterface } from "../../interfaces/serie/SeriesReducerInterface";
import SerieInterface from "../../interfaces/serie/SerieInterface";

const initialState: SeriesReducerInterface = {
    popularSeries: new Array<SerieInterface>(),
    trendingSeries: new Array<SerieInterface>(),
    topSeries: new Array<SerieInterface>(),
    searchSeries: {
        keyword: "",
        series: new Array<SerieInterface>()
    },
};

export const serieSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        setPopularSeries(state, action) {
            state.popularSeries = action.payload;
        },
        setTrendingSeries(state, action) {
            state.trendingSeries = action.payload;
        },
        setTopSeries(state, action) {
            state.topSeries = action.payload;
        },
        setSearchSeries(state, action){
            state.searchSeries = action.payload;
        }
    }
})

export const { 
    setPopularSeries,
    setTrendingSeries,
    setTopSeries,
    setSearchSeries } = serieSlice.actions;

export default serieSlice.reducer;