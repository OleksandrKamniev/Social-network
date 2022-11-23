import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img alt="logo"
                    src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/08/featured.png?auto=format&q=60&w=2060&h=1158.75&fit=crop&crop=faces'></img>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.small} />
                <div>Hello there!</div>
            </div>
        </div>
    )
}
export default ProfileInfo;