import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <>
            <div className={classes.avatar}>
                <img alt="logo"
                    src='https://res.cloudinary.com/dtpgi0zck/image/upload/s--SsFGdDoP--/c_fill,h_580,w_860/v1/EducationHub/photos/ocean-waves.jpg'></img>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.small} />
                <div>Hello there!</div>
            </div>
        </>
    )
}
export default ProfileInfo;