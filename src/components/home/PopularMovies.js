import React, {useEffect, useState} from 'react';
import axios from "axios";
import MovieIntro from "../search/MovieIntro";

const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?api_key=6ecbcc32f1691bbd0ef5826095745798";

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=> {
        axios.get(POPULAR_URL, {transformRequest: (data, headers) => {
                delete headers.common['x-auth-token'];
                return data;
            }
        }).then(
            res => setMovies(res.data.results)
        );

    }, []);

    return (<div>
        <ul className="list-group">
            { movies.length > 0 &&
            movies.map((movie,idx) =>

                <MovieIntro movie={movie} key={idx}/>

            )
            }
        </ul>
    </div>);
}

export default PopularMovies;