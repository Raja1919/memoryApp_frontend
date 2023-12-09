
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./Reducers/postReducer";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;