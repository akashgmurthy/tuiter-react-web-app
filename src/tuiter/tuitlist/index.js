import React, { useEffect } from "react";
import TuitListItem from "./tuititem";
import {useDispatch,useSelector} from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";
const TuitList = () =>{
    debugger
    const {tuits, loading} = useSelector(state => state.tuitsData)
    debugger
    console.log("In tuitlist")
    console.log(tuits)
    console.log(loading)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className = "list-group">
            {
            loading &&
            <li className="list-group-item">
                Loading...
            </li>
            
            }{

                tuits.map(post => {
                    return <TuitListItem post = {post}/>
                })}
        </ul>
    );
}
export default TuitList