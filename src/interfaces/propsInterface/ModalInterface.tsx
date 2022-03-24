import MovieDetailsInterface from "../movie/MovieDetailsInterface";
import SerieDetailsInterface from "../serie/SerieDetailsInterface";

export interface SerieModalInterface {
    data: SerieDetailsInterface,
    setModal(): void
}

export interface MovieModalInterface {
    data: MovieDetailsInterface,
    setModal(): void
}