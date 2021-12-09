import React, {useEffect, useState} from "react";
import BasicInformation from "./BasicInformation";
import CollectionStats from "./CollectionStats";
import MoviesInfo from "./MoviesInfo";
import {fetchCollections} from "../../actions/collection";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentProfile} from "../../actions/profile";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const [showWhichScreen, setShowWhichScreen] = useState('favorite');
    const toggleScreen = (screenName) => {
        setShowWhichScreen(screenName);
    }
    const navigate = useNavigate();
    const {profiles} = useSelector(state => state.profile);
    const {isAuthenticated} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect( ()=>{
          getCurrentProfile(dispatch);
    }, []);
    useEffect( ()=>{
          fetchCollections(dispatch,
            profiles ? profiles.movieCollections.favorites : [],
            profiles ? profiles.movieCollections.bookmarks : [],
            profiles ? profiles.movieCollections.recommends : []);
    }, [profiles]);

    return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-4">
                        <BasicInformation owns={true}/>
                        {isAuthenticated
                        && profiles &&
                        <CollectionStats toggle={toggleScreen} screen={showWhichScreen} owns={true}/>}
                    </div>
                    <div className="col-8 mt-n2">
                        {isAuthenticated && profiles
                        && <MoviesInfo screen={showWhichScreen} owns={true}/>}
                    </div>
                </div>
            </div>
        )
};

export default Profile;

