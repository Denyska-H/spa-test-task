import { configureStore } from "@reduxjs/toolkit";
import postInfoReducer from "../features/PostInfo/PostInfoSlice";

const store = configureStore({
  reducer: {
    posts: postInfoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
