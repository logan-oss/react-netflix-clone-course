import { GenreInterface, ProductionCompaniesInterface } from "../GeneralInfo"

export default interface MovieDetailsInterface {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: number,
    genres: Array<GenreInterface>,
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: null,
    production_companies: Array<ProductionCompaniesInterface>,
    production_countries: Array<
        {
            iso_3166_1: string,
            name: string
        }>
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: Array<
        {
            iso_639_1: string,
            name: string
        }>,
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}