import { setPopularMovies, setSearchMovies, setTopMovies, setTrendingMovies } from "../store/slice/movieSlice";
import store from "../store/store";

const TRENDING_MOVIES = "TRENDING_MOVIES";
const POPULAR_MOVIES = "POPULAR_MOVIES";
const TOP_RATED_MOVIES = "TOP_RATED_MOVIES";

export function LoadingDataMovies() {
    GetPopularMovies();
    GetTrendingMovies();
    GetTopRatedMovies();
}

export function GetPopularMovies() {
    console.log("getting popular movies ...");
    GetMovies("https://api.themoviedb.org/3/movie/popular", POPULAR_MOVIES);
}

export function GetTrendingMovies() {
    console.log("getting trending movies ...");
    GetMovies("https://api.themoviedb.org/3/movie/now_playing", TRENDING_MOVIES);
}

export function GetTopRatedMovies() {
    console.log("getting trending movies ...");
    GetMovies("https://api.themoviedb.org/3/movie/top_rated", TOP_RATED_MOVIES);
}

export function GetSearchMovie(keyword: string) {
    fetch('https://api.themoviedb.org/3/search/movie?api_key='+process.env.REACT_APP_API_KEY+'&query='+keyword)
    .then(res => res.json())
    .then(
        (result) => {
            store.dispatch(setSearchMovies({keyword: keyword, movies: result.results}));
        }
    );
}

function GetMovies(link: string, type: string) {
    fetch(link + "?api_key=" + process.env.REACT_APP_API_KEY + "&language=fr-FR")
        .then(res => res.json())
        .then(
            (result) => {
                switch (type) {
                    case TRENDING_MOVIES:
                        store.dispatch(setTrendingMovies(result.results));
                        break;
                    case POPULAR_MOVIES:
                        store.dispatch(setPopularMovies(result.results));
                        break;
                    case TOP_RATED_MOVIES:
                        store.dispatch(setTopMovies(result.results));
                        break;
                }
                return true;
            },
            (error) => {
                return false;
            }
        )
}
