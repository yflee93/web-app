import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import {loadUser} from "./actions/auth";
import MovieDetail from "./components/movieDetail";

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
    useEffect(()=> loadUser(store.dispatch), []);
  return (
      <Provider store={store}>
      <Router>
          <Fragment>
            <Navbar />
            <Route exact={true} path={["/", "/home"]} component={Home}/>
            <section className="container">
                <Alert/>
                <Switch>
                    <Route exact={true} path="/register" component={Register}/>
                    <Route exact={true} path="/login" component={Login}/>
                    {/*<Route exact path="/itemDetail" component={MovieDetail}/>*/}
                    <Route exact={true} path="/details/:movieId"
                        render={(props)=> {
                                    // console.log("props.match.params.movieId:");
                                    // console.log(props.match.params.movieId);
                                    return <MovieDetail movieId={props.match.params.movieId}/>;
                                }
                        }
                    />
                </Switch>
            </section>
        </Fragment>
      </Router>
      </Provider>
  );
}

export default App;
