import { applyMiddleware, combineReducers, compose, configureStore, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./slice/movieSlice";
import userReducer from "./slice/userSlice";

const reducers = combineReducers({
    movies: reducer,
    users: userReducer,
})

const store = createStore(reducers, composeWithDevTools());

export default store;