import React from 'react';
import PopularMovies from "./PopularMovies";
import ReviewersList from "./ReviewersList";
import CommunityList from "./CommunityList";


const Home = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-9">
                    <PopularMovies />
                </div>
                <div className="col-3">
                    <ReviewersList />
                    <CommunityList/>
                </div>
            </div>
        </div>
    );
}

export default Home;