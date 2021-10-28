import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2} = formData;

    const onChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log("Password do not match");
        }
        else {
            console.log(formData);
        }
    }
    return (
        <Fragment>
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
        </Fragment>
    );
}

export default Register;