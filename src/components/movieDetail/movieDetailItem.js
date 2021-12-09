import React from "react";
import "./itemPage.css";
import exampleMovieDetail from "./exampleMovieDetail.json";
import ReactStars from "react-rating-stars-component";

// import {Link} from "react-router-dom";

const IMAGE_BASE_PATH_POSTER = 'https://image.tmdb.org/t/p/w300';
const IMAGE_BASE_PATH_ACTOR = 'https://image.tmdb.org/t/p/w300';
const IMAGE_BASE_PATH_BACKDROP = 'https://image.tmdb.org/t/p/original';

const ratingChanged = (newRating) => {
    console.log(newRating);
};

const MovieDetailItem = ({movieDetail = {exampleMovieDetail}}) => {
    if (movieDetail){
        return (
            <>
                <div className="container-fluid ps-4 pe-4">
                    <div className="row bg-light">
                        <div className="col-4 pt-4 pb-4 ps-4">
                            <img src={`${IMAGE_BASE_PATH_POSTER}${movieDetail.poster_path}`} alt=""/>
                        </div>
                        <div className="col-8 pt-4 pb-4">
                            <div className="row titlediv">
                                {movieDetail.original_title}
                            </div>
                            <div className="row subtitlediv pt-2 pb-2">
                                {/*PG 2021-11-12 (US) Family, Comedy 1h 33m*/}
                                {movieDetail.release_date} {movieDetail.genres[0].name} {movieDetail.runtime}mins
                            </div>
                            <div className="row pt-4 pb-2">
                                <div className="col-4 ps-0 pe-0 subtitlediv">
                                    <p className="mb-0" style={{"font-weight": "bold"}}>Status</p>
                                    <p className="mt-0">{movieDetail.status}</p>
                                </div>
                                <div className="col-4 ps-0 pe-0 subtitlediv">
                                    <p className="mb-0" style={{"font-weight": "bold"}}>Average Score</p>
                                    <p className="mt-0">{movieDetail.vote_average}</p>
                                </div>
                                <div className="col-4 ps-0 pe-0 subtitlediv">
                                    <p className="mb-0" style={{"font-weight": "bold"}}>Popularity</p>
                                    <p className="mt-0">{movieDetail.popularity}</p>
                                </div>
                            </div>
                            <div className="row pt-4">
                                <i className="far fa-heart ps-0"> Like </i>
                                <i className="far fa-bookmark mt-3 ps-0"> WatchList </i>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="row mt-4">
                            <div className="introtitlediv ps-4">
                                MOVIE ACTORS
                            </div>
                            <div className="scrollmenu">
                                <a href="#home">
                                    <div className="card col-4" style={{"width": "10rem"}}>
                                        <img src={`${IMAGE_BASE_PATH_ACTOR}${movieDetail.credits.cast[0].profile_path}`}
                                             className="card-img-top" alt=""/>
                                        <div className="card-body actorcarddiv">
                                            <p className="card-title">{movieDetail.credits.cast[0].name}</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#home">
                                    <div className="card col-4" style={{"width": "10rem"}}>
                                        <img src={`${IMAGE_BASE_PATH_ACTOR}${movieDetail.credits.cast[1].profile_path}`}
                                             className="card-img-top" alt=""/>
                                        <div className="card-body actorcarddiv">
                                            <p className="card-title">{movieDetail.credits.cast[1].name}</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#home">
                                    <div className="card col-4" style={{"width": "10rem"}}>
                                        <img src={`${IMAGE_BASE_PATH_ACTOR}${movieDetail.credits.cast[2].profile_path}`}
                                             className="card-img-top" alt=""/>
                                        <div className="card-body actorcarddiv">
                                            <p className="card-title">{movieDetail.credits.cast[2].name}</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#home">
                                    <div className="card col-4" style={{"width": "10rem"}}>
                                        <img src={`${IMAGE_BASE_PATH_ACTOR}${movieDetail.credits.cast[3].profile_path}`}
                                             className="card-img-top" alt=""/>
                                        <div className="card-body actorcarddiv">
                                            <p className="card-title">{movieDetail.credits.cast[3].name}</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#home">
                                    <div className="card col-4" style={{"width": "10rem"}}>
                                        <img src={`${IMAGE_BASE_PATH_ACTOR}${movieDetail.credits.cast[4].profile_path}`}
                                             className="card-img-top" alt=""/>
                                        <div className="card-body actorcarddiv">
                                            <p className="card-title">{movieDetail.credits.cast[4].name}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="introtitlediv ps-4">
                                MOVIE OVERVIEW
                            </div>
                            <div className="col-12 pt-2 pb-2">
                                <div className="row subtitlediv">
                                    {movieDetail.overview}
                                </div>
                            </div>
                        </div>


                        <div className="row mt-4">
                            <div className="introtitlediv ps-4">
                                MOVIE REVIEWS
                            </div>
                            <div className="col-12 pt-2 pb-2">
                                <div className="row subtitlediv">
                                    After being left at home by himself for the holidays, 10-year-old Max Mercer must work
                                    to defend his home from a married couple who tries to steal back a valuable heirloom.
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="introtitlediv ps-4">
                                MOVIE ARTICLES
                            </div>
                            <div className="col-12 pt-2 pb-2">
                                <div className="row subtitlediv">
                                    After being left at home by himself for the holidays, 10-year-old Max Mercer must work
                                    to defend his home from a married couple who tries to steal back a valuable heirloom.
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="introtitlediv ps-4">
                                MOVIE IMAGES
                            </div>
                            <div className="col-12 pt-2 pb-2 ps-3 pe-3">
                                <div className="row subtitlediv">
                                    <img src={`${IMAGE_BASE_PATH_BACKDROP}${movieDetail.backdrop_path}`} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="introtitlediv ps-4">
                                RECOMMENDATIONS
                            </div>
                            <div className="col-12 pt-2 pb-2">
                                <div className="scrollmenu">
                                    <a href="#home">
                                        <div className="card col-4" style={{"width": "10rem"}}>
                                            <img src={`${IMAGE_BASE_PATH_ACTOR}${movieDetail.similar.results[0].poster_path}`}
                                                 className="card-img-top" alt=""/>
                                            <div className="card-body actorcarddiv">
                                                <p className="card-title">{movieDetail.similar.results[0].title}</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#home">
                                        <div className="card col-4" style={{"width": "10rem"}}>
                                            <img src={`${IMAGE_BASE_PATH_ACTOR}${movieDetail.similar.results[1].poster_path}`}
                                                 className="card-img-top" alt=""/>
                                            <div className="card-body actorcarddiv">
                                                <p className="card-title">{movieDetail.similar.results[1].title}</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#home">
                                        <div className="card col-4" style={{"width": "10rem"}}>
                                            <img src={`${IMAGE_BASE_PATH_ACTOR}${movieDetail.similar.results[2].poster_path}`}
                                                 className="card-img-top" alt=""/>
                                            <div className="card-body actorcarddiv">
                                                <p className="card-title">{movieDetail.similar.results[2].title}</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#home">
                                        <div className="card col-4" style={{"width": "10rem"}}>
                                            <img src={`${IMAGE_BASE_PATH_ACTOR}${movieDetail.similar.results[3].poster_path}`}
                                                 className="card-img-top" alt=""/>
                                            <div className="card-body actorcarddiv">
                                                <p className="card-title">{movieDetail.similar.results[3].title}</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#home">
                                        <div className="card col-4" style={{"width": "10rem"}}>
                                            <img src={`${IMAGE_BASE_PATH_ACTOR}${movieDetail.similar.results[4].poster_path}`}
                                                 className="card-img-top" alt=""/>
                                            <div className="card-body actorcarddiv">
                                                <p className="card-title">{movieDetail.similar.results[4].title}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="introtitlediv ps-4">
                            WRITE REVIEW
                        </div>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            filledIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <div className="row">
                            <textarea placeholder="Wirte your review here!" className="mt-3 mb-3"
                                                       spellCheck="false" style={{"width": "100%"}}>
                            </textarea>
                        </div>
                        <div className="row">
                            <div className="col-11">
                                <i className="fas fa-images pe-3" style={{"color": "rgb(29,161,242)"}}></i>
                                <i className="fas fa-chart-line pe-3" style={{"color": "rgb(29,161,242)"}}></i>
                                <i className="far fa-smile-wink pe-3" style={{"color": "rgb(29,161,242)"}}></i>
                                <i className="fas fa-calendar-week pe-3" style={{"color": "rgb(29,161,242)"}}></i>
                            </div>
                            <div className="col-1">
                                <button type="button"
                                        className="btn btn-primary blue-button ps-1"
                                        style={{"width": "100%"}}>Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MovieDetailItem;