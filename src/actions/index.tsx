import { MoviesReducerInterface } from "../interfaces/MoviesReducerInterface"

export const refresh = (data: MoviesReducerInterface) => {
    return {
        type: 'SET_POPULAR_MOVIES',
        data: data,
    }
}