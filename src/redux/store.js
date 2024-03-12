import { configureStore } from "@reduxjs/toolkit";
import PlayerReducer from "./slices/PlayerSlice";
import SearchReducer from "./slices/SearchSlice";
import AuthReducer from "./slices/AuthSlice";
import AlbumReducer from "./slices/AlbumSlice";
import TrackReducer from "./slices/TrackSlice";
export const store = configureStore({

  reducer:{
    player : PlayerReducer,
    search: SearchReducer,
    auth: AuthReducer,
    album: AlbumReducer,
    track: TrackReducer,

  }
});
