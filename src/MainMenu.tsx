import Box from '@mui/material/Box';
import ToolBar from './ToolBar';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { Movie } from './components/Movie';
import { Button, Container, Stack } from '@mui/material';
import { MoviesReducerInterface } from "./interfaces/MoviesReducerInterface";
import { MovieInterface } from './interfaces/MovieInterface';
import { MoviesSlide } from './components/MoviesSlide';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';

export default function MainMenu() {


    type State = {
        movies: MoviesReducerInterface
    }

    const Movies = useSelector((state: State) => state.movies);
    console.log(Movies);
    

    return (
        <Box bgcolor="primary">
            <ToolBar display={""} />
            {Movies.popularMovies.length !== 0 &&
                <>
                    <Box bgcolor="red" sx={{
                        width: "100%",
                        height: "70vh",
                        backgroundImage: 'url(https://image.tmdb.org/t/p/original/' + Movies.popularMovies[0].backdrop_path + ')',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        mb: 2,
                        display: 'flex',
                        alignContent: 'flex-end'
                    }} >
                        <Box sx={{ display: "inline", mb: 0 }}>
                            <Box sx={{ mt: 60, ml: 5 }}>
                                <Button startIcon={<PlayArrow />} sx={{ fontWeight: "bold", bgcolor: "white", color: "black", mr: 1 }} variant="contained">Lecture</Button>
                                <Button startIcon={<InfoOutlined />} sx={{ fontWeight: "bold" }} variant="contained" >Plus d'infos</Button>
                            </Box>
                        </Box>
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
