import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { MovieInterface } from '../interfaces/movie/MovieInterface';
import { Movie } from './Movie';
import SlideInterface from '../interfaces/propsInterface/SlideInterface';
import SerieInterface from '../interfaces/serie/SerieInterface';
import { SerieComponent } from './SerieComponent';


export function Slide(props: SlideInterface) {

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Typography color="white" sx={{ fontSize: "h5.fontSize", fontWeight: 'bold', mb: 2 }}>{props.title}</Typography>
            <Box sx={{ display: 'inline-flex', flexWrap: 'nowrap' }}>
                <Stack direction="row" spacing={1}>
                    {props.type === 'movie' ?
                        (props.list as Array<MovieInterface>).map((m: MovieInterface) => {
                            return <Movie data={m} />
                        })
                        :
                        (props.list as Array<SerieInterface>).map((m: SerieInterface) => {
                            return <SerieComponent data={m} />
                        })
                    }
                </Stack>
            </Box>
        </Box>
    );
}
