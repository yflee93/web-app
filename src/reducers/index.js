import {combineReducers} from "redux";
import alert from "./alert";
import auth from './auth';
import profile from './profile';
import collection from "./collection";
import profiles from "./profiles";

export default combineReducers({
    alert, auth, profile, collection, profiles
});