const PostListItem = (post) => {
    return (`

    <div class="wd-post">
    
    <img class="wd-profile-image" src=${post.profileImage}
         alt="profile image"/>
    <i class="fas fa-ellipsis-h wd-post-ellipsis"></i>

    <div class="wd-content">
    <div class ="wd-home-handle>
    <span class="wd-user">
        ${post.userName}
    </span>
    <span><i class="fas fa-check-circle fa-xs wd-left-3"></i></span>
    <span class="wd-user-handle">@${post.handle} &middot; ${post.time}</span></div>
<div class="wd-content-body">${post.title}
</div >
        <div class="wd-image-content">
        <img class="wd-content-image" src=${post.image}
             alt="content image"/>
        ${post.imageTitle === '' ? '': imageTitle(post.imageTitle)}
        
        ${post.imageContent === '' ? '' : imageContent(post.imageContent)}
                
        ${post.imageLink === '' ? '' : ImageLink(post.imageLink)}
        
    
        <div class="wd-icon">
            <a class="wd-post-icon" href="#">
            <i class="far fa-comment"></i>
                <span class="wd-icon-text">${post.comment}</span></a>
        </div>
        <div class="wd-icon">
            <a class="wd-post-icon" href="#">
                <i class="fas fa-retweet"></i>
                <span class="wd-icon-text">${post.retweet}</span></a>
        </div>
        <div class="wd-icon">
            <a class="wd-post-icon" href="#">
                <i class="fas fa-heart"></i>
                <span class="wd-icon-text">${post.love}</span></a>
        </div>
        <div class="wd-icon">
            <a class="wd-post-icon" href="#">
                <i class="fas fa-upload"></i></a>
        </div>
    </div>

</div>
</div>

    `);
}

const imageTitle = (item) => {
    return (`
      <div class="wd-image-heading">
              ${item}
          </div>
    `);
}

const ImageLink = (item) => {
    return (`
      <div class="wd-image-text">
          <i class="fas fa-link"></i>
          ${item}
      </div>
    `);
}

const imageContent = (item) => {
    return (`
      <div class="wd-image-text">
              ${item}
          </div>
    `);
}
export default PostListItem;