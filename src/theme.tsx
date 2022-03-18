import { createTheme } from "@mui/material";

export const mainTheme = {
    "dark": createTheme({
        palette: {
            primary: {
                main: '#b7b7b7',
                contrastText: 'white',
            },
            secondary: {
                main: "rgb(0,0,0)",
            },
            text: {
                primary: '#b7b7b7',
                secondary: '#b7b7b7',
            },
            background: {
                default: 'rgb(0,0,0)',
            },
        },
    }),

    "light" : createTheme({
        palette: {
            primary: {
                main: '#b7b7b7',
                contrastText: 'white',
            },
            secondary: {
                main: "rgb(0,0,0)",
            },
            text: {
                primary: '#b7b7b7',
                secondary: '#b7b7b7',
            },
            background: {
                default: 'rgb(255,255,255)',
            },
        },
    }),
};