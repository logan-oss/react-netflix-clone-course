import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice/movieSlice";


const store = configureStore({
    reducer: { movies: reducer}
});

export default store;