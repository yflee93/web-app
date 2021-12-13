import React, {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import {login} from "../../actions/auth";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = async (e) => {
        e.preventDefault();
        await login(dispatch, email, password);
    };

    //Redirect if logged in
    if (isAuthenticated) {
        return <Navigate to='/profile'/>
    }


    return (
        <section className="container">
            <h1 className="wd-large text-primary mt-3">Sign In</h1>
            <p className="wd-lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
            <form className="form" onSubmit={e=>onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="email" className="form-label mt-3">Email</label>
                    <input type="email"
                           className="form-control"
                           id="email"
                           name="email"
                           placeholder="Enter Email"
                           required
                           value={email}
                           onChange={e=>onChange(e)}
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="password" className="form-label mt-3">Password</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           name="password"
                           placeholder="Enter Password"
                           required
                           value={password}
                           onChange={e=>onChange(e)}
                    />
                </div>

                <input type="submit" className="btn btn-primary mt-4" value="Login"/>
            </form>
            <p className="my-3">
                Don't have an account yet? <Link to="/register">Sign Up</Link>
            </p>
        </section>
    );
}

export default Login;