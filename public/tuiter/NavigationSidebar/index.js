const NavigationSidebar = (active) => {
    return(`
    <ul class="list-group">
    <li class="list-group-item"><i class="fab fa-twitter wd-margin-right-3"></i></li>
    <a class="list-group-item list-group-item-action ${active === 'home'? "active": ''}" href="../HomeScreen/index.html">
        <div class="wd-inline">
            <i class="fas fa-home wd-margin-right-3 wd-pt-4"></i>
            <div class="d-none d-xl-block wd-nav-text">Home</div>
        </div>

    </a>
    <a class="list-group-item list-group-item-action ${active === 'explore'? "active": ''}" href="../explore/jsindex.html">
        <div class="wd-inline">
            <i class="fas fa-hashtag wd-margin-right-3 wd-pt-4"></i>
            <div class="d-none d-xl-block">Explore</div>
        </div>


    </a>
    <a class="list-group-item">
        <div class="wd-inline">
            <i class="fas fa-bell wd-margin-right-3 wd-pt-4"></i>
            <div class="d-none d-xl-block">Notifications</div>
        </div>

    </a>
    <a class="list-group-item">
        <div class="wd-inline">
            <i class="fas fa-envelope wd-margin-right-3 wd-pt-4"></i>
            <div class="d-none d-xl-block">Messages</div>
        </div>

    </a>
    <a class="list-group-item">
        <div class="wd-inline">
            <i class="fas fa-bookmark wd-margin-right-3 wd-pt-4"></i>
            <div class="d-none d-xl-block">Bookmarks</div>
        </div>


    </a>
    <a class="list-group-item">
        <div class="wd-inline">
            <i class="fas fa-list wd-margin-right-3 wd-pt-4"></i>
            <div class="d-none d-xl-block">Lists</div>

        </div>
    </a>
    <a class="list-group-item">
        <div class="wd-inline">
            <i class="fas fa-user wd-margin-right-3 wd-pt-4"></i>
            <div class="d-none d-xl-block">Profile</div>
        </div>
    </a>
    <a class="list-group-item">
        <div class="wd-inline">
        
            <i class="fas fa-caret-down wd-margin-right-3 wd-pt-4"></i>
            <div class="d-none d-xl-block">More</div>
        </div>
    </a>
</ul>
<button type="submit" class="btn btn-primary">Tweet</button>
    `);
   }
   export default NavigationSidebar;