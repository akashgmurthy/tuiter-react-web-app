import React from "react";
import PostListItem from "./post-list-item";
import posts from "./posts.json"

const PostList = () =>{
    return(
        <ul className = "list-group">
            {
                posts.map(post => {
                    return <PostListItem post = {post}/>
                })
            }
        </ul>
    );
}
export default PostList