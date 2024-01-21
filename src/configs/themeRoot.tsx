import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeConfigSlice from "./themeConfigSlice";

const rootReducer = combineReducers({
  themeConfig: themeConfigSlice,
});

const themeStore = configureStore({
  reducer: rootReducer,
});

export default themeStore;

export type IRootState = ReturnType<typeof rootReducer>;
