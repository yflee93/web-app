import React from "react";
import MovieDetailItem from "./movieDetailItem";
import {useParams} from "react-router";

const MovieDetail = () => {
    console.log("call it");
    const {movieId} = useParams();
    return (
        <>
            <MovieDetailItem movieId={movieId}/>
        </>
    );

};

export default MovieDetail;