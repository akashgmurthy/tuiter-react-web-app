import {useDispatch} from "react-redux";
import React from "react";
import { likeTuit } from "../tuits/tuits-reducer";

const TweetStats = ({tweet}) => {
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        dispatch(likeTuit(tweet._id));
    };
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


            <div className="col wd-icon"
                 onClick={likeClickHandler}>
                <a className="wd-post-icon" >
                {
                    tweet.liked && <i className="fas fa-heart me-2"
                                      style={{color: tweet.liked ? "red" : "black"}}/>
                }
                {
                    !tweet.liked && <i className="far fa-heart me-2"/>
                }
                <span className="wd-icon-text">{tweet.likes}</span>
                </a>
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
