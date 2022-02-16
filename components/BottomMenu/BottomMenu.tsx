import React, { ReactNode } from "react";
import { Container } from "./BottomMenuStyled";

type IBottomMenu = {
  children: ReactNode;
};

const BottomMenu: React.FC<IBottomMenu> = ({ children }: IBottomMenu) => {
  return <Container>{children}</Container>;
};

export default BottomMenu;
