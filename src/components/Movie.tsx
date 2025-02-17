import Box from '@mui/material/Box';
import MovieComponentInterface from '../interfaces/propsInterface/BackdropComponentInterface';
import React from 'react';
import MovieModal from './MovieModal';
import MovieDetailsInterface from '../interfaces/movie/MovieDetailsInterface';

export function Movie(props: MovieComponentInterface) {
    const [openModal, setModal] = React.useState(false);
    const [modalData, setModalData] = React.useState({});

    function createModal() {
        getDetail();
    }

    function deleteModal() {
        setModal(false);
    }

    function getDetail() {
        fetch("https://api.themoviedb.org/3/movie/"+ props.data.id + "?api_key=" + process.env.REACT_APP_API_KEY + "&language=fr-FR")
        .then(res => res.json())
        .then(
            (result) => {  
                setModalData(result);
                setModal(true);
            },
            (error) => {
                console.log("error");
                
                return false;
            }
        ) 
    }

    const style = {
        width: "300px",
        height: "160px",
        transition: "transform .2s",
        '&:hover': {
            transform: "scale(1.1)",
        }
    }

    return (
        <div>
            <Box onClick={createModal}
                sx={{
                    ...style,
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.data.backdrop_path})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
            </Box>
            {openModal === true ?
                <MovieModal data={modalData as MovieDetailsInterface} setModal={deleteModal} />
                :
                null
            }
        </div>
    );
}
