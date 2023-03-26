import {useDispatch} from "react-redux";
import React from "react";
import TweetStats from "../tuitstats";
import { deleteTuit } from "../tuits/tuits-reducer";




const TuitListItem = ({
            post ={
                "_id": 234,
                "topic": "Space",
                "userName": "SpaceX",
                "time": "2h",
                "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
                "image": "spacex.png",
                "liked": true,
                "replies": 123,
                "retuits": 432,
                "likes": 2345,
                "handle": "@spacex",
                "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
              }
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
    }
    return(
    <li className="wd-post">
        <div className="row">
         <div className = "col-auto">
             <img className="wd-profile-image" src={post.image} alt="profile image"/>
                {/* <i className="fas fa-ellipsis-h fa-sm wd-post-ellipsis"></i> */}

                <div className="wd-content">
    
                    <span className="wd-user">
                        {post.userName}
                    </span>
                    <span><i className="fas fa-check-circle fa-xs wd-left-3"></i></span>
                    <span className="wd-user-handle">{post.handle} &middot; {post.time}</span>
                    <div className="wd-content-body">
                            {post.tuit}
                            <TweetStats tweet={post} />
    

                    </div >
                </div>
            </div>
        <div className="col-1">
        <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}></i>
        </div>
        </div>
    </li>
    )
}

const getContentLink = (title) => {
    return {__html: title};
}
export default TuitListItem