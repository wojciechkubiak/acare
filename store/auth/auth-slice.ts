import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../../models/Auth";
import { loginUser, refreshAuth, registerUser } from "./auth-actions";

interface IAuthState {
  auth: Auth;
  isAuth: boolean;
  isLoading: boolean;
  isError: boolean;
  isRegister: boolean;
  isInitLoaded: boolean;
  isRegisterLoading: boolean;
  isRegisterError: boolean;
}

const initAuth: Auth = {
  authToken: "",
  refreshToken: "",
};

const initState: IAuthState = {
  auth: initAuth,
  isAuth: false,
  isLoading: false,
  isError: false,
  isRegister: false,
  isInitLoaded: false,
  isRegisterLoading: false,
  isRegisterError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    logout(state) {
      state.auth = initAuth;
      state.isLoading = false;
      state.isError = true;
      state.isAuth = false;
    },
    clearRegister(state) {
      state.isRegister = false;
      state.isRegisterError = false;
      state.isRegisterLoading = false;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.isAuth = false;
      state.isError = false;
    });
    addCase(loginUser.fulfilled, (state, { payload }) => {
      state.auth = payload.auth;
      state.isAuth = true;
      state.isLoading = false;
      state.isError = false;
      state.isInitLoaded = true;
    });
    addCase(loginUser.rejected, (state, error) => {
      state.auth = initAuth;
      state.isAuth = false;
      state.isLoading = false;
      state.isError = true;
      state.isInitLoaded = true;
    });
    addCase(registerUser.pending, (state) => {
      state.isRegisterLoading = true;
      state.isRegisterError = false;
      state.isRegister = false;
    });
    addCase(registerUser.fulfilled, (state, { payload }) => {
      state.isRegisterLoading = false;
      state.isRegisterError = false;
      state.isRegister = true;
      state.isInitLoaded = true;
    });
    addCase(registerUser.rejected, (state, error) => {
      state.isRegisterLoading = false;
      state.isRegisterError = true;
      state.isRegister = false;
      state.isInitLoaded = true;
    });
    addCase(refreshAuth.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    addCase(refreshAuth.fulfilled, (state, { payload }) => {
      state.auth = {
        refreshToken: payload.refreshToken,
        authToken: payload.authToken,
      };
      state.isAuth = true;
      state.isLoading = false;
      state.isInitLoaded = true;
    });
    addCase(refreshAuth.rejected, (state, error) => {
      state.isLoading = false;
      state.isError = true;
      state.isInitLoaded = true;
    });
  },
});

export const { logout, clearRegister } = authSlice.actions;
export const authReducer = authSlice.reducer;
