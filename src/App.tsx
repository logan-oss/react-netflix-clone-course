import React from "react";
import Login from "./Login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

export default () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </Router>
    );
}