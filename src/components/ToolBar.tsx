import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { ToolbarInterface } from '../interfaces/propsInterface/ToolbarInterface';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { FormControl, TextField } from '@mui/material';
import { GetSearchMovie } from '../actions/fetchApiMovies';
import StateInterface from '../interfaces/StateInterface';
import { GetSearchSeries } from '../actions/fetchApiSeries';
import { setSearchSeries } from '../store/slice/serieSlice';
import { setSearchMovies } from '../store/slice/movieSlice';

const links = [
    { name: "Accueil", url: '/' },
    { name: "Séries", url: '/series' },
    { name: "Films", url: '/films' },
    { name: "Nouveautés les plus regardées", url: '/trending' },
    { name: "Ma liste", url: '/mylist' }
]

export default function ToolBar(props: ToolbarInterface) {

    const [search, setSearch] = React.useState("");
    const store = useSelector((state: StateInterface) => state);

    const dispatch = useDispatch();

    const styles = {
        link: {
            color: '#B1B1B1',
        },
    }

    const logoOnly = true;
    const pathArray = window.location.pathname.split('/');

    // Supprime l'historique de la recherche
    useEffect(() => {
        if (pathArray[pathArray.length - 1] === "films")
            dispatch(setSearchMovies({ keyword: "", movies: [] }));
        else
            dispatch(setSearchSeries({ keyword: "", series: [] }));
    }, [])

    // Création d'un timer pour evité de faire un appel Api a chaque onChange de la recherche
    const timer = setTimeout(() => {
        if (props.setOnSearch !== undefined) {
            if (search.trim() === "") {
                props.setOnSearch(false);
            }
            else {

                switch (pathArray[pathArray.length - 1]) {
                    case 'films':
                        if (store.movies.searchMovies.keyword !== search.trim()) {
                            GetSearchMovie(search);
                            props.setOnSearch(true);
                        }
                        break;
                    case 'series':
                        if (store.series.searchSeries.keyword !== search.trim()) {
                            GetSearchSeries(search);
                            props.setOnSearch(true);
                        }
                        break;
                }

            }
        }
    }, 1000);


    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    function searchWithTimer(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
        clearTimeout(timer);
    }


    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary">
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <img src="assets/images/logo.png" alt="" style={{ width: "130px", margin: "0px 16px" }} />
                        {props.display !== "logoOnly" &&
                            [
                                <>
                                    {((!store.login.isLogged) && (pathArray[pathArray.length - 1] !== 'login')) ? <Navigate to='/login' /> : null }
                                    {((store.users.selectedUser.name === "") && (store.login.isLogged)) ? <Navigate to='/whoiswatching' /> : null}
                                </>,
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, m: 2 }}>
                                    <Stack direction="row" spacing={3}>
                                        {
                                            links.map((link) => <NavLink to={link.url} style={styles.link}>
                                                {link.name}
                                            </NavLink>)
                                        }
                                    </Stack>
                                </Box>,
                                <Box sx={{ flexGrow: 0, display: "inline-flex" }}>
                                    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                                        <Search>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <FormControl fullWidth>
                                                <StyledInputBase
                                                    sx={{ width: "300px" }}
                                                    placeholder="Search…"
                                                    inputProps={{ 'aria-label': 'search' }}
                                                    onChange={searchWithTimer}
                                                    value={search}
                                                    autoFocus
                                                />
                                            </FormControl>
                                        </Search>
                                        <Tooltip title="Profil">
                                            <IconButton sx={{ p: 0 }}>
                                                {store.users.selectedUser.name !== "" ?
                                                    <NavLink to='/whoiswatching'>
                                                        <Avatar sx={{ bgcolor: store.users.selectedUser.color }} variant="square">
                                                            {store.users.selectedUser.name[0]}
                                                        </Avatar>
                                                    </NavLink>

                                                    :
                                                    null
                                                }

                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </Box>
                            ]

                        }

                    </Toolbar>
                </Container>
            </AppBar>
        </Stack>
    );
}