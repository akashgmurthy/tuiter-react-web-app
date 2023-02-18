import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () =>{
    return(`
    <div class="row">
            <div class ="col-11">
                <i class="fas fa-search"></i>
                <input class= wd-search-bar id="search-bar" placeholder="Search Twitter"/>
            </div>
            <div class ="col-1">
                <a href="explore-settings.html"><i class="fas fa-cog fa-2x"></i></a>
            </div>

        </div>
        <ul class="nav nav-tabs fa-1x">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
            </li>
        </ul>
        <div class="wd-image-content">
            <img src="../images/spacexstar.jpg" width="100%" height="400px"/>
            <div class="wd-big-text">
                SpaceX's Starship
            </div>
        </div>
        ${PostSummaryList()}
    
    
    `);
}

export default ExploreComponent;