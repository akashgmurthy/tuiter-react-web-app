import React from "react";
import {Link}
  from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar.js";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryItem from "./post-summary-list/post-summary-item";
import PostSummaryList from "./post-summary-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import Profile from "./profile/profile";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import EditProfile from "./edit-profile";

const store = configureStore(
  {reducer: {who: whoReducer, tuitsData: tuitsReducer, profile:profileReducer}});


function Tuiter() {
  return (
    <Provider store={store}>
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="home"/>
      </div>
      <div className="col-10 col-md-10 col-lg-7 col-xl-6">
      <Routes>
         <Route path="home"    element={<HomeComponent/>}/>
         <Route path="explore" element={<ExploreComponent/>}/>
         <Route path="profile" element={<Profile/>}/>
         <Route path="editprofile" element={<EditProfile/>}/>
       </Routes>
      </div>
      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList/>
      </div>
    </div>
    </Provider>
  );
 }
 
 export default Tuiter