import React from "react";

const ProfileStats = (props) => {

  return(
      <div className="profile-bottom-container">
        <h5 className="mb-0">My movies</h5>
        <ul className="list-group mt-2">
          <li className="list-group-item">
            <i className="far fa-bookmark fa-fw"></i>
            <button type="button"
                    className="btn btn-light text-nowrap profile-stats-button"
                    onClick={props.displayMovieList}>Want to watch</button>
            <span className="badge bg-primary rounded-pill float-end mt-2">{props.profiles.bookmarks}</span>
          </li>
          <li className="list-group-item">
            <i className="far fa-heart fa-fw"></i>
            <button type="button"
                    className="btn btn-light text-nowrap profile-stats-button"
                    onClick={props.displayMovieList}>Favorite movies</button>
            <span className="badge bg-primary rounded-pill float-end mt-2">{props.profiles.favorites}</span>
          </li>
          <li className="list-group-item">
            <i className="far fa-thumbs-up fa-fw"></i>
            <button type="button"
                    className="btn btn-light text-nowrap profile-stats-button"
                    onClick={props.displayMovieList}>Recommended</button>
            <span className="badge bg-primary rounded-pill float-end mt-2">{props.profiles.recommend}</span>
          </li>
          <li className="list-group-item">
            <i className="far fa-star fa-fw"></i>
            {(props.profiles.userType === 'reviewer') ?
                <button type="button"
                         className="btn btn-light text-nowrap profile-stats-button"
                         onClick={props.displayMovieArticleList}>Articles</button> :
                <button type="button"
                         className="btn btn-light text-nowrap profile-stats-button"
                         onClick={props.displayMovieReviewList}>Ratings and Reviews</button>}
            {(props.profiles.userType === 'reviewer') ?
                <span className="badge bg-primary rounded-pill float-end mt-2">{props.profiles.articles}</span> :
                <span className="badge bg-primary rounded-pill float-end mt-2">{props.profiles.reviews}
                </span>}
          </li>
        </ul>
      </div>
  )
}

export default ProfileStats;