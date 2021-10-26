import React from "react";

interface IAuth {
  authToken: string;
  refreshToken: string;
  isAuth: boolean;
  isLoading: boolean;
  setTokens: (
    authToken: string,
    refreshToken: string,
    isAuth: boolean,
    isLoading: boolean
  ) => void;
}

const DEFAULT: IAuth = {
  authToken: "",
  refreshToken: "",
  isAuth: false,
  isLoading: false,
  setTokens: () => {},
};

const AuthContext = React.createContext(DEFAULT);

export default AuthContext;
