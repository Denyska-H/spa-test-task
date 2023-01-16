import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchItemsParams, TPostInfo } from "./types";

export const fetchPostsData = createAsyncThunk<TPostInfo[], SearchItemsParams>(
  "posts/fetchPostsStatus",
  async (params) => {
    const { query } = params;
    const { data } = await axios.get<TPostInfo[]>(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=6&title_contains=${query}&summary_contains=${query}`,
    );
    return data;
  },
);
