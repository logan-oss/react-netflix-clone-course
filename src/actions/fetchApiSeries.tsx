import { setPopularSeries,
    setTrendingSeries,
    setTopSeries,
    setSearchSeries } from "../store/slice/serieSlice";
import store from "../store/store";

const TRENDING_SERIES = "TRENDING_SERIES";
const POPULAR_SERIES = "POPULAR_SERIES";
const TOP_RATED_SERIES = "TOP_RATED_SERIES";

export function LoadingDataSeries() {
    GetPopularSeries();
    GetTrendingSeries();
    GetTopRatedSeries();
}

export function GetPopularSeries() {
    console.log("getting popular series ...");
    GetSeries("https://api.themoviedb.org/3/tv/popular", POPULAR_SERIES);
}

export function GetTrendingSeries() {
    console.log("getting trending series ...");
    GetSeries("https://api.themoviedb.org/3/trending/tv/week", TRENDING_SERIES);
}

export function GetTopRatedSeries() {
    console.log("getting trending series ...");
    GetSeries("https://api.themoviedb.org/3/tv/top_rated", TOP_RATED_SERIES);
}

export function GetSearchSeries(keyword: string) {
    fetch('https://api.themoviedb.org/3/search/tv?api_key='+process.env.REACT_APP_API_KEY+'&query='+keyword)
    .then(res => res.json())
    .then(
        (result) => {
            store.dispatch(setSearchSeries({keyword: keyword, series: result.results}));
        }
    );
}

function GetSeries(link: string, type: string) {
    fetch(link + "?api_key=" + process.env.REACT_APP_API_KEY + "&language=fr-FR")
        .then(res => res.json())
        .then(
            (result) => {
                switch (type) {
                    case TRENDING_SERIES:
                        store.dispatch(setTrendingSeries(result.results));
                        break;
                    case POPULAR_SERIES:
                        store.dispatch(setPopularSeries(result.results));
                        break;
                    case TOP_RATED_SERIES:
                        store.dispatch(setTopSeries(result.results));
                        break;
                }
                return true;
            },
            (error) => {
                return false;
            }
        )
}
