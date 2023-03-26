import profileData from '../data/profile.json'
import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileData,
    reducers: { 
        saveProfile(state,action){
            console.log(action.payload)
            console.log("In state")
            console.log(state)
            return {
                ...state,
                ...action.payload
            }
            console.log("State")
            console.log(state)
        }

    }

})

export const {saveProfile} = profileSlice.actions;
export default profileSlice.reducer;

