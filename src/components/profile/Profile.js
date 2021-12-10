import React, {useEffect, useState} from "react";
import BasicInformation from "./BasicInformation";
import CollectionStats from "./CollectionStats";
import MoviesInfo from "./MoviesInfo";
import {fetchCollections} from "../../actions/collection";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentProfile} from "../../actions/profile";
import ReviewersList from "../home/ReviewersList";
import CommunityList from "../home/CommunityList";

const Profile = () => {
    const [showWhichScreen, setShowWhichScreen] = useState('favorite');
    const toggleScreen = (screenName) => {
        setShowWhichScreen(screenName);
    }
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
                    <div className="col-5 col-md-5 col-lg-3">
                        <BasicInformation owns={true}/>
                        {isAuthenticated
                        && profiles &&
                        <CollectionStats toggle={toggleScreen} screen={showWhichScreen} owns={true}/>}
                    </div>
                    <div className="col-7 col-md-7 col-lg-6 col-xl-6 mt-n2">
                        {isAuthenticated && profiles
                        && <MoviesInfo screen={showWhichScreen} owns={true}/>}
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3">
                        <ReviewersList />
                        <CommunityList/>
                    </div>
                </div>
            </div>
        )
};

export default Profile;

