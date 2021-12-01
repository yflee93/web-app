import React from "react";
import {useSelector} from "react-redux";

const FollowListHeading = (props) => {
  const profiles = useSelector((state => state.profile));
  const displayFollowerList = props.displayFollowerList;
  const displayFollowingList = props.displayFollowingList;

  return (
      <div className="mt-2 mb-1">
        {(props.heading === "Followers") ?
            <h5>{props.heading} <button type="button"
                                        className="btn btn-sm btn-primary rounded-pill px-3 follow-list-button"
                                        onClick={displayFollowerList}>{profiles.followersCount}</button></h5> : ''}
        {(props.heading === "Following") ?
            <h5>{props.heading} <button type="button"
                                        className="btn btn-sm btn-primary rounded-pill px-3 follow-list-button"
                                        onClick={displayFollowingList}>{profiles.followingCount}</button></h5> : ''}
      </div>
  )
}

export default FollowListHeading;
