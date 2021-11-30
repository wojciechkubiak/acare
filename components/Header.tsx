import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { BiExit } from "react-icons/bi";
import AuthContext from "../context/AuthContext";

const ERROR_ROUTE = "/404";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  margin: 0 !important;
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogOutButton = styled(BiExit)`
  cursor: pointer;
  transition: 500ms all;
  --webkit-filter: invert(25%);
  filter: invert(25%);

  &:hover {
    --webkit-filter: invert(15%);
    filter: invert(15%);
  }
`;

const Logo = styled.h1`
  font-family: "Merienda", cursive;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.67);
  font-size: 32px;
  text-align: center;
  cursor: pointer;
  margin: 0 !important;
  padding-left: 20px;
  padding-top: 8px;
`;

const Header: React.FC = () => {
  const router = useRouter();

  const authCtx = useContext(AuthContext);
  // const isActive: (pathname: string) => boolean = (pathname) =>
  //   router.pathname === pathname;

  const logOut = () => {
    console.log(authCtx);
    document.cookie = "refreshToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    sessionStorage.removeItem("authToken");
    authCtx.setTokens("", "", false, false);
    router.push("/login");
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => router.push("/")}>Animacare</Logo>
      {authCtx.isAuth && router.pathname !== ERROR_ROUTE && (
        <LogOutButton
          onClick={logOut}
          size={42}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
