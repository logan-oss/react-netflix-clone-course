import { MovieInterface } from "../movie/MovieInterface";
import SerieInterface from "./SerieInterface";

interface SearchSeriesInterface {
    keyword: string,
    series: Array<SerieInterface>
}

export type SeriesReducerInterface = {
    popularSeries: Array<SerieInterface>,
    trendingSeries: Array<SerieInterface>,
    topSeries: Array<SerieInterface>,
    searchSeries: SearchSeriesInterface,
};