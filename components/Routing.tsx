import React, { useCallback, useContext, useEffect, useState } from "react";
import { Router } from "next/router";
import AuthContext from "../context/AuthContext";
import Layout from "./Layout";
import { Token } from "../pages/api/auth";
import LoginContext, { Step } from "../context/LoginContext";

interface IRouting {
  router: Router;
  children: any;
}

const Routing = ({ router, children }: IRouting) => {
  const loginCtx = useContext(LoginContext);
  const authCtx = useContext(AuthContext);
  const [isAuth, setIsAuth] = useState(authCtx.isAuth);
  const [authToken, setAuthToken] = useState(authCtx.authToken);
  const [refreshToken, setRefreshToken] = useState(authCtx.refreshToken);
  const [isLoading, setIsLoading] = useState(authCtx.isLoading);

  const handleLoading = useCallback(
    (newValue: boolean) => {
      if (isLoading !== newValue) setIsLoading(newValue);
    },
    [isLoading]
  );

  const handleRouting = useCallback(() => {
    if (!isAuth && router.route !== "/register" && router.route !== "/login") {
      // TODO: route "/" returns "/login" at the start
      router?.push("/login");
    } else {
      router?.push(router.route);
    }
  }, [router, handleLoading]);

  const handleAuth = useCallback(async () => {
    const refresh = document.cookie.replace("refreshToken=", "");

    if (refresh.length) {
      try {
        const result = await fetch("http://localhost:3000/api/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh: refresh }),
        });
        if (result.status === 200) {
          result.json().then((data: Token) => {
            if (data) {
              sessionStorage.setItem("authToken", data.authToken);
              setIsAuth(true);
              router?.push("/");
            }
          });
        } else {
          setIsLoading(false);
          loginCtx.setStep(Step.LOGIN);
        }
      } catch (error) {
        console.log(error);
        loginCtx.setStep(Step.LOGIN);
      }
    } else {
      loginCtx.setStep(Step.LOGIN);
    }
  }, []);

  useEffect(() => {
    if (!isAuth) {
      setIsLoading(true);
      setTimeout(() => {
        handleAuth().then((r) => console.log(r));
      }, 3000);
    }
  }, [handleAuth]);

  useEffect(() => {
    handleRouting();
  }, [handleRouting]);

  const setTokens = (
    authToken: string,
    refreshToken: string,
    isAuth: boolean,
    isLoading: boolean
  ) => {
    setAuthToken(authToken);
    setRefreshToken(refreshToken);
    setIsAuth(isAuth);
    setIsLoading(isLoading);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        authToken,
        refreshToken,
        isLoading,
        setTokens,
      }}
    >
      <Layout>{children}</Layout>
    </AuthContext.Provider>
  );
};

export default Routing;
