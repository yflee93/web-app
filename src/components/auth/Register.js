import React, { useState } from 'react';
import {Link, Navigate} from 'react-router-dom';
import {setAlert} from "../../actions/alert";
import {register} from "../../actions/auth";
import {useDispatch, useSelector} from "react-redux";

const Register = () => {
    console.log("call register");
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const [formData, setFormData] = useState({
        name: '',
        type: 'general',
        code: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, type, code, email, password, password2} = formData;

    const onChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })}

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert(dispatch, "Passwords do not match!", "danger");
        }
        else {
            await register(dispatch, {name, type, code, email, password});
        }
    }

    //Redirect if logged in
    if (isAuthenticated) {
        return <Navigate to='/profile'/>
    }
    return (
        <section className="container">
            <h1 className="wd-large text-primary mt-3">Sign Up</h1>
            <p className="wd-lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e=>onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label mt-3">Name</label>
                    <input type="text"
                           className="form-control"
                           id="name"
                           name="name"
                           value={name}
                           placeholder="Enter name"
                           required
                           onChange={e => onChange(e)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="type" className="form-label mt-3">User Type</label>
                    <select className="form-select" id="type" name="type" onChange={e =>onChange(e)}>
                        <option value="general">General user</option>
                        <option value="reviewer">Invited reviewer</option>
                        <option value="admin">Administrator</option>
                    </select>
                </div>

                { (type === "reviewer" || type === "admin") &&
                    (<div className="form-group">
                    <label htmlFor="code" className="form-label mt-3">Verification Code</label>
                    <input type="text"
                           className="form-control"
                           id="code"
                           name="code"
                           placeholder="Enter Verification Code"
                           value={code}
                           onChange={e => onChange(e)}
                    />
                </div>)}

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

                <div className="form-group">
                    <label htmlFor="password2" className="form-label mt-3">Confirm Password</label>
                    <input type="password"
                           className="form-control"
                           id="password2"
                           name="password2"
                           placeholder="Confirm Password"
                           required
                           value={password2}
                           onChange={e=>onChange(e)}
                    />
                </div>

                <input type="submit" className="btn btn-primary mt-4" value="Register"/>
            </form>
            <p className="my-3">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </section>
    );
}

export default Register;