import React from "react";
import MovieListItem from "./MovieListItem";
import {useSelector} from "react-redux";

const MovieList = ({screen, owns}) => {
    const {favorites, bookmarks, recommends} = useSelector(state => state.collection);
    let displayCollections;
    switch (screen) {
        case "favorite":
            displayCollections = favorites;
            break;
        case "bookmark":
            displayCollections = bookmarks;
            break;
        case "recommend":
            displayCollections = recommends;
            break;
        default:
            displayCollections =[];
    }
    return (
        <div>
            <ul className="list-group">
                {
                    displayCollections.map((movie, idx) =>
                        <MovieListItem key={idx} movie={movie} screen={screen} owns={owns}/>)
                }
            </ul>
        </div>


    );
}

export default MovieList;