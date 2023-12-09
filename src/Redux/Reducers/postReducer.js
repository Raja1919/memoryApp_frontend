
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postSlice.actions;

export const createPost = (postData) => async (dispatch) => {
  try {
    await axios.post("http://localhost:9000/api/post", postData);
    dispatch(fetchPosts());
  } catch (error) {
    console.error(error);
  }
};

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:9000/api/");
    dispatch(setPosts(response.data));
  } catch (error) {
    console.error(error);
  }
};

export default postSlice.reducer;
