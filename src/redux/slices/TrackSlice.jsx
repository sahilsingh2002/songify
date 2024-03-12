import { createSlice } from "@reduxjs/toolkit";

const TrackSlice = createSlice({
  name:'track',
  initialState: {},
  reducers : {
    setTrack:(state,action)=>{
      return action.payload;
    }
  }
})
export const {setTrack} = TrackSlice.actions;
export default TrackSlice.reducer;
