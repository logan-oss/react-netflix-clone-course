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

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "55%",
    minHeight: "100vh",
    bgcolor: "#383737",
    boxShadow: 24,
};

export default function MovieModal(props: any) {
    const [open, setOpen] = React.useState(true);
    const [similarMovies, setSimilarMovies] = React.useState([]);
    const handleClose = () => props.setModal();
    const mois = ["javier", "février", "mars", "avril", "mai", "juin", "juillet", "aout","septembre","octobre","novembre","decembre"]

    console.log(similarMovies);
    

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/"+ props.data.id + "/similar?api_key=" + process.env.REACT_APP_API_KEY + "&language=fr-FR")
        .then(res => res.json())
        .then(
            (result) => {  
                setSimilarMovies(result.results);
            },
        ) 
    }, [] );


    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{overflow:'auto'}}
        >
            <Box sx={style}>
                <Box bgcolor="red" sx={{
                    width: "100%",
                    height: "70vh",
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.data.backdrop_path})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    mb: 2,
                    display: 'flex',
                    alignContent: 'flex-end',
                    position: "relative"
                }} >
                    <Box sx={{ display: "inline", position: 'absolute', bottom: "10%" }}>
                        <Box sx={{ ml: 5 }}>
                            <Button startIcon={<PlayArrow />} sx={{ fontWeight: "bold", bgcolor: "white", color: "black" }} variant="contained">Lecture</Button>
                            <Stack direction="row" spacing={1} sx={{ display: "inline", ml: 1 }}>
                                <Button sx={{ bgcolor: "rgba(255, 255, 255, 0)", p: 0, minWidth: "0px" }}>
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
                    </Box>
                </Box>

                <Box sx={{ ml: 5, mr:5 }}>
                    <Grid container spacing={2} sx={{mb:3}}>
                        <Grid item xs={8}>
                            <Typography>
                                {new Date(props.data.release_date).getFullYear()} &nbsp;
                                {(Math.floor(props.data.runtime / 60) )} h {props.data.runtime % 60} min <br />
                                <b>Dernier jour sur Netflix : {mois[new Date().getMonth()]} {new Date().getDate()}</b>
                            </Typography>
                            <br />
                            <Typography>
                                {props.data.tagline}
                            </Typography>

                        </Grid>
                        <Grid item xs={4} sx={{fontSize: "15px"}}>
                            Production: <b>{props.data.production_companies.map((pc : any) => pc.name+", ")}</b> <br />
                            Genres: <b>{props.data.genres.map((g : any) => g.name+", ")}</b> <br />
                            Titre du film: <b>{props.data.title}</b> <br />
                        </Grid>
                    </Grid>
                    <h2>Titre similaires</h2>

                    <Stack flexWrap="wrap" direction="row" spacing={2}>
                        <Box sx={{width: "300px", height: "250px", bgcolor:'red'}}>

                        </Box>
                        <Box sx={{width: "300px", height: "250px", bgcolor:'red'}}>

                        </Box>
                        <Box sx={{width: "300px", height: "250px", bgcolor:'red'}}>

                        </Box>
                        <Box sx={{width: "300px", height: "250px", bgcolor:'red'}}>

                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    );
}
