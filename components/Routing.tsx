import React, { useCallback, useContext, useEffect, useState } from "react";
import { Router } from "next/router";
import AuthContext from "../context/AuthContext";
import Layout from "./Layout";
import { Token } from "../pages/api/auth";
import Loading from "./Loading";
import { AuthRoutes, Routes } from "../utils/Routes";
import { route } from "next/dist/next-server/server/router";

interface IRouting {
  router: Router;
  children: any;
}

const Routing = ({ router, children }: IRouting) => {
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

  const handleNotAuth = () => {
    setIsLoading(false);
    if (router.route === AuthRoutes.register) {
      router?.push("/register");
    } else {
      router?.push("/login");
    }
  };

  const handleAuth = useCallback(async () => {
    const refresh = document.cookie.replace("refreshToken=", "");

    if (Routes.includes(router.route)) {
      if (refresh?.length) {
        try {
          await fetch("http://localhost:3000/api/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh: refresh }),
          })
            .then((res) => {
              if (res.status === 200) {
                res.json().then((data: Token) => {
                  if (data?.authToken) {
                    sessionStorage.setItem("authToken", data.authToken);
                    setIsAuth(true);
                    setIsLoading(false);
                    router?.push("/");
                  } else {
                    handleNotAuth();
                  }
                });
              } else {
                handleNotAuth();
              }
            })
            .catch((error) => {
              handleNotAuth();
            });
        } catch (error) {
          handleNotAuth();
        }
      } else {
        handleNotAuth();
      }
    } else {
      setIsLoading(false);
      router?.push("/404");
    }
  }, []);

  useEffect(() => {
    if (!isAuth) {
      setIsLoading(true);
      if (Routes.includes(router.route)) {
        setTimeout(() => handleAuth(), 3000);
      } else {
        setIsLoading(false);
        router?.push("/404");
      }
    }
  }, [handleAuth]);

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

  const handleBody = () => {
    if (isLoading) {
      return <Loading />;
    }

    return children;
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
      <Layout>{handleBody()}</Layout>
    </AuthContext.Provider>
  );
};

export default Routing;
