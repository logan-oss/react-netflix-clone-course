import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MovieInterface } from '../interfaces/movie/MovieInterface';
import SlideInterface from '../interfaces/propsInterface/SlideInterface';
import SerieInterface from '../interfaces/serie/SerieInterface';


export function CustomSlide(props: SlideInterface) {

    const style = {
        display: 'inline-block',
        width: "300px",
        height: "160px",
        transition: "transform .2s",
        '&:hover': {
            transform: "scale(1.1)",
        }
    }

    return (
        <Box sx={{ ml: 5, mt: 5 }}>
            <Typography color="white" sx={{ fontSize: "h5.fontSize", fontWeight: 'bold', mb: 2 }}>{props.title}</Typography>
            <Box sx={{ '& .movie': { mr: 1 } }}>
                {props.type === 'movie' ?

                    (props.list as Array<MovieInterface>).map((m: MovieInterface) => {
                        return (
                            <Box className="movie" sx={{
                                ...style,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage: `url(https://image.tmdb.org/t/p/original/${m.backdrop_path})`,
                            }}>

                            </Box>
                        )
                    })
                    :
                    (props.list as Array<SerieInterface>).map((m:SerieInterface) => {
                        return (
                            <Box className="movie" sx={{
                                ...style,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage: `url(https://image.tmdb.org/t/p/original/${m.backdrop_path})`,
                            }}>

                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    );
}
