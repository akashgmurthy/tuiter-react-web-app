import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "/tuiter/images/nasa.jpg",
   };
   
const templateTuit = {
...currentUser,
"topic": "Space",
"time": "2h",
"liked": false,
"replies": 0,
"retuits": 0,
"likes": 0,
}
   
const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
    
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
        const index = state
           .findIndex(tuit =>
              tuit._id === action.payload);
        state.splice(index, 1);
      },
      
      likeTuit(state,action){
          const tuitIndex = state.findIndex(tuit =>
            tuit._id === action.payload);
        //   tuit._id === action.payload._id)
          state[tuitIndex].liked = !state[tuitIndex].liked;
          state[tuitIndex].likes+=state[tuitIndex].liked? 1:-1;
      }
   
  }
 
});

export const {createTuit, deleteTuit,likeTuit} = tuitsSlice.actions;

export default tuitsSlice.reducer;