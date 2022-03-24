import { MovieInterface } from "../movie/MovieInterface"
import SerieInterface from "../serie/SerieInterface"

export default interface SlideInterface {
    type: string,
    list: Array<MovieInterface>|Array<SerieInterface>
    title: string
}