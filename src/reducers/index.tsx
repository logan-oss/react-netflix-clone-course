import moviesReducer from "./movies";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    movies: moviesReducer,
    isLogged: loggedReducer
});

export default allReducers;