import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "./index.css"
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
      // COMMENTLINK
      <div className="list-group">
        <a className="list-group-item">
          <div className = "wd-inline">
          <i class="fab fa-twitter wd-margin-right-3 wd-pt-4"></i>
          <div className="d-none d-xl-block">Tuiter</div></div></a>
        <Link to= "/tuiter/home" className={`list-group-item
                       ${active === 'home'?'active':''}`}>
                         <div className="wd-inline">
                     <i class="fas fa-home wd-margin-right-3 wd-pt-4"></i>
        <div className="d-none d-xl-block">Home</div></div>
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item
                       ${active === 'explore'?'active':''}`}>
                         <div className ="wd-inline">
                         <i class="fas fa-hashtag wd-margin-right-3 wd-pt-4"></i>
          <div className="d-none d-xl-block">Explore</div></div>
        </Link>
        <a className={`list-group-item
                       ${active === 'notifications'?'active':''}`}>
                         <div className ="wd-inline">
                         <i class="fas fa-bell wd-margin-right-3 wd-pt-4"></i>
          <div class="d-none d-xl-block">Notifications</div></div>
        </a>
        <a className={`list-group-item
                       ${active === 'messages'?'active':''}`}>
                         <div className = "wd-inline">
                         <i class="fas fa-envelope wd-margin-right-3 wd-pt-4"></i>
          <div class="d-none d-xl-block">Messages</div></div>
        </a>
        <a className={`list-group-item
                       ${active === 'bookmarks'?'active':''}`}>
                         <div className = "wd-inline">
                         <i class="fas fa-bookmark wd-margin-right-3 wd-pt-4"></i>
          <div class="d-none d-xl-block">Bookmarks</div></div>
        </a>
        <a className={`list-group-item
                       ${active === 'lists'?'active':''}`}>
                           <div className = "wd-inline">
                           <i class="fas fa-list wd-margin-right-3 wd-pt-4"></i>
                           <div class="d-none d-xl-block">Lists</div></div>
        </a>
        <Link to= "/tuiter/profile" className={`list-group-item
                       ${active === 'profile'?'active':''}`}>
                         <div className = "wd-inline">
                         <i class="fas fa-user wd-margin-right-3 wd-pt-4"></i>
          <div class="d-none d-xl-block">Profile</div></div>
        </Link>
        <a className={`list-group-item
                       ${active === 'more'?'active':''}`}>
                         <div className = "wd-inline">
                         <i class="fas fa-caret-down wd-margin-right-3 wd-pt-4"></i>
         <div class="d-none d-xl-block">More</div></div>
        </a>
        <Link to="/" className="list-group-item">
       Labs
     </Link>
      </div>
    );
   };
   export default NavigationSidebar;