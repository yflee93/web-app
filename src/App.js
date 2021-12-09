import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from './components/layout/Alert';
import Profile from "./components/profile/Profile";
import OtherProfile from './components/profile/OtherProfile';

//Authentication
import setAuthToken from './utils/setAuthToken';
import {loadUser} from "./actions/auth";

import MovieDetail from "./components/movieDetail";
import {getCurrentProfile} from "./actions/profile";


//Styles
import './vendors/bootstrap/css/bootstrap.min.css'
import './vendors/bootstrap/bootstrap.min.css'
import './vendors/fontawesome/css/all.min.css';
import './App.css'

//Redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(()=> {
         loadUser(store.dispatch);
    }, []);
  return (
      <Provider store={store}>
      <Router>
            <Navbar />
            <Alert />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="home" element={<Home />}/>
                <Route path="register" element={<Register />}/>
                <Route path="login" element={<Login />}/>
                <Route path="profile/:id" element={<OtherProfile />}/>
                <Route path="profile" element={<Profile/>}/>
                <Route exact={true} path="/details/:movieId" element={<MovieDetail />}/>
            </Routes>
      </Router>
      </Provider>
  );
}

export default App;
