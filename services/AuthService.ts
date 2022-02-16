import axios from "axios";
import {
  Auth,
  AuthLoginData,
  AuthRegisterData,
  AuthResponse,
  AuthToken,
} from "../models/Auth";

const API_URL: string = process.env.API_URL!;

export interface RawAuthData {
  access_token: string;
  refresh_token: string;
}

export class AuthService {
  private KEY: string = process.env.SECRET_KEY;
  private userData?: RawAuthData | null;
  private headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  constructor() {
    this.userData = null;
  }

  authUser = async ({
    email,
    password,
  }: AuthLoginData): Promise<AuthResponse> => {
    const auth: AuthResponse = {
      auth: {
        authToken: "",
        refreshToken: "",
      },
    };

    if (!email || !password) {
      return auth;
    }

    const authData: AuthLoginData = {
      email: email,
      password: password,
    };

    try {
      const { data } = await axios.post<Auth>(
        `/api/login`,
        JSON.stringify(authData),
        this.headers
      );

      if (data) {
        localStorage.setItem("auth_token", data.authToken);
        localStorage.setItem("refresh_token", data.refreshToken);

        auth.auth.authToken = data.authToken;
        auth.auth.refreshToken = data.refreshToken;

        return auth;
      }

      return auth;
    } catch (e: any) {
      throw e.response.data;
    }
  };

  registerUser = async ({
    firstName,
    lastName,
    email,
    password,
  }: AuthRegisterData): Promise<boolean> => {
    if (!email || !password) {
      return false;
    }

    const authData: AuthRegisterData = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
    };

    try {
      const { data } = await axios.post<Auth>(
        `/api/register`,
        JSON.stringify(authData),
        this.headers
      );

      return !!data;
    } catch (e: any) {
      throw e.response.data;
    }
  };

  refreshAuth = async (refreshToken: string): Promise<Auth> => {
    const auth = { authToken: "", refreshToken: "" };
    if (!refreshToken) {
      return auth;
    }

    const token = {
      refreshToken: refreshToken,
    };

    try {
      const { data } = await axios.post<Auth>(
        `/api/auth`,
        JSON.stringify(token),
        this.headers
      );

      if (data.authToken) {
        auth.authToken = data.authToken;
        auth.refreshToken = data.refreshToken;
      }

      return auth;
    } catch (e: any) {
      throw e.response.data;
    }
  };
}
