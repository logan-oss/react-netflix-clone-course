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
import Movie from "./Movies";
import AddProfile from "./AddProfile";
import MyList from "./MyList";
import Series from "./Series";

export default () => {

    return (
        <ThemeProvider theme={mainTheme.dark}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Movie />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/whoiswatching" element={<WhoIsWatching />}></Route>
                    <Route path="/addProfile" element={<AddProfile />} ></Route>
                    <Route path="/films" element={<Movie />} ></Route>
                    <Route path="/series" element={<Series />} ></Route>
                    <Route path="/mylist" element={<MyList />} ></Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}