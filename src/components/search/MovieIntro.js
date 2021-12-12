// component to display introduction of movie

import React from "react";
import Rating from '@mui/material/Rating';
import {useNavigate} from "react-router-dom";


const MovieIntro = ({ movie }) => {
    const navigate = useNavigate();
    const imagePath = 'https://www.themoviedb.org/t/p/original' + movie.poster_path
    return (

        <li className="list-group-item d-flex align-items-center py-2 px-3" onClick={()=>{
            navigate(`/details/${movie.id}`);
        }}>
            <img className="me-3" src={imagePath} width="150" height="200" />
            <div style = {{flexGrow:1}}>
                <div className="col">
                    <div style={{ textAlign : "right"}}>
                        {movie.adult ? <img className="me-3" src="/adult.png" width="20" height="20" /> : null}
                        <Rating name = "read-only" value = {movie.rating} size = "small" precision={0.5}/>
                    </div>

                    <div style={{ paddingBottom: 20 }}>
                        <div style={{ fontSize: 20, fontWeight: "bold" }}>{movie.title}</div>
                        <div style={{ color: "gray" }}>{movie.release_date}</div>
                    </div>

                    <div>{movie.overview}</div>
                </div>
            </div>
        </li>
    );
}
export default MovieIntro;