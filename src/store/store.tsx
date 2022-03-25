import { applyMiddleware, combineReducers, compose, configureStore, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./slice/movieSlice";
import userReducer from "./slice/userSlice";
import seriesReducer from "./slice/serieSlice";
import loginReducer from "./slice/loginSlice";

const reducers = combineReducers({
    movies: reducer,
    users: userReducer,
    series: seriesReducer,
    login: loginReducer,
})

const store = createStore(reducers, composeWithDevTools());

export default store;