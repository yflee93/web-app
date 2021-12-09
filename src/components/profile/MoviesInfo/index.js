import React from "react";
import MovieList from "./MovieList";
import ReviewList from "./ReviewList";
import ArticleList from "./ArticleList";

const MoviesInfo = ({screen, owns}) => {
    return (
        <div>
            {(screen === 'favorite' ||  screen === 'bookmark' || screen === 'recommend') &&
            <MovieList screen={screen} owns={owns}/>}
            {screen === 'review' && <ReviewList owns={owns}/>}
            {screen === 'article' && <ArticleList owns={owns}/>}
        </div>
    )


}
export default MoviesInfo;
