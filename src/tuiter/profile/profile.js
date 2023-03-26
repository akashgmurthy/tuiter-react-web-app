import React, {useState} from "react";
import EditProfile from "../edit-profile";
import {useSelector} from "react-redux";
import "./index.css";

const Profile = () => {

    const profile = useSelector(state => state.profile);
    console.log("Profile")
    console.log(profile);
    const [isEditEnabled, setEditEnabled] = useState(false);

    if (isEditEnabled === true) {
        return <EditProfile profile={profile}/>
    }

    const handleEditProfile = () => {
        setEditEnabled(true);
    }
    
    return (
        <>
            <div className="profile-header">
                <div className="row mb-2">
                    <div className="col-1 mt-3 wd-back"><i className="fas fa-arrow-left"></i></div>
                    <div className="col-11">
                        <div
                            className="wd-profile-name">{profile.firstName} {profile.lastName}</div>
                        <span>{profile.noOfTweets}</span> Tweets
                    </div>
                    
                </div>
                <img className="image" alt="banner"
                     src={profile.bannerPicture}
                     width="100%" height="250px"/>
                <img className="rounded-circle wd-profile-img" alt="banner"
                     src={profile.profilePicture}
                     width="120px" height="120px"/>
            </div>
            <button type="button" className="edit btn wd-edit-profile rounded-pill mt-2" onClick={() => handleEditProfile()}>
                Edit profile
            </button>
            <div className="wd-profile-name">{profile.firstName} {profile.lastName}</div>
            
            <div>{profile.handle}</div>
            <br/>
            <div className="wd-profile-bio mb-2">{profile.bio}</div>
            {/* {profile.website !== "" && <div className="mb-2"><i className="fas fa-link"/><a
                className="ms-1 wd-website" href={profile.website}>{profile.website}</a></div>} */}
            <i className="fas fa-map-marker-alt me-1"/>{profile.location}
            <i className="fas fa-birthday-cake me-1 ms-4"/> Born {profile.dateOfBirth}
            <i className="far fa-calendar-alt me-1 ms-4"/> Joined {profile.dateJoined}
            <div className="mt-2 mb-5">
                <span className="wd-follow-count">{profile.followingCount}</span> Following
                <span className="wd-follow-count ms-4">{profile.followersCount}</span> Followers
            </div>

        </>

    )
}

export default Profile;
