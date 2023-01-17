import { createSlice } from "@reduxjs/toolkit";
import { fetchDescription } from "./asyncActions";
import { Status, TDescriptionState } from "./types";

const initialState: TDescriptionState = {
  description: {
    title: "",
    imageUrl: "",
    summary: "",
  },
  status: Status.PENDING,
};

export const DescriptionSlice = createSlice({
  name: "description",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDescription.pending, (state) => {
      const stateDescription = state.description;
      state.status = Status.PENDING;
      state.description = stateDescription;
    });

    builder.addCase(fetchDescription.fulfilled, (state, action) => {
      state.status = Status.FULFILLED;
      state.description = action.payload;
    });

    builder.addCase(fetchDescription.rejected, (state) => {
      const stateDescription = state.description;
      state.status = Status.REJECTED;
      state.description = stateDescription;
    });
  },
});

export default DescriptionSlice.reducer;
