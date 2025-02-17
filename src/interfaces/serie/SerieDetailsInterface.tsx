import { GenreInterface, ProductionCompaniesInterface } from "../GeneralInfo"

export default interface SerieDetailsInterface {
    adult: boolean,
    backdrop_path: string,
    created_by: Array<
        {
            id: number,
            credit_id: string,
            name: string,
            gender: number,
            profile_path: string
        }
    >,
    episode_run_time: Array<number>,
    first_air_date: string,
    genres: Array<GenreInterface>,
    homepage: string,
    id: number,
    in_production: boolean,
    languages: Array<string>,
    last_air_date: string,
    last_episode_to_air: {
        air_date: string,
        episode_number: number,
        id: number,
        name: string,
        overview: string,
        production_code: string,
        season_number: number,
        still_path: string,
        vote_average: number,
        vote_count: number
    },
    name: string,
    next_episode_to_air: null,
    networks: Array<
        {
            name: string,
            id: number,
            logo_path: string,
            origin_country: string
        }
    >,
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: Array<string>,
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: Array<ProductionCompaniesInterface>,
    production_countries: Array<
        {
            iso_3166_1: string,
            name: string
        }>,
    seasons: Array<
        {
            air_date: string,
            episode_count: number,
            id: number,
            name: string,
            overview: string,
            poster_path: string,
            season_number: number
        }>,
    spoken_languages: Array<
        {
            english_name: string,
            iso_639_1: string,
            name: string
        }>
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number
}