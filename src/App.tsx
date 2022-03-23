import React, { useEffect } from "react";
import Login from "./Login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { mainTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import WhoIsWatching from "./WhoIsWatching";
import MainMenu from "./MainMenu";
import { LoadingDataMovies } from "./actions/fetchApi";
import AddProfile from "./AddProfile";

export default () => {
    
    /* useEffect(() => {
        LoadingDataMovies();
    }, ) */

    return (
        <ThemeProvider theme={mainTheme.dark}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<MainMenu />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/whoiswatching" element={<WhoIsWatching />}></Route>
                    <Route path="/addProfile" element={<AddProfile />} ></Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}