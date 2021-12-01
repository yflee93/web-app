import React, { useEffect, useState }from "react";
import {useDispatch, useSelector} from "react-redux";
import { getCurrentProfile} from "../../services/profileService";
import EditProfile from "./EditProfile";

const Profile = ({displayMovieList}) => {
  const profiles = useSelector((state => state.profile));
  const dispatch = useDispatch();

  // get current profile
  useEffect(() => getCurrentProfile(dispatch), []);

  // toggle between profile and edit profile page
  const [editProfile, setEditProfile] = useState(false);
  const editProfileHandler = () => {
    setEditProfile(true);
  }

/*
  const {
    name,
    bio,
    handle,
    location,
    profilePicture,
    movieCount,
    followingCount,
    followersCount,
    bookmarks,
    reviews,
    favorites,
    recommend
  } = profiles;*/

  return (
      <div>
        {editProfile ?
            <EditProfile/> :
          (<div>
            <div className="card">
              <div className="card">
                <img src={profiles.profilePicture}
                     alt="profile_avatar"
                     className="card-img-top profile-avatar-logo-size rounded-pill mt-4 mx-auto"/>
                <div className="card-body">
                  <h5 className="card-title text-center">{profiles.name}</h5>
                  <p className="card-text text-center">
                    <i className="fas fa-map-marker-alt"></i> {profiles.location}</p>
                  <hr/>
                  <p className="fw-bold text-white mb-0">About me: </p>
                  <p>{profiles.bio}</p>
                  {(profiles.userType === ("general" || "admin")) ?
                      <button type="button"
                              className="btn btn-outline-primary rounded-pill float-end me-2"
                              onClick={editProfileHandler}>edit profile</button> :
                      <button type="button"
                              className="btn btn-outline-primary rounded-pill mt-4"
                              onClick={displayMovieList}>See my movies</button>}

                </div>
              </div>
            </div>
          </div>)}
      </div>
  )
}

export default Profile;