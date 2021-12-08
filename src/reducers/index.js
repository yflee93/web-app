import {combineReducers} from "redux";
import alert from "./alert";
import auth from './auth';
import profile from './profile';
import collection from "./collection";
import moviedetail from "./moviedetail";

export default combineReducers({
    alert, auth, profile, collection, moviedetail
});