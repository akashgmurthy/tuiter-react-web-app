import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsSlice = createSlice({
 name: 'hometuits',
 initialState: tuits
});

export default tuitsSlice.reducer;