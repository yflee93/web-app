import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import {loadUser} from "./actions/auth";


//Reducers
import who from "../src/reducers/who";
import profile from "../src/reducers/profile";
import movies from "../src/reducers/movies";

//Styles
import './vendors/bootstrap/css/bootstrap.min.css'
import './vendors/bootstrap/bootstrap.min.css'
import './vendors/fontawesome/css/all.min.css';
import './App.css'

//Redux
import { Provider } from 'react-redux';
import store from './store';
import ProfileScreen from "./components/ProfileScreen";


if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(async ()=> await loadUser(store.dispatch), []);
  return (
      <Provider store={store}>
      <Router>
        <Fragment>
            <Navbar />
            <Route exact path={["/", "/home"]} component={Home}/>
            <section className="container">
                <Alert/>
                <Switch>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/profile" component={ProfileScreen}/>
                </Switch>
            </section>
        </Fragment>
      </Router>
      </Provider>
  );
}

export default App;
