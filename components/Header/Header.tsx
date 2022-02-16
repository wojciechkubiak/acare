import React from "react";

import { useRouter } from "next/router";

import useScroll from "../../hooks/useScroll";
import { useAppDispatch, useAppSelector } from "../../store";
import { logout } from "../../store/auth/auth-slice";
import { HeaderContainer, Logo, LogOutButton } from "./HeaderStyled";

const ERROR_ROUTE = "/404";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isOut = useScroll();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const logOut = () => {
    document.cookie = "refreshToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("refresh_token");
    dispatch(logout());
    router.push("/login");
  };

  return (
    <HeaderContainer isOut={isOut}>
      {/*<Logo onClick={() => router.push("/")}>Animacare</Logo>*/}
      {isAuth && router.pathname !== ERROR_ROUTE && (
        <LogOutButton onClick={logOut} size={42} />
      )}
    </HeaderContainer>
  );
};

export default Header;
