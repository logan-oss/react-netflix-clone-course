import Box from '@mui/material/Box';
import ToolBar from './ToolBar';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { Movie } from './components/Movie';
import { Button, Container, Grid, Stack } from '@mui/material';
import { MoviesReducerInterface } from "./interfaces/MoviesReducerInterface";
import { MovieInterface } from './interfaces/MovieInterface';
import { MoviesSlide } from './components/MoviesSlide';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import { useEffect } from 'react';
import { LoadingDataMovies } from './actions/fetchApi';

export default function MainMenu() {

    useEffect(() => {
        LoadingDataMovies();
    }, )

    type State = {
        movies: MoviesReducerInterface
    }

    const Movies = useSelector((state: State) => state.movies);
    console.log(Movies);

    return (
        <Box bgcolor="primary">
            <ToolBar display={""} />
            {((Movies.popularMovies.length !== 0)) &&
                <>
                    <Box sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                        height: "calc(100vh - 73.125px)",
                        '&::after': {
                            position: 'absolute',
                            content: '""',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            backgroundImage: 'url(https://image.tmdb.org/t/p/original/' + Movies.popularMovies[0].backdrop_path + ')',
                            backgroundRepeat: "no-repeat",
                        }

                    }}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="space-between"
                            ml={5}
                            mb={30}
                            zIndex={100}
                        >
                            <Stack direction="row" spacing={1}>
                                <Button startIcon={<PlayArrow />} sx={{ fontWeight: "bold", bgcolor: "white", color: "black", mr: 1 }} variant="contained">Lecture</Button>
                                <Button startIcon={<InfoOutlined />} sx={{ fontWeight: "bold" }} variant="contained" >Plus d'infos</Button>
                            </Stack>
                        </Grid>
                    </Box>
                    <Stack sx={{ ml: 5 }} spacing={1}>
                        <MoviesSlide movieList={Movies.popularMovies} title={"Les plus gros succès de Netflix"} />
                        <MoviesSlide movieList={Movies.trendingMovies} title={"Tendances actuelles"} />
                        <MoviesSlide movieList={Movies.topMovies} title={"Les mieux notés"} />
                    </Stack>
                </>
            }
        </Box>
    );
}
