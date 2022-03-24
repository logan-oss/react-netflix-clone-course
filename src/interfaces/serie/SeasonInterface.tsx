import EpisodeInterface from "./EpisodeInterface";

export default interface SeasonInterface {
    _id: string,
    air_date: string,
    episodes: Array<EpisodeInterface>,
    name: string,
    overview: string,
    id: number,
    poster_path: string,
    season_number: number
  }