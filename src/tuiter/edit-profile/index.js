import React, {useState} from "react";
import Profile from "../profile/profile";
import {useDispatch, useSelector} from "react-redux";
import { saveProfile } from "../reducers/profile-reducer";
import "../profile/index.css"

const EditProfile = () => {


    const profileData = (state) => state.profile;
    const initialProfile = useSelector(profileData);
    const [profile,setProfile] = useState(initialProfile);
    
    const dispatch = useDispatch();
    const [isEditEnabled, setEditEnabled] = useState(true);
    const dob = new Date(Date.parse(profile.dateOfBirth));
    const fullName = profile.firstName + " " + profile.lastName;

    const handleSaveProfile = () => {
        setEditEnabled(false)
        dispatch(saveProfile(profile))
    }

    const [name, setName] = useState(fullName);
    const nameChangeHandler = (event) => {
        const nameValue = event.target.value;
        setName(nameValue);
        const nameArray = nameValue.split(' ');
        const fn = nameArray[0];
        const ln = nameArray[1];
        setProfile({ ...profile, firstName:fn, lastName:ln});
    }

    const [bio, setBio] = useState(profile.bio);
    const bioChangeHandler = (event) => {
        const value = event.target.value;
        setBio(value);
        setProfile({ ...profile, bio: value});
    }

    const [location, setLocation] = useState(profile.location);
    const locationChangeHandler = (event) => {
        const value = event.target.value;
        setLocation(value);
        setProfile({ ...profile, location: value});
    }

    const [website, setWebsite] = useState(profile.website);
    const websiteChangeHandler = (event) => {
        const value = event.target.value;
        setWebsite(value);
        setProfile({ ...profile, website: value});
    }

    const [birthDate, setBirthDate] = useState(dob.toISOString().slice(0, 10));
    const dobChangeHandler = (event) => {
        const value = event.target.value;
        
        setBirthDate(value);
        setProfile({ ...profile, dateOfBirth: value});

    }

    if (isEditEnabled === false) {
        return <Profile />
    }


    return (
        <>
            <div className="edit-profile-header">
                <div className="row mb-2">
                    <div className="col-1 mt-3 wd-back" onClick={() => {
                        setEditEnabled(false)
                    }}><i className="fas fa-times"/></div>
                    <div className="col-9">
                        <div
                            className="wd-profile-name">Edit profile
                        </div>
                        <span>Profile</span> 
                    </div>
                    <div className="col-2 mt-2">
                        <button className="btn wd-profile-save rounded-pill" onClick={handleSaveProfile}>Save
                        </button>
                    </div>
                </div>
                <img className="image" alt="banner"
                     src={profile.bannerPicture}
                     width="100%" height="200px"/>
                <img className="rounded-circle wd-profile-img" alt="banner"
                     src={profile.profilePicture}
                     width="120px" height="120px"/>
            </div>

            <div className="form-floating mb-3 mt-3">
                <input className="form-control" id="floatingInput"
                       value={name} onChange={nameChangeHandler}/>
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" value={bio} onChange={bioChangeHandler}
                          id="floatingTextarea"/>
                <label htmlFor="floatingTextarea">Bio</label>
            </div>
            <div className="form-floating mb-3">
                <input className="form-control" id="floatingInput"
                       value={location} onChange={locationChangeHandler}/>
                <label htmlFor="floatingInput">Location</label>
            </div>
            <div className="form-floating mb-3">
                <input className="form-control" id="floatingInput"
                       value={website} onChange={websiteChangeHandler}/>
                <label htmlFor="floatingInput">Website</label>
            </div>

            <div className="form-floating mb-3">
                <input type="date" className="form-control" id="floatingInput"
                       value={birthDate} onChange={dobChangeHandler}/>
                <label htmlFor="floatingInput">Birth date</label>
            </div>


        </>
    )
}

export default EditProfile;
