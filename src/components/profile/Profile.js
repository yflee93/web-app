import React, {useEffect, useState} from "react";
import BasicInformation from "./BasicInformation";
import CollectionStats from "./CollectionStats";
import MoviesInfo from "./MoviesInfo";
import {fetchCollections} from "../../actions/collection";
import {useDispatch, useSelector} from "react-redux";

const Profile = () => {
    const [showWhichScreen, setShowWhichScreen] = useState('favorite');
    const toggleScreen = (screenName) => {
        setShowWhichScreen(screenName);
    }
    const {profiles} = useSelector(state => state.profile);
    const dispatch = useDispatch();
    useEffect( ()=>{
         fetchCollections(dispatch,
            profiles ? profiles.movieCollections.favorites : [],
            profiles ? profiles.movieCollections.bookmarks : [],
            profiles ? profiles.movieCollections.recommends : [])
    }, [profiles]);
    return (
        <div className="row mt-4">
            <div className="col-4">
                <BasicInformation/>
                <CollectionStats toggle={toggleScreen} screen={showWhichScreen}/>
            </div>
            <div className="col-8 mt-n2">
                <MoviesInfo screen={showWhichScreen}/>
            </div>
        </div>
    )
};

export default Profile;