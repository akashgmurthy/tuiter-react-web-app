
import homeposts from "./homeposts.js"
import PostListItem from "./PostListItem.js"
const PostList = () => {
    return (`
    
    ${
        homeposts.map( homepost => {
            return (PostListItem(homepost));
        }).join('')
    }
    
    `);
}

export default PostList;