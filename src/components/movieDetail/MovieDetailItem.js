import React, {useEffect, useState} from "react";
import ReactStars from "react-rating-stars-component";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentProfile} from "../../actions/profile";
import {fetchReview, postReview} from "../../actions/review";
import {fetchArticle, postArticle} from "../../actions/article";
import {deleteCollection, addCollection} from "../../actions/collection";
import {fetchMovieDetail} from "../../actions/movieDetail";
import ReviewList from "./ReviewList";
import ArticleList from "./ArticleList";
import {Link} from "react-router-dom";

const IMAGE_BASE_PATH_POSTER = 'https://image.tmdb.org/t/p/w300';
const IMAGE_BASE_PATH_ACTOR = 'https://image.tmdb.org/t/p/w300';
const IMAGE_BASE_PATH_BACKDROP = 'https://image.tmdb.org/t/p/original';

const MovieDetailItem = ({movieId}) => {
    const dispatch = useDispatch();
    let [userReview, setUserReview] = useState('');
    let [userRating, setUserRating] = useState(0);
    let [userReviewTitle, setUserReviewTitle] = useState('');
    let [userArticle, setUserArticle] = useState('');
    let [userArticleTitle, setUserArticleTitle] = useState('');
    const ratingChanged = (newRating) => {
        setUserRating(newRating);
    };
    const {profiles} = useSelector(state => state.profile);
    const {user} = useSelector(state => state.auth);
    const reviews = useSelector(state => state.review);
    const articles = useSelector(state => state.article);
    const movieDetail = useSelector((state) => state.moviedetail);

    useEffect( ()=>{
        fetchMovieDetail(dispatch, movieId);
        getCurrentProfile(dispatch);
        fetchReview(dispatch, movieId);
        fetchArticle(dispatch, movieId);
    }, [dispatch, movieId]);

    // console.log(movieDetail);

    const submitReviewClickHandler = () => {
        let reviewInfo = {
            content: userReview,
            rating: userRating,
            poster: `${IMAGE_BASE_PATH_POSTER}${movieDetail.poster_path}`,
            title: userReviewTitle,
            movieName: movieDetail.original_title,
            movieRating: movieDetail.vote_average,

        }
        postReview(dispatch, movieId, reviewInfo);
        window.location.reload();
    };

    const submitArticleClickHandler = () => {
        let articleInfo = {
            content: userArticle,
            poster: `${IMAGE_BASE_PATH_POSTER}${movieDetail.poster_path}`,
            title: userArticleTitle,
            movieName: movieDetail.original_title,
            movieRating: movieDetail.vote_average
        }
        postArticle(dispatch, movieId, articleInfo);
        window.location.reload();
    };

    if (movieDetail){
        const isFavorite = profiles ? (profiles.movieCollections.favorites.findIndex((id) => id === movieDetail.id) !== -1) : false;
        const isBookmark = profiles ? (profiles.movieCollections.bookmarks.findIndex((id) => id === movieDetail.id) !== -1) : false;
        const isRecommend = profiles ? (profiles.movieCollections.recommends.findIndex((id) => id === movieDetail.id) !== -1) : false;
        const updateCollectionClickHandler = (collection, isEnabled) => {
            if (profiles) {
                if (isEnabled) {
                    deleteCollection(dispatch, movieDetail.id, collection, profiles.user._id);
                }
                else {
                    addCollection(dispatch, movieDetail.id, collection, profiles.user._id);
                }
            }
        }
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
                                    <p className="mb-0" style={{"fontWeight": "bold"}}>Status</p>
                                    <p className="mt-0">{movieDetail.status}</p>
                                </div>
                                <div className="col-4 ps-0 pe-0 subtitlediv">
                                    <p className="mb-0" style={{"fontWeight": "bold"}}>Average Score (from TMDB)</p>
                                    <p className="mt-0">{movieDetail.vote_average}</p>
                                </div>
                                <div className="col-4 ps-0 pe-0 subtitlediv">
                                    <p className="mb-0" style={{"fontWeight": "bold"}}>Popularity</p>
                                    <p className="mt-0">{movieDetail.popularity}</p>
                                </div>
                            </div>
                            { profiles &&
                            <div className="row pt-4" onClick={() => updateCollectionClickHandler("favorite", isFavorite)}>
                                {/*<div className="row pt-4">*/}
                                {
                                    isFavorite &&
                                    <i className="fas fa-heart ps-0" style={{"color": isFavorite ? "red" : "white"}}> Like </i>
                                }
                                {
                                    !isFavorite &&
                                    <i className="far fa-heart ps-0"> Like </i>
                                }
                            </div>}
                            { profiles &&
                            <div className="row" onClick={() => updateCollectionClickHandler("bookmark", isBookmark)}>
                                {/*<div className="row">*/}
                                {
                                    isBookmark &&
                                    <i className="fas fa-bookmark mt-3 ps-0" style={{"color": isBookmark ? "yellow" : "white"}}> WatchList </i>
                                }
                                {
                                    !isBookmark &&
                                    <i className="far fa-bookmark mt-3 ps-0"> WatchList </i>
                                }
                            </div>}
                            {profiles &&
                            <div className="row" onClick={() => updateCollectionClickHandler("recommend", isRecommend)}>
                                {/*<div className="row">*/}
                                {
                                    isRecommend &&
                                    <i className="fas fa-thumbs-up mt-3 ps-0" style={{"color": isRecommend ? "yellow" : "white"}}> Recommend </i>
                                }
                                {
                                    !isRecommend &&
                                    <i className="far fa-thumbs-up mt-3 ps-0"> Recommend </i>
                                }
                            </div>}
                            { !profiles &&
                            <Link to={"/login"} className="row pt-4" style={{textDecoration: 'none', color: 'white'}}>
                                <i className="far fa-heart ps-0"> Like </i>
                            </Link>}
                            { !profiles &&
                            <Link to={"/login"} className="row" style={{ textDecoration: 'none', color: 'white'}}>
                                <i className="far fa-bookmark mt-3 ps-0"> WatchList </i>
                            </Link>}
                            {!profiles &&
                            <Link to={"/login"} className="row" style={{ textDecoration: 'none', color: 'white'}}>
                                <i className="far fa-thumbs-up mt-3 ps-0"> Recommend </i>
                            </Link>}
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
                                    {/*{reviews.length > 0 ? reviews[0].content : ""}*/}
                                    <ReviewList reviews={reviews}/>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="introtitlediv ps-4">
                                MOVIE ARTICLES
                            </div>
                            <div className="col-12 pt-2 pb-2">
                                <div className="row subtitlediv">
                                    <ArticleList articles={articles}/>
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
                    { profiles &&
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
                            <input placeholder="Title" className="mt-3 mb-3 form-control"
                                   aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                   value={userReviewTitle}
                                   onChange={(event) =>
                                       setUserReviewTitle(event.target.value)}
                                   spellCheck="false" style={{"width": "50%", "fontSize": "small"}}/>
                            <textarea placeholder="Write your review here!" className="mt-0 mb-0 form-control"
                                      value={userReview}
                                      aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                      onChange={(event) =>
                                          setUserReview(event.target.value)}
                                      spellCheck="false" style={{"width": "70%"}}/>
                        </div>
                        <div className="row mt-2 mb-3">
                            <div className="col-11">
                                <i className="fas fa-images pe-3" style={{"color": "rgb(29,161,242)"}}></i>
                                <i className="fas fa-chart-line pe-3" style={{"color": "rgb(29,161,242)"}}></i>
                                <i className="far fa-smile-wink pe-3" style={{"color": "rgb(29,161,242)"}}></i>
                                <i className="fas fa-calendar-week pe-3" style={{"color": "rgb(29,161,242)"}}></i>
                            </div>
                            <div className="col-1">
                                <button type="button"
                                        className="btn btn-primary blue-button ps-1"
                                        style={{"width": "100%"}}
                                        onClick={submitReviewClickHandler}
                                >Submit
                                </button>
                            </div>
                        </div>
                    </div>}
                    {  user && (user.type === "reviewer" || user.type === "admin") && profiles &&
                    <div className="row mt-4">
                        <div className="introtitledivnobanner ps-2">
                            WRITE ARTICLE
                        </div>
                        <div className="row">
                            <input placeholder="Title" className="mt-3 mb-3 form-control"
                                   aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                   value={userArticleTitle}
                                   onChange={(event) =>
                                       setUserArticleTitle(event.target.value)}
                                   spellCheck="false" style={{"width": "50%", "fontSize": "small"}}/>
                            <textarea placeholder="Write your article here!" className="mt-0 mb-0 form-control"
                                      value={userArticle}
                                      aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                      onChange={(event) =>
                                          setUserArticle(event.target.value)}
                                      spellCheck="false" style={{"width": "70%"}}/>
                        </div>
                        <div className="row mt-2 mb-3">
                            <div className="col-11">
                                {/*<i className="fas fa-images pe-3" style={{"color": "rgb(29,161,242)"}}></i>*/}
                                {/*<i className="fas fa-chart-line pe-3" style={{"color": "rgb(29,161,242)"}}></i>*/}
                                {/*<i className="far fa-smile-wink pe-3" style={{"color": "rgb(29,161,242)"}}></i>*/}
                                {/*<i className="fas fa-calendar-week pe-3" style={{"color": "rgb(29,161,242)"}}></i>*/}
                            </div>
                            <div className="col-1">
                                <button type="button"
                                        className="btn btn-primary blue-button ps-1"
                                        style={{"width": "100%"}}
                                        onClick={submitArticleClickHandler}
                                >Submit
                                </button>
                            </div>
                        </div>
                    </div>}
                </div>
            </>
        );
    }
    else {
        return (
            <></>
        );
    }
}

export default MovieDetailItem;
