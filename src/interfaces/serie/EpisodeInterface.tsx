export default interface EpisodeInterface {
    air_date: string,
    episode_number: number,
    crew: Array<
        {
            department: string,
            job: string,
            credit_id: string,
            adult: boolean,
            gender: number,
            id: number,
            known_for_department: string,
            name: string,
            original_name: string,
            popularity: number,
            profile_path: string
        }>,
    guest_stars: Array<
        {
            credit_id: string,
            order: number,
            character: string,
            adult: boolean,
            gender: number,
            id: number,
            known_for_department: string,
            name: string,
            original_name: string,
            popularity: number,
            profile_path: string
        }>,
    id: number,
    name: string,
    overview: string,
    production_code: string,
    season_number: number,
    still_path: string,
    vote_average: number,
    vote_count: number
}