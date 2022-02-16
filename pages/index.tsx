import React, { useContext, useState, useEffect } from "react";
import AnimatedMenuButton from "../components/AnimatedMenuButton/AnimatedMenuButton";
import Animal from "../assets/animal.png";
import Food from "../assets/food.png";
import Place from "../assets/place.png";
import Chart from "../assets/chart.png";
import Vet from "../assets/vet.png";
import Settings from "../assets/settings.png";
import router from "next/router";
import { BaseRoutes } from "../utils/Routes";
import { useAppSelector } from "../store";
import { Container, MenuContainer } from "../styles/IndexStyled";

const Menu: React.FC = () => {
  const isAuth: boolean = useAppSelector((state) => state.auth.isAuth);

  return (
    <>
      {isAuth && (
        <>
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
                text="Containers"
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
