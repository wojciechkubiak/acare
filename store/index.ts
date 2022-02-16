import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { Services, services } from "../services/services";
import { authReducer } from "./auth/auth-slice";
import { loadingReducer } from "./loading/loading-slice";

export const reducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: services } }),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof reducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export interface AppThunkApiConfig {
  state: AppState;
  dispatch: AppDispatch;
  extra: Services;
}
