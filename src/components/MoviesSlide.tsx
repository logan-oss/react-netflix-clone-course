import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { MovieInterface } from '../interfaces/MovieInterface';
import { Movie } from './Movie';
import MoviesSlideInterface from '../interfaces/propsInterface/MoviesSlideInterface';


export function MoviesSlide(props: MoviesSlideInterface) {

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Typography color="white" sx={{ fontSize: "h5.fontSize", fontWeight: 'bold', mb: 2 }}>{props.title}</Typography>
            <Box sx={{ display: 'inline-flex', flexWrap: 'nowrap' }}>
                <Stack direction="row" spacing={1}>
                    {props.movieList.map((m: MovieInterface) => {
                        return <Movie data={m} />
                    })}
                </Stack>
            </Box>
        </Box>
    );
}
