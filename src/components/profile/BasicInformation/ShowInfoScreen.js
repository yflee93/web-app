import React from "react";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'

const ShowInfoScreen = ({toggle}) => {
    const {profiles} = useSelector(state => state.profile);
    const {isAuthenticated} = useSelector(state => state.auth);

    let noAuthComponent = (
        <div className="card">
            <div className="card-body">
                <p>You have logged out! Sign in to check profile</p>
                <div className="text-center mt-3">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );

    let nullProfileComponent = (
        <div className="card">
            <div className="card-body">
                <p>No profile yet, create your profile</p>
                <div className="text-center mt-3">
                    <button type="button"
                            className="btn btn-outline-primary rounded-pill"
                            onClick={toggle}>Create Profile
                    </button>
                </div>
            </div>
        </div>
    );

    if (!isAuthenticated) {
        return noAuthComponent;
    }

    if (!profiles) {
        return nullProfileComponent;
    }
    else {
        return ( <div className="card">
            <img src={profiles.avatar}
                 alt="profile_avatar"
                 className="card-img-top profile-avatar-logo-size rounded-pill mt-4 mx-auto"/>
            <div className="card-body">
                <h5 className="card-title text-center">{profiles.user.name}</h5>
                <p className="card-text text-center">
                    <i className="fas fa-map-marker-alt"/> {profiles.location}</p>
                <hr/>
                <p className="text-center">{profiles.bio}</p>
                <div className="text-center mt-3">
                    <button type="button"
                            className="btn btn-outline-primary rounded-pill"
                            onClick={toggle}>Edit Profile
                    </button>
                </div>
            </div>
        </div>);
    }
}

export default ShowInfoScreen;


