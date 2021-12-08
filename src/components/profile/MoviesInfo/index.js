import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import MovieList from "./MovieList";
import ReviewList from "./ReviewList";
import ArticleList from "./ArticleList";

const MoviesInfo = ({screen}) => {
    return (
        <div>
            {(screen === 'favorite' ||  screen === 'bookmark' || screen === 'recommend') &&
            <MovieList screen={screen}/>}
            {screen === 'review' && <ReviewList/>}
            {screen === 'article' && <ArticleList/>}
        </div>
    )


}
export default MoviesInfo;
