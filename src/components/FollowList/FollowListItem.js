import React from "react";

const FollowListItem = ({who}) => {
  return (
      <>
        <li className="list-group-item text-white border-0">
          <div className="row">
            <div className="col-3">
              <img src= {who.avatarIcon}
                   alt="avatar_Icon"
                   className="follower-avatar-logo-size rounded-circle rounded-circle bg-white"/>
            </div>
            <div className="col-9 ps-2">
              <p className="mb-0"><span className="fw-bold">{who.userName} </span>
                <i className="fas fa-check-circle"></i></p>
              <p className="mb-0 text-white-50">@{who.handle}</p>
            </div>
          </div>
        </li>
      </>
  );
}
export default FollowListItem;