import React, {useEffect} from "react";
import MovieDetailItem from "./movieDetailItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovieDetail} from "../../service/movieDetailService";

const selectMovieDetail = (state) => state.moviedetail;

const MovieDetail = ({movieId}) => {
    console.log("call it");
    let curMovieId = movieId;
    const movieDetail = useSelector(selectMovieDetail);
    const dispatch = useDispatch();
    const func = () => fetchMovieDetail(dispatch, curMovieId);
    useEffect(func, [dispatch, curMovieId]);
    return (
        <>
            <MovieDetailItem movieDetail={movieDetail}/>
        </>
    );

};

export default MovieDetail;