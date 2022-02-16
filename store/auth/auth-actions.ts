import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AuthLoginData,
  AuthResponse,
  AuthRegisterData,
  Auth,
} from "../../models/Auth";
import { AppThunkApiConfig } from "../index";

export const loginUser = createAsyncThunk<
  AuthResponse,
  AuthLoginData,
  AppThunkApiConfig
>("loginUser", async (authData, { extra }) =>
  extra.authService.authUser(authData)
);

export const registerUser = createAsyncThunk<
  boolean,
  AuthRegisterData,
  AppThunkApiConfig
>("registerUser", async (registerData, { extra }) =>
  extra.authService.registerUser(registerData)
);

export const refreshAuth = createAsyncThunk<Auth, string, AppThunkApiConfig>(
  "refreshAuth",
  async (refreshToken, { extra }) => extra.authService.refreshAuth(refreshToken)
);
