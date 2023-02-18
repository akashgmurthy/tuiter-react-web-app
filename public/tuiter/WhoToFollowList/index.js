import FollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return(`
    <ul class="list-group">
    <li class="list-group-item wd-bold">Who to Follow</li>
    ${
        who.map( who => {
            return FollowListItem(who);
        }).join('')
    }
    </ul>
    `)
}
export default WhoToFollowList;