import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getProfiles} from "../../actions/profile";

const ReviewersList = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.auth);
    const {profiles} = useSelector(state => state.profiles);
    useEffect(()=> {
        getProfiles(dispatch);
    }, []);
    if (!isAuthenticated) {
        return (
            <div className="card">
                <div className="card-body">
                    <p>Sign in to enjoy review articles composed by our invited reviewers!</p>
                    <div className="text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        );
    }
    let reviewers_list = [];
    if (profiles) {
        reviewers_list = profiles.filter(profile => profile.user.type === 'reviewer');
    }
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item" key="k">
                    <h5>Invited Reviewers</h5>
                </li>
                { reviewers_list.length > 0 &&
                reviewers_list.map(profile =>
                    <li className="list-group-item" key={profile._id}>
                        <div className="row">
                            <div className="d-none d-md-block col-md-4">
                                <img src={profile.avatar} className="wd-avatar-rounded-corner" alt="avatar"/>
                            </div>
                            <div className="d-block col-md-8">
                                <div className="wd-no-wrap">
                                    <b>{profile.user.name}</b>
                                </div>
                                <div>Articles: {profile.articles.length}</div>
                            </div>
                        </div>
                    </li>
                )
                }
            </ul>
        </div>
    );
}

export default ReviewersList;