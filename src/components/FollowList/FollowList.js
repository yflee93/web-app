import React from "react";
import FollowListItem from "./FollowListItem";
import {useSelector} from "react-redux";

const selectAllWho =  (state) => state.who;

const FollowList = () => {
  const who = useSelector(selectAllWho);

  return (
      <>
        <ul className="list-group mb-2">
          {
            who.map(who => {
              return ( <FollowListItem key={who.id} who={who}/>);
            })
          }
        </ul>
      </>
  );
}
export default FollowList;