import React, { useCallback, useEffect } from "react";
import { Router } from "next/router";
import Layout from "../Layout/Layout";
import Loading from "../Loading/Loading";
import { Routes, Sections } from "../../utils/Routes";
import { useAppDispatch, useAppSelector } from "../../store";
import { initLoading, stopLoading } from "../../store/loading/loading-slice";
import { refreshAuth } from "../../store/auth/auth-actions";

interface IRouting {
  router: Router;
  children: any;
}

const Routing = ({ router, children }: IRouting) => {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isLoading = useAppSelector((state) => state.loading.isLoading);

  useEffect(() => {
    const refresh = localStorage.getItem("refresh_token");
    if (refresh?.length) dispatch(refreshAuth(refresh));
  }, []);

  useEffect(() => {
    console.log(router.route, isAuth);
    if (isAuth) {
      if (Routes.includes(router.route)) {
        dispatch(stopLoading());
        if (router.route === "/login") {
          router?.push("/");
        } else {
          router?.push(router.route);
        }
      } else {
        dispatch(stopLoading());
        router?.push("/404");
      }
    } else {
      dispatch(stopLoading());
      router?.push("/login");
    }
  }, [isAuth]);

  const handleBody = () => {
    if (isLoading) {
      return <Loading />;
    }

    return children;
  };

  return (
    <Layout isSection={Sections.includes(router.route)} active={router.route}>
      {handleBody()}
    </Layout>
  );
};

export default Routing;
