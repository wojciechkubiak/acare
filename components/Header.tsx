import React, { useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { BiExit } from "react-icons/bi";
import useScroll from "../hooks/useScroll";
import AuthContext from "../context/AuthContext";

const ERROR_ROUTE = "/404";
interface StyledProps {
  isOut: boolean;
}

const HeaderContainer = styled.div<StyledProps>`
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
  align-items: center;
  height: 60px;
  transition: 500ms;
  box-shadow: ${(props) =>
    props.isOut
      ? "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      : "none"};
  background-color: ${(props) => (props.isOut ? "white" : "transparent")};
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
  const isOut = useScroll();
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
    <HeaderContainer isOut={isOut}>
      <Logo onClick={() => router.push("/")}>Animacare</Logo>
      {authCtx.isAuth && router.pathname !== ERROR_ROUTE && (
        <LogOutButton onClick={logOut} size={42} />
      )}
    </HeaderContainer>
  );
};

export default Header;
