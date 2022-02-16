import React from "react";

import Animal from "../../assets/animal.png";
import Food from "../../assets/food.png";
import Place from "../../assets/place.png";
import Chart from "../../assets/chart.png";
import Vet from "../../assets/vet.png";
import Settings from "../../assets/settings.png";

import { BaseRoutes } from "../../utils/Routes";

import VerticalMenuButton from "../VerticalMenuButton/VerticalMenuButton";
import { useAppDispatch } from "../../store";
import { useRouter } from "next/router";
import { logout } from "../../store/auth/auth-slice";
import { Container, LogoText, LogOutButton } from "./VerticalMenuStyled";

interface IVerticalMenu {
  active: string;
}

const VerticalMenu = ({ active }: IVerticalMenu) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logOut = () => {
    document.cookie = "refreshToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    sessionStorage.removeItem("authToken");
    dispatch(logout());
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
