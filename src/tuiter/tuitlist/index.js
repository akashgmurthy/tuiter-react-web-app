import React from "react";
import TuitListItem from "./tuititem";
import {useSelector} from "react-redux";
const TuitList = () =>{
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className = "list-group">
            {
                tuitsArray.map(post => {
                    return <TuitListItem post = {post}/>
                })
            }
        </ul>
    );
}
export default TuitList