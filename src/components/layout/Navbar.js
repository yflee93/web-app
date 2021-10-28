import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark wd-dark">
            <div className="container-fluid row">
                <div className="col-3">
                    <Link to="/" className="navbar-brand"><i className="fas fa-home"></i>&#160;APP</Link>
                </div>

                <div className="col-9">
                    <ul className="navbar-nav float-end">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Privacy Content</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

