import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchItemsParams, TDescription } from "./types";

export const fetchDescription = createAsyncThunk<
  TDescription,
  SearchItemsParams
>("description/fetchDescriptionStatus", async (params) => {
  const { id } = params;
  const apiUrl = process.env.REACT_APP_URL;
  const { data } = await axios.get(`${apiUrl}v3/articles/${id}`);
  return data;
});
