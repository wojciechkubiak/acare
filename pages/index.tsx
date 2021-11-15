import React, { useContext, useState, useEffect } from "react";
import AnimatedMenuButton from "../components/AnimatedMenuButton";
import AuthContext from "../context/AuthContext";
import Animal from "../assets/animal.png";
import Food from "../assets/food.png";
import Place from "../assets/place.png";
import Chart from "../assets/chart.png";
import Vet from "../assets/vet.png";
import Settings from "../assets/settings.png";
import { BiExit } from "react-icons/bi";
import styled from "styled-components";
import router from "next/router";
import { browser } from "process";
import { BaseRoutes } from "../utils/Routes";

type Props = {};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuContainer = styled.div`
  max-width: 1040px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const ButtonContainer = styled.div`
  height: 200px;
`;

const Header = styled.h1`
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

const HeaderContainer = styled.h1`
  position: fixed;
  margin: 0 !important;
  min-height: 50px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogOutButton = styled(BiExit)`
  cursor: pointer;
`;

const Menu: React.FC<Props> = () => {
  const authCtx = useContext(AuthContext);

  const logOut = () => {
    document.cookie = ``;
    sessionStorage.removeItem("authToken");

    router.push("/login");
  };

  return (
    <>
      {authCtx.isAuth && (
        <>
          <HeaderContainer>
            <Header onClick={() => router.push("/")}>Animacare</Header>
            <LogOutButton onClick={logOut} size={42} />
          </HeaderContainer>
          <Container>
            <MenuContainer>
              <AnimatedMenuButton
                imgSrc={Animal}
                text="Animals"
                onClick={() => router.push(BaseRoutes.animals)}
              />
              <AnimatedMenuButton
                imgSrc={Food}
                text="Food"
                onClick={() => router.push(BaseRoutes.food)}
              />
              <AnimatedMenuButton
                imgSrc={Place}
                text="Cages"
                onClick={() => router.push(BaseRoutes.cages)}
              />
              <AnimatedMenuButton
                imgSrc={Chart}
                text="Charts"
                onClick={() => router.push(BaseRoutes.charts)}
              />
              <AnimatedMenuButton
                imgSrc={Vet}
                text="Vets"
                onClick={() => router.push(BaseRoutes.vets)}
              />
              <AnimatedMenuButton
                imgSrc={Settings}
                text="Settings"
                onClick={() => router.push(BaseRoutes.settings)}
              />
            </MenuContainer>
          </Container>
        </>
      )}
    </>
  );
};

export default Menu;
