const PostSummaryItem = (post) => {
    return(`
    <div class="wd-content-border">
    <div class = "row">
                <div class = "col-9 col-md-10 col-lg-9 col-xl-10">
                    <div class = "wd-topic">
                        ${post.topic}
                    </div>
                    <div class ="wd-inline">
                        <div class ="wd-bold">
                            ${post.userName}
                        </div>
                        <i class="fas fa-check-circle fa-xs wd-left-3"></i>
                        <div class = "wd-topic">
                            - ${post.time}
                        </div>
                    </div>
                    <div class = "wd-bold">
                        ${post.title}
                    </div>
                </div>
                <div class ="col-3 col-md-2 col-lg-3 col-xl-2">
                    <img src=${post.image} class="wd-image"  />
                </div>
            </div>
    </div>
            
    `)
}

export default PostSummaryItem;