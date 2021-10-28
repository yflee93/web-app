import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("log in");
    };
    return (
        <Fragment>
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
        </Fragment>
    );
}

export default Login;