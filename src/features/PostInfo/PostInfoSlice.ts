import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Status, TPostInfo, TPostInfoState } from "./types";
import { fetchPostsData } from "./asyncActions";

const initialState: TPostInfoState = {
  posts: [],
  status: Status.PENDING,
};

export const PostInfoSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<TPostInfo[]>) {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostsData.pending, (state) => {
      state.status = Status.PENDING;
      state.posts = [];
    });

    builder.addCase(fetchPostsData.fulfilled, (state, action) => {
      state.status = Status.FULFILLED;
      state.posts = action.payload;
    });

    builder.addCase(fetchPostsData.rejected, (state) => {
      state.status = Status.REJECTED;
      state.posts = [];
    });
  },
});

export const { setPosts } = PostInfoSlice.actions;

export default PostInfoSlice.reducer;
