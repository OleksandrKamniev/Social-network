import React from "react";
import classes from "./Friends.module.css";
const Friends = (props) => {

    let friendsElements =
        props.friends.map(f => <Friends friends={f.friends} />);
    return (
        <div className="friends">
            <div>{friendsElements}</div>
        </div>
    )
};
export default Friends;