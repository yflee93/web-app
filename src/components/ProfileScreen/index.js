import React, {useState} from "react";
import {useSelector} from "react-redux";

// import profile page
import Profile from "../Profile/Profile";
import ProfileStats from "../Profile/ProfileStats";
import ProfileList from "../Profile/ProfileList";

// import follow list
import FollowListHeading from "../FollowList/FollowListHeading";
import FollowList from "../FollowList/FollowList";

// import movie list
import MovieReviewList from "../MoviesList/MovieReviewList";
import MovieList from "../MoviesList/MovieList";


const ProfileScreen = () => {
  const profiles = useSelector((state => state.profile));
  //toggle to different pages when click
  const [displayPage, setDisplayPage] = useState(0);

  const displayMovieList = () => {
    setDisplayPage(0);
  }

  const displayMovieReviewList = () => {
    setDisplayPage(1);
  }

  const displayFollowerList = () => {
    setDisplayPage(2);
  }

  const displayFollowingList = () => {
    setDisplayPage(3);
  }

  return (
      <div className="row mt-2">
        <div className="col-5 col-md-5 col-lg-3">
          <Profile displayMovieList={displayMovieList}
                   displayMovieReviewList={displayMovieReviewList}
                   displayFollowerList={displayFollowerList}
                   displayFollowingList={displayFollowingList}/>
          {(profiles.userType === ("general" || "admin")) ?
              <ProfileStats displayMovieList={displayMovieList}
                            displayMovieReviewList={displayMovieReviewList}
                            profiles={profiles}/> : ''}
        </div>
        <div className="col-7 col-md-7 col-lg-6 col-xl-6 mt-n2">
          {(displayPage === 0) && <MovieList/>}
          {(displayPage === 1) && <MovieReviewList/>}
          {(displayPage === 2) &&
          <FollowListHeading heading="Followers" displayFollowerList={displayFollowerList}/>
            && <ProfileList/>}
          {(displayPage === 3) &&
          <FollowListHeading heading="Following" displayFollowingList={displayFollowingList}/>
            && <ProfileList/>}

        </div>
        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3">
          <div>
            <FollowListHeading heading="Followers" displayFollowerList={displayFollowerList}/>
            <FollowList/>
          </div>
          <div className="mt-5">
            <FollowListHeading heading="Following" displayFollowingList={displayFollowingList}/>
            <FollowList/>
          </div>
        </div>
      </div>
  )
}

export default ProfileScreen;