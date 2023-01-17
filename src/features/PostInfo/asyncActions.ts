import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchItemsParams, TPostInfo } from "./types";

export const fetchPosts = createAsyncThunk<TPostInfo[], SearchItemsParams>(
  "posts/fetchPostsStatus",
  async (params) => {
    const { query } = params;
    const apiUrl = process.env.REACT_APP_URL;

    const { data } = await axios.get<TPostInfo[]>(
      `${apiUrl}v3/articles?_limit=6&title_contains=${query}&summary_contains=${query}`,
    );
    return data;
  },
);
