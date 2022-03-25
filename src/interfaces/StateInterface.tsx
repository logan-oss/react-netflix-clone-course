import { MoviesReducerInterface } from "./movie/MoviesReducerInterface";
import { SeriesReducerInterface } from "./serie/SeriesReducerInterface";
import UsersInterface from "./user/UsersInterface";

export default interface StateInterface {
    movies: MoviesReducerInterface,
    users: UsersInterface,
    series: SeriesReducerInterface,
    login: {
        isLogged: boolean
    }
}