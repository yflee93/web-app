import {combineReducers} from "redux";
import alert from "./alert";
import auth from './auth'
import moviedetail from "./moviedetail";

export default combineReducers({
    alert, auth, moviedetail
});