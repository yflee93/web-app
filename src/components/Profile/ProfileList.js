import React from "react";
import {useSelector} from "react-redux";
import ProfileListItem from "./ProfileListItem";

const selectAllWho = (state) => state.who;

const ProfileList = () => {
  const who = useSelector(selectAllWho);

  return (
      <>
        <ul className="list-group">
          {
            who.map(who =>
                <ProfileListItem key={who.id} who={who}/>)
          }
        </ul>
      </>
  )
}

export default ProfileList;