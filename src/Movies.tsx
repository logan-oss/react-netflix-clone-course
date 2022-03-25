import Box from '@mui/material/Box';
import ToolBar from './components/ToolBar';
import { useSelector } from 'react-redux';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Slide } from './components/Slide';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import { useEffect } from 'react';
import { LoadingDataMovies } from './actions/fetchApiMovies';
import StateInterface from './interfaces/StateInterface';
import React from 'react';
import { CustomSlide } from './components/CustomSlide';

export default function Movies() {

    const [viewSearch, SetOnSearch] = React.useState(false)

    useEffect(() => {
        LoadingDataMovies();
    }, [])

    const Movies = useSelector((state: StateInterface) => state.movies);


    return (
        <Box bgcolor="primary">
            <ToolBar display={""} setOnSearch={SetOnSearch} />
            {viewSearch ?
                <>
                    <CustomSlide type="movie" title={"Recherche sur le mot \"" + Movies.searchMovies.keyword + "\""} list={Movies.searchMovies.movies} />
                </>
                :
                ((Movies.popularMovies.length !== 0)) &&
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
                        <Typography fontSize='70px' sx={{ position: 'absolute', zIndex: 200, top: '40%', maxWidth: "50%", left:0, ml:5 }}>
                            {Movies.popularMovies[0].original_title}
                        </Typography>
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
                        <Slide type="movie" list={Movies.popularMovies} title={"Les plus gros succès de Netflix"} />
                        <Slide type="movie" list={Movies.trendingMovies} title={"Tendances actuelles"} />
                        <Slide type="movie" list={Movies.topMovies} title={"Les mieux notés"} />
                    </Stack>
                </>
            }

        </Box>
    );
}
