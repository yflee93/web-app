import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteCollection} from "../../../actions/collection";
import {useNavigate} from "react-router";

const MovieListItem = ({movie, screen, owns}) => {
    const {
        id,
        title,
        release_date,
        overview,
        poster_path
    } = movie;
    const navigate = useNavigate();
    const {profiles} = useSelector(state => state.profile);

    const dispatch = useDispatch();

    const deleteCollectionClickHandler = () => {
        deleteCollection(dispatch, id, screen, profiles.user._id);
    }

    const {user} = useSelector(state => state.auth);

    return (
        <li className="list-group-item" >
            <div className="card mb-3 movie-list-item-container">
                <div className="row g-0">
                    <div className="col-4">
                        <img src={poster_path}
                             alt="movie_poster"
                             className="img-thumbnail"
                             onClick={()=>{
                                 navigate(`/details/${id}`);
                             }}/>
                    </div>
                    <div className="col-8">
                        {
                            owns && (
                                <i className="fas fa-2x fa-times text-white-50 fa-pull-right"
                                   onClick={deleteCollectionClickHandler} />
                            )
                        }
                        {
                            (!owns && (user && user.type === 'admin')) && (
                                <i className="fas fa-2x fa-user-shield text-danger float-end"
                                   onClick={deleteCollectionClickHandler} />
                            )
                        }
                        <div className="card-body">
                            <h5 className="card-title">{title}
                            </h5>
                            <p className="card-text text-white-50">{release_date}</p>
                            <p className="card-text movie-list-description">
                                {overview.length > 300 ? overview.substring(0, 300) : overview}
                                {overview.length > 300 ? "..." : ""}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default MovieListItem;