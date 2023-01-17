import { configureStore } from "@reduxjs/toolkit";
import { descriptionReducer } from "../features/Description";
import { postInfoReducer } from "../features/PostInfo";

const store = configureStore({
  reducer: {
    posts: postInfoReducer,
    description: descriptionReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
