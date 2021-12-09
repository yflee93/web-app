import React from 'react';
import PopularMovies from "./PopularMovies";
import ReviewersList from "./ReviewersList";


const Home = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-9">
                    <PopularMovies />
                </div>
                <div className="col-3">
                    <ReviewersList />
                </div>
            </div>
        </div>
    );
}

export default Home;