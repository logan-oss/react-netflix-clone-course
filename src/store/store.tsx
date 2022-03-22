import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice/movieSlice";
import userReducer from "./slice/userSlice";


const store = configureStore({
    reducer: { 
        movies: reducer,
        users: userReducer
    }
});

export default store;