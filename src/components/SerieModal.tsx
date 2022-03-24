import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Grid, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useEffect } from "react";
import { MovieInterface } from '../interfaces/movie/MovieInterface';
import { useDispatch } from 'react-redux';
import { addMovieList } from '../store/slice/userSlice';
import { SerieModalInterface } from '../interfaces/propsInterface/ModalInterface';
import Episode from './Episode';
import EpisodeInterface from '../interfaces/serie/EpisodeInterface';
import { ProductionCompaniesInterface, GenreInterface } from '../interfaces/GeneralInfo';

const style = {
    position: 'absolute',
    width: "55%",
    minHeight: "100vh",
    bgcolor: "#383737",
    boxShadow: 24,
};

export default function SerieModal(props: SerieModalInterface) {
    const [open, setOpen] = React.useState(true);
    const [season, setSeason] = React.useState("1");
    const [seasonEpisodes, setSeasonEpisodes] = React.useState([]);
    const handleClose = () => props.setModal();
    const mois = ["javier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]

    const dispatch = useDispatch();

    let seasonNumber = [];

    for (let index = 1; index <= props.data.number_of_seasons; index++) {
        seasonNumber.push(index.toString());
        
    }
    

    useEffect(() => {
        getEpisodes(season);
    }, [])

    function getEpisodes(ep: string){    
        fetch("https://api.themoviedb.org/3/tv/" + props.data.id + "/season/"+ep+"?api_key=" + process.env.REACT_APP_API_KEY + "&language=fr-FR")
        .then(res => res.json())
        .then(
            (result) => {
                setSeasonEpisodes(result.episodes);             
            },
        )
    }

    function seasonChange(event: SelectChangeEvent){
        setSeason(event.target.value as string);
        getEpisodes(event.target.value);
    }

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
                            <Typography fontSize='70px' sx={{position:'absolute',zIndex: 200, top:'50%'}}>
                                {props.data.original_name}
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
                                <span style={{color: '#00cc00', fontWeight:'bold'}}> Date de sortie : </span>
                                {new Date(props.data.first_air_date).getFullYear()} &nbsp;
                                <span style={{color: '#00cc00', fontWeight:'bold'}}> Nombre de saison : </span>
                                {props.data.number_of_seasons} saisons <br />
                            </Typography>
                            <br />
                            <Typography>
                                {props.data.tagline}
                            </Typography>

                        </Grid>
                        <Grid item xs={4} sx={{ fontSize: "15px" }}>
                            Production: <b>{props.data.production_companies.map((pc: ProductionCompaniesInterface) => pc.name + ", ")}</b> <br />
                            Genres: <b>{props.data.genres.map((g: GenreInterface) => g.name + ", ")}</b> <br />
                            Titre du film: <b>{props.data.name}</b> <br />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'inline-flex', justifyContent: "space-between", width:'100%' }}>
                        <h2>Episodes</h2>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={{height:"50px"}}
                            value={season}
                            label="Age"
                            onChange={seasonChange}
                        >
                            {seasonNumber.map((s: string) => {
                                return <MenuItem value={s}>saison {s}</MenuItem>
                            })}
                        </Select>
                    </Box>
                    <Box>
                        {(seasonEpisodes as Array<EpisodeInterface>).map((e: EpisodeInterface) => <Episode {...e} />)}
                    </Box>
                </Box>
            </Box>
        </Modal >
    );
}
