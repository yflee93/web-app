import React from "react";
import MovieDetailItem from "./MovieDetailItem";
import {useParams} from "react-router";

const MovieDetail = () => {
    const {movieId} = useParams();
    return (
        <>
            <MovieDetailItem movieId={movieId}/>
        </>
    );

};

export default MovieDetail;