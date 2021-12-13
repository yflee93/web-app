import React, {Fragment} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/auth";
import {clearProfile} from "../../actions/profile";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isAuthenticated, loading} = useSelector(state=>state.auth);
    const authLinks = (
        <ul className="navbar-nav float-end">
            <li className="nav-item">
                <a onClick={() => {
                    logout(dispatch);
                }} className="nav-link">
                    <i className="fas fa-sign-out-alt"/> {' '}
                    Logout
                </a>
            </li>
            <li className="nav-item">
                <Link to="/search" className="nav-link">
                    <i className="fas fa-search"/> {' '}
                    Search
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/profile" className="nav-link">
                    <i className="fas fa-user-circle"/> {' '}
                    Profile
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Privacy Content</a>
            </li>
        </ul>
    );
    const guestLinks = (
        <ul className="navbar-nav float-end">
            <li className="nav-item">
                    <a onClick={() => {
                        clearProfile(dispatch);
                        navigate("/login");
                    }} className="nav-link">
                        Login
                    </a>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
                <Link to="/search" className="nav-link">
                    Search
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Privacy Content</a>
            </li>
        </ul>
    );
    return (
        <nav className="navbar navbar-expand navbar-dark wd-dark">
            <div className="container-fluid row">
                <div className="col-3">
                    <Link to="/" className="navbar-brand"><i className="fas fa-film"/>&#160;Movie App</Link>
                </div>

                <div className="col-9">
                    {
                        !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

