import {useDispatch} from "react-redux";
import React from "react";
// import { likeTuit } from "../tuits/tuits-reducer";
import {updateTuitThunk}
  from "../../services/tuits-thunks";

const TweetStats = ({tweet}) => {
    const dispatch = useDispatch();
    // const likeClickHandler = () => {
    //     dispatch(likeTuit(tweet._id));
    // };
    return (<div className="row mt-2">


            <div className="col wd-icon">
                <a className="wd-post-icon" href="#">
                    <i className={`fas fa-comment me-2`}/>
                    <span className="wd-icon-text">{tweet.replies}</span>
                </a>
            </div>

            <div className="col wd-icon">
                <a className="wd-post-icon" href="#">
                    <i className={`fas fa-retweet me-2`}/>
                    <span className="wd-icon-text">{tweet.retuits}</span>
                </a>
            </div>


            <div className="col wd-icon">
                
                <div className="wd-post-icon">
                    
                <i
                    className="fas fa-heart me-2"
                    style={{ color: tweet.liked ? "red" : "gray" }}
                    onClick={() => {
                        if (!tweet.liked) {
                            dispatch(
                                updateTuitThunk({
                                    ...tweet,
                                    likes: tweet.likes + 1,
                                    liked: true
                                })
                            );
                        } else {
                            dispatch(
                                updateTuitThunk({
                                    ...tweet,
                                    likes: tweet.likes - 1,
                                    liked: false
                                })
                            );
                        }
                    }}
                ></i>
                    <span className="wd-icon-text">{tweet.likes}</span>
                </div>

            </div>

            <div className="col wd-icon">
                
                <div className="wd-post-icon">
                    
                <i
                    className="fas fa-thumbs-down me-2"
                    style={{ color: tweet.disliked ? "blue" : "gray" }}
                    onClick={() => {
                        if (!tweet.disliked) {
                            dispatch(
                                updateTuitThunk({
                                    ...tweet,
                                    dislikes: tweet.dislikes + 1,
                                    disliked: true
                                })
                            );
                        } else {
                            dispatch(
                                updateTuitThunk({
                                    ...tweet,
                                    dislikes: tweet.dislikes - 1,
                                    disliked: false
                                })
                            );
                        }
                    }}
                ></i>
                    <span className="wd-icon-text">{tweet.dislikes}</span>
                </div>

            </div>

            <div className="col wd-icon">
                <a className="wd-post-icon" href="#">
                    <i className={`fas fa-upload me-2`}/>
                </a>
            </div>
        </div>

    );
}

export default TweetStats;
