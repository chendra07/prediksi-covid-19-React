import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { loadingReducer, predictionReducer } from "../reducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  prediction: predictionReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
