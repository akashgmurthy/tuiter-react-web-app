const FollowListItem = (follow) => {
    return(`
    <li class="list-group-item">
    <div class="row">
        <div class="col-2">
            <img src=${follow.avatarIcon} class="wd-profile"/>

        </div>
        <div class="col-6">
            <div class ="wd-inline">
                <div class ="wd-bold">
                    ${follow.userName}
                </div>
                <i class="fas fa-check-circle fa-xs wd-left-3"></i>

            </div>
            <div class="wd-textid">
                @${follow.handle}
            </div>

        </div>
        <div class="col-4">
            <button type="submit" class="btn btn-primary wd-follow-btn-text wd-mt-4">Follow</button>
        </div>
    </div>
</li>



    `)

}

export default FollowListItem
