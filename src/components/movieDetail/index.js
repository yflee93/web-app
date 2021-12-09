import React, {useEffect} from "react";
import MovieDetailItem from "./movieDetailItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovieDetail} from "../../service/movieDetailService";
import {useParams} from "react-router";

const selectMovieDetail = (state) => state.moviedetail;

const MovieDetail = () => {
    console.log("call it");
    const {movieId} = useParams();
    const movieDetail = useSelector(selectMovieDetail);
    const dispatch = useDispatch();
    const func = () => fetchMovieDetail(dispatch, movieId);
    useEffect(func, [dispatch, movieId]);
    return (
        <>
            <MovieDetailItem movieDetail={movieDetail}/>
        </>
    );

};

export default MovieDetail;