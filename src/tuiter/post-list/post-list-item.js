import React from "react";
const PostListItem = ({
            post ={
                "handle": "elonmusk",
                "userName": "Elon Musk",
                "time": "23h",
                "title": "Amazing show about <a href=\"https://twitter.com/inspiration4x\">@Inspiration4x</a> mission!",
                "profileImage": "../images/elon.jpg",
                "image": "../images/inspiration4.jpg",
                "imageTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                "imageContent": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.",
                "imageLink": "netflix.com",
                "comment": "4.2K",
                "retweet": "3.5K",
                "love": "37.5K"
            }
}) => {
    return(
        <li className="wd-post">
    
    <img className="wd-profile-image" src={post.profileImage}
         alt="profile image"/>
    <i className="fas fa-ellipsis-h fa-sm wd-post-ellipsis"></i>

    <div className="wd-content">
    
    <span className="wd-user">
        {post.userName}
    </span>
    <span><i className="fas fa-check-circle fa-xs wd-left-3"></i></span>
    <span className="wd-user-handle">@{post.handle} &middot; {post.time}</span>
<div className="wd-content-body" dangerouslySetInnerHTML={getContentLink(post.title)}>
</div >
        <div className="wd-image-content">
        <img className="wd-content-image" src={post.image}
             alt="content image"/>
        {post.imageTitle === '' ? '': imageTitle(post.imageTitle)}
        
        {post.imageContent === '' ? '' : imageContent(post.imageContent)}
                
        {post.imageLink === '' ? '' : imageLink(post.imageLink)}
        
    </div>
    <div className="wd-icon">
            <a className="wd-post-icon" href="#">
            <i className="far fa-comment"></i>
                <span className="wd-icon-text">{post.comment}</span></a>
        </div>
        <div className="wd-icon">
            <a className="wd-post-icon" href="#">
                <i className="fas fa-retweet"></i>
                <span className="wd-icon-text">{post.retweet}</span></a>
        </div>
        <div className="wd-icon">
            <a className="wd-post-icon" href="#">
                <i className="fas fa-heart"></i>
                <span className="wd-icon-text wd-red-text">{post.love}</span></a>
        </div>
        <div className="wd-icon">
            <a className="wd-post-icon" href="#">
                <i className="fas fa-upload"></i></a>
        </div>

    </div>
</li>
    )
}

const imageTitle = (item) => {
    return (
        <div className="wd-image-heading">
            {item}
        </div>
    );
}

const imageLink = (item) => {
    return (
        <div className="wd-image-text">
            <i className="fas fa-link me-1"></i>
            {item}
        </div>
    );
}

const imageContent = (item) => {
    return (
        <div className="wd-image-text">
            {item}
        </div>
    );
}
const getContentLink = (title) => {
    return {__html: title};
}
export default PostListItem