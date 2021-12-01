import React, { useState }from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentProfile} from "../../services/profileService";
import Profile from "./Profile";
import ProfileStats from "./ProfileStats";

const EditProfile = ({displayMovieList, displayMovieReviewList}) => {
  const profiles = useSelector((state => state.profile));
  const dispatch = useDispatch();

  // toggle between profile and edit profile page
  const [saveProfile, setSaveProfile] = useState(false);
  const saveProfileHandler = () => {
    setSaveProfile(true);
  }

  // update user information
  const [updateProfile, setUpdateProfile] = useState(profiles);
  const profileChangeHandler = (event) => {
    const newValue = event.target.value;
    setUpdateProfile({
      ...updateProfile,
      [event.target.name]: newValue,
    });
  }

  const updateProfileClickHandler = (payload) => {
    updateCurrentProfile(dispatch, payload);
  }

 /* const {
    name,
    bio,
    location,
    handle,
    profilePicture,
  } = profiles;*/

  return (
      <div>
        {saveProfile ?
            <Profile/> :
        (<div>
          <div className="card">
            <div className="card">
              <img src={profiles.profilePicture}
                   alt="profile_avatar"
                   className="card-img-top profile-avatar-logo-size rounded-pill mt-4 mx-auto"/>
            </div>
            <div>
              <form className="mx-2">
                <div className="form-group">
                  <label
                      className="mt-2 ms-2 mb-0 text-white-50">Name</label>
                  <input type="text"
                         id="name"
                         value={updateProfile.name}
                         onChange={profileChangeHandler}
                         name="name"
                         className="form-control bg-black text-white ps-2"/>
                </div>
                <div className="form-group">
                  <label
                      className="mt-2 ms-2 mb-0 text-white-50">Bio</label>
                  <textarea id="bio"
                            value={updateProfile.bio}
                            onChange={profileChangeHandler}
                            name="bio"
                            className="form-control bg-black text-white ps-2">
                  </textarea>
                </div>
                <div className="form-group">
                  <label
                      className="mt-2 ms-2 mb-0 text-white-50">Location</label>
                  <input type="text"
                         value={updateProfile.location}
                         onChange={profileChangeHandler}
                         name="location"
                         className="form-control bg-black text-white ps-2"/>
                </div>
              </form>
              <button type="button"
                      className="btn btn-outline-primary rounded-pill ms-2 mt-2"
                      onClick={saveProfileHandler}>Back</button>
              <button type="button"
                      className="btn btn-outline-primary rounded-pill float-end my-2 me-2"
                      onClick={() =>
                      {updateProfileClickHandler(updateProfile); saveProfileHandler()}}>save</button>

            </div>
          </div>
          <ProfileStats displayMovieList={displayMovieList}
                        displayMovieReviewList={displayMovieReviewList}
                        profiles={profiles}/>
        </div>
        )
       }
      </div>
  )
}

export default EditProfile;