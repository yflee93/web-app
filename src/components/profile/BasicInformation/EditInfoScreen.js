import React, { useState }from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentProfile} from "../../../actions/profile";
import {Link} from "react-router-dom";

const EditInfoScreen = ({toggle}) => {
    const {profiles} = useSelector((state => state.profile));
    const {isAuthenticated, user} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    let name = ""
    if (isAuthenticated) {
        name = profiles ? profiles.user.name : user.name
    }

    // update user information
    const [updateProfile, setUpdateProfile] = useState({
        ...profiles,
        name
    });
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

    if (!isAuthenticated) {
        return (
            <div className="card">
                <div className="card-body">
                    <p>You have logged out! Sign in to check profile</p>
                    <div className="text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
            <div className="card">
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
                            onClick={toggle}>Back</button>
                    <button type="button"
                            className="btn btn-outline-primary rounded-pill float-end my-2 me-2"
                            onClick={() =>
                            {updateProfileClickHandler(updateProfile); toggle()}}>Save</button>

                </div>
            </div>
    )

}

export default EditInfoScreen;