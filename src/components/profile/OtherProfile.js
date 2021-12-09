import React, {useEffect, useState} from "react";
import BasicInformation from "./BasicInformation";
import CollectionStats from "./CollectionStats";
import MoviesInfo from "./MoviesInfo";
import {fetchCollections} from "../../actions/collection";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useParams} from 'react-router';
import {getProfileById} from "../../actions/profile";
import {useNavigate} from "react-router-dom";

const OtherProfile = () => {
    const [showWhichScreen, setShowWhichScreen] = useState('favorite');
    const toggleScreen = (screenName) => {
        setShowWhichScreen(screenName);
    }
    const navigate = useNavigate();
    const {profiles} = useSelector(state => state.profile);
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        getProfileById(dispatch, id);
    }, [id]);
    useEffect( ()=>{
        fetchCollections(dispatch,
            profiles ? profiles.movieCollections.favorites : [],
            profiles ? profiles.movieCollections.bookmarks : [],
            profiles ? profiles.movieCollections.recommends : [])
    }, [profiles]);

    if (user && user._id === id) {
        return <Navigate to='/profile'/>
    }
    return (
        <div className="container">
        <div className="row mt-4">
            <div className="col-4">
                <BasicInformation owns={false}/>
                {profiles && <CollectionStats toggle={toggleScreen} screen={showWhichScreen} owns={false}/>}

            </div>
            <div className="col-8 mt-n2">
                {profiles && <MoviesInfo screen={showWhichScreen} owns={false}/>}

            </div>
        </div>
        </div>
    )
};

export default OtherProfile;