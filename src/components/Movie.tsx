import Box from '@mui/material/Box';
import PropsMovieInterface from '../interfaces/propsInterface/PropsMovieInterface';
import Modal from '@mui/material/Modal';
import React from 'react';
import { Typography } from '@mui/material';
import MovieModal from './MovieModal';

export function Movie(props: PropsMovieInterface) {
    const [openModal, setModal] = React.useState(false);
    const [modalData, setModalData] = React.useState({});

    function onMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
        const div: HTMLDivElement = e.target as HTMLDivElement;
        div.style.width = "400px";
        div.style.height = "200px";
    }

    function onMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
        const div: HTMLDivElement = e.target as HTMLDivElement;
        div.style.width = "300px";
        div.style.height = "160px";
    }

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

    return (
        <div>
            <div onClick={createModal} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                style={{
                    width: "300px",
                    height: "160px",
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.data.backdrop_path})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
            </div>
            {openModal === true ?
                <MovieModal data={modalData} setModal={deleteModal} />
                :
                null
            }
        </div>
    );
}
