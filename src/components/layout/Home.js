import React from 'react';
import {useSelector} from "react-redux";

const Home = () => {
    const {user} = useSelector(state=>state.auth);
    return (
        <div className="container">
            { user && JSON.stringify(user) }
        </div>
    );
}

export default Home;