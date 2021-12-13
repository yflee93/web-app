import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {getProfiles} from "../../actions/profile";

const CommunityList = () => {
    const dispatch = useDispatch();
    const {profiles} = useSelector(state => state.profiles);
    const navigate = useNavigate();
    useEffect(()=> {
        getProfiles(dispatch);
    }, []);

    let community_list = [];
    if (profiles) {
        community_list = profiles.filter(profile => profile.user.type !== 'reviewer');
    }
    return (
        <div className="mt-3">
            <ul className="list-group">
                <li className="list-group-item" key="k">
                    <h5>Our Community</h5>
                </li>
                { community_list.length > 0 &&
                community_list.map(profile =>
                    <li className="list-group-item" key={profile._id} onClick={()=>navigate(`/profile/${profile.user._id}`)}>
                        <div className="row">
                            <div className="d-none d-md-block col-md-4">
                                <img src={profile.avatar} className="wd-avatar-rounded-corner" alt="avatar"/>
                            </div>
                            <div className="d-block col-md-8">
                                <div className="wd-no-wrap">
                                    <b>{profile.user.name}{"  "}</b>
                                    {profile.user.type === 'admin' &&
                                  <i className="fas fa-user-shield"/>
                                    }
                                </div>
                                <div>Reviews: {profile.reviews.length}</div>
                            </div>
                        </div>
                    </li>
                )
                }
            </ul>
        </div>
    );
}

export default CommunityList;