import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Grid, Stack } from '@mui/material';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useEffect } from "react";
import { MovieInterface } from '../interfaces/movie/MovieInterface';
import { useDispatch } from 'react-redux';
import { addMovieList } from '../store/slice/userSlice';
import { MovieModalInterface } from '../interfaces/propsInterface/ModalInterface';
import { ProductionCompaniesInterface, GenreInterface } from '../interfaces/GeneralInfo';

const style = {
    position: 'absolute',
    width: "55%",
    minHeight: "100vh",
    bgcolor: "#383737",
    boxShadow: 24,
};

export default function MovieModal(props: MovieModalInterface) {
    const [open, setOpen] = React.useState(true);
    const [similarMovies, setSimilarMovies] = React.useState(new Array<MovieInterface>());
    const handleClose = () => props.setModal();
    const mois = ["javier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]

    const dispatch = useDispatch();


    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/" + props.data.id + "/similar?api_key=" + process.env.REACT_APP_API_KEY + "&language=fr-FR")
            .then(res => res.json())
            .then(
                (result) => {
                    setSimilarMovies(result.results.slice(0, 6));
                },
            )
    }, []);


    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{
                overflow: 'auto',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box sx={style}>
                <Box sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'center',
                    height: "50vh",
                    '&::after': {
                        position: 'absolute',
                        content: '" "',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.data.backdrop_path})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }

                }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="space-between"
                        ml={5}
                        mb={5}
                        zIndex={200}
                    >
                        <Box sx={{ ml: 5 }}>
                            <Typography fontSize='70px' sx={{ position: 'absolute', zIndex: 200, top: '40%', maxWidth:"50%" }}>
                                {props.data.title}
                            </Typography>
                            <Button startIcon={<PlayArrow />} sx={{ fontWeight: "bold", bgcolor: "white", color: "black" }} variant="contained">Lecture</Button>
                            <Stack direction="row" spacing={1} sx={{ display: "inline", ml: 1 }}>
                                <Button sx={{ bgcolor: "rgba(255, 255, 255, 0)", p: 0, minWidth: "0px" }} onClick={() => dispatch(addMovieList(props.data))}>
                                    <Avatar sx={{ border: " 2px solid grey", bgcolor: "transparent" }}>
                                        < AddIcon sx={{ p: 0, m: 0, color: "#919191" }} fontSize='large' />
                                    </Avatar>
                                </Button>
                                <Button sx={{ bgcolor: "rgba(255, 255, 255, 0)", p: 0, minWidth: "0px" }}>
                                    <Avatar sx={{ border: " 2px solid grey", bgcolor: "transparent" }}>
                                        < ThumbDownOffAltIcon sx={{ p: 0, m: 0, color: "#919191" }} fontSize='medium' />
                                    </Avatar>
                                </Button>
                                <Button sx={{ bgcolor: "rgba(255, 255, 255, 0)", p: 0, minWidth: "0px" }}>
                                    <Avatar sx={{ border: " 2px solid grey", bgcolor: "transparent" }}>
                                        < ThumbUpOffAltIcon sx={{ p: 0, m: 0, color: "#919191" }} fontSize='medium' />
                                    </Avatar>
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Box>

                <Box sx={{ ml: 5, mr: 5 }}>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={8}>
                            <Typography>
                                {new Date(props.data.release_date).getFullYear()} &nbsp;
                                {(Math.floor(props.data.runtime / 60))} h {props.data.runtime % 60} min <br />
                                <b>Dernier jour sur Netflix : {mois[new Date().getMonth()]} {new Date().getDate()}</b>
                            </Typography>
                            <br />
                            <Typography>
                                {props.data.tagline}
                            </Typography>

                        </Grid>
                        <Grid item xs={4} sx={{ fontSize: "15px" }}>
                            Production: <b>{props.data.production_companies.map((pc: ProductionCompaniesInterface) => pc.name + ", ")}</b> <br />
                            Genres: <b>{props.data.genres.map((g: GenreInterface) => g.name + ", ")}</b> <br />
                            Titre du film: <b>{props.data.title}</b> <br />
                        </Grid>
                    </Grid>
                    <h2>Titre similaires</h2>

                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {similarMovies.map((m: MovieInterface) => {
                            return (
                                <Grid item xs={4} >
                                    <Box sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'left',
                                        height: "150px",
                                        '&::after': {
                                            position: 'absolute',
                                            content: '" "',
                                            width: '100%',
                                            height: '100%',
                                            top: 0,
                                            left: 0,
                                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${m.backdrop_path})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                        }

                                    }}>
                                    </Box>
                                    <Box sx={{
                                        height: "120px",
                                        bgcolor: "#545454",
                                        width: "100%"
                                    }}>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="end"
                                            sx={{ py: 1, px: 1 }}
                                        >
                                            {new Date(m.release_date).getFullYear()}
                                            <Button onClick={() => dispatch(addMovieList(m))} sx={{ bgcolor: "rgba(255, 255, 255, 0)", p: 0, minWidth: "0px" }} >
                                                <Avatar sx={{ border: " 2px solid grey", bgcolor: "transparent" }}>
                                                    < AddIcon sx={{ p: 0, m: 0, color: "#919191" }} fontSize='large' />
                                                </Avatar>
                                            </Button>
                                        </Grid>
                                        <Typography ml={1} noWrap >
                                            {m.overview}
                                        </Typography>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Box>
        </Modal>
    );
}
