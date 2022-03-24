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
import EpisodeInterface from '../interfaces/serie/EpisodeInterface';


export default function Episode(props: EpisodeInterface) {
    return (
        <Box sx={{
            width: '100%',
            height: '150px',
            borderBottom: '1px solid grey',
            borderRadius: '5px',
            px: 2,
            py: 2,
            "&:hover": {
                bgcolor:'rgb(153, 153, 153,0.5)'
            }
        }}>

            <Grid container sx={{height: '100%', m: 0,}} spacing={1}>
                <Grid alignItems='center' justifyContent='center' xs={1} sx={{ display: 'flex', m: 0 }}>
                    <Typography fontSize="20px">
                        {props.episode_number}
                    </Typography>
                </Grid>
                <Grid alignItems='center' justifyContent='center' xs={3}
                    sx={{
                        bgcolor: 'red',
                        display: 'flex',
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.still_path})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography fontWeight='bold'>{props.name}</Typography>
                        <Typography>{props.air_date}</Typography>
                    </Box>
                    <Box component="div" whiteSpace="normal">
                        <Typography fontSize="14px">{props.overview}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
