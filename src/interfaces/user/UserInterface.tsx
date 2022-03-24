import { MovieInterface } from "../movie/MovieInterface";


export default interface User{
    name: string,
    color: string,
    movieList: Array<MovieInterface>
}