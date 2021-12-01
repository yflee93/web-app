import React from "react";

const MovieListItem = ({who}) => {

  return (
      <li className="list-group-item">
        <div className="card mb-3 movie-list-item-container">
          <div className="row g-0">
            <div className="col-4">
              <img src={who.avatarIcon}
                   alt="movie_poster"
                   className="img-fluid movie-poster"/>
            </div>
            <div className="col-8">
              <i className="fas fa-times text-white-50 fa-pull-right"></i>
              <div className="card-body">
                <h5 className="card-title">{who.userName}</h5>
                <p className="card-text text-white-50">
                  <i className="fas fa-map-marker-alt"></i> {who.location}</p>
                <hr/>
                <div className="card-text movie-list-description">
                  <p className="fw-bold">About me: </p>
                  <p className="text-white-50">{who.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
  )
}

export default MovieListItem;