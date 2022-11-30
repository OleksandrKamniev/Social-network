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
            <div className={classes.contacts}> <h3>Contacts</h3>
                <ul className={classes.contactsList}>
                    <li> <a href={props.profile.contacts.facebook}
                        className={classes.elementContactsList} >Facebook</a></li>
                    <li> <a href={props.profile.contacts.website}
                        className={classes.elementContactsList}>Website</a></li>
                    <li> <a href={props.profile.contacts.vk}
                        className={classes.elementContactsList}>Vk</a></li>
                    <li> <a href={props.profile.contacts.twitter}
                        className={classes.elementContactsList}>Twitter</a></li>
                    <li> <a href={props.profile.contacts.instagram}
                        className={classes.elementContactsList}>Instagram</a></li>
                    <li> <a href={props.profile.contacts.youtube}
                        className={classes.elementContactsList}>Youtube</a></li>
                    <li> <a href={props.profile.contacts.github}
                        className={classes.elementContactsList}>GitHub</a></li>
                    <li> <a href={props.profile.contacts.mainLink}
                        className={classes.elementContactsList}>ManiLink</a></li>
                </ul>
            </div>
            <div className={classes.lookingForAJob}>
                Looking for a job
            </div>
        </>
    )
}
export default ProfileInfo;