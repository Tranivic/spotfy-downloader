import { configureStore } from "@reduxjs/toolkit";
import slicePlaylist from "./slicePlaylist";
import sliceTrack from "./sliceTrack";

const store = configureStore({
  reducer: {
    playlist: slicePlaylist,
    track: sliceTrack,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
