import React, { useContext } from "react";
import styled from "styled-components";
import AnimatedMenuButton from "./AnimatedMenuButton";
import Animal from "../assets/animal.png";
import router, { useRouter } from "next/router";
import { BaseRoutes } from "../utils/Routes";
import Food from "../assets/food.png";
import Place from "../assets/place.png";
import Chart from "../assets/chart.png";
import Vet from "../assets/vet.png";
import Settings from "../assets/settings.png";
import VerticalMenuButton from "./VerticalMenuButton";
import AuthContext from "../context/AuthContext";
import { BiExit } from "react-icons/bi";
import LogoSrc from "../assets/logo.png";

const Container = styled.div`
  width: 80px;
  left: 0;
  top: 0;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 1000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 16px 0 16px 0;
`;

const LogOutButton = styled(BiExit)`
  color: black;
  cursor: pointer;
  transition: 500ms all;
  --webkit-filter: invert(25%);
  filter: invert(25%);

  &:hover {
    --webkit-filter: invert(15%);
    filter: invert(15%);
  }
`;

const LogoText = styled.h1`
  font-family: "Merienda", cursive;
  font-weight: 400;
  font-size: 32px;
  cursor: default;
  transition: 500ms all;
  --webkit-filter: invert(25%);
  filter: invert(25%);

  &:hover {
    --webkit-filter: invert(15%);
    filter: invert(15%);
  }
`;

interface IVerticalMenu {
  active: string;
}

const VerticalMenu = ({ active }: IVerticalMenu) => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  const logOut = () => {
    console.log(authCtx);
    document.cookie = "refreshToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    sessionStorage.removeItem("authToken");
    authCtx.setTokens("", "", false, false);
    router.push("/login");
  };

  return (
    <Container>
      <LogoText>Ac</LogoText>
      <div>
        <VerticalMenuButton
          imgSrc={Animal}
          text="Animals"
          onClick={() => router.push(BaseRoutes.animals)}
          isActive={router.route === BaseRoutes.animals}
        />
        <VerticalMenuButton
          imgSrc={Food}
          text="Food"
          onClick={() => router.push(BaseRoutes.food)}
          isActive={router.route === BaseRoutes.food}
        />
        <VerticalMenuButton
          imgSrc={Place}
          text="Containers"
          onClick={() => router.push(BaseRoutes.cages)}
          isActive={router.route === BaseRoutes.cages}
        />
        <VerticalMenuButton
          imgSrc={Chart}
          text="Charts"
          onClick={() => router.push(BaseRoutes.charts)}
          isActive={router.route === BaseRoutes.charts}
        />
        <VerticalMenuButton
          imgSrc={Vet}
          text="Vets"
          onClick={() => router.push(BaseRoutes.vets)}
          isActive={router.route === BaseRoutes.vets}
        />
        <VerticalMenuButton
          imgSrc={Settings}
          text="Settings"
          onClick={() => router.push(BaseRoutes.settings)}
          isActive={router.route === BaseRoutes.settings}
        />
      </div>
      <LogOutButton onClick={logOut} size={42} />
    </Container>
  );
};

export default VerticalMenu;
