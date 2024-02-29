import { configureStore } from "@reduxjs/toolkit";
import PlayerReducer from "./slices/PlayerSlice";
import SearchReducer from "./slices/SearchSlice";
import AuthReducer from "./slices/AuthSlice";
import AlbumReducer from "./slices/AlbumSlice";
export const store = configureStore({

  reducer:{
    player : PlayerReducer,
    search: SearchReducer,
    auth: AuthReducer,
    album: AlbumReducer,

  }
});
