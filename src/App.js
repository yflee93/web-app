import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import './vendors/bootstrap/css/bootstrap.min.css'
import './vendors/bootstrap/bootstrap.min.css'
import './vendors/fontawesome/css/all.min.css';
import './App.css'

const App = () => {
  return (
      <Router>
        <Fragment>
            <Navbar />
            <Route exact path={["/", "/home"]} component={Home}/>
            <section className="container">
                <Switch>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </section>
        </Fragment>
      </Router>
  );
}

export default App;
