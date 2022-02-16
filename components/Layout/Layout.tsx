import React, { ReactNode } from "react";

import Header from "../Header/Header";
import VerticalMenu from "../VerticalMenu/VerticalMenu";
import Opacity from "../Opacity/Opacity";
import { LayoutContainer } from "./LayoutStyled";

interface ILayout {
  children: ReactNode;
  isSection: boolean;
  active: string;
}

const Layout: React.FC<ILayout> = ({
  children,
  isSection,
  active,
}: ILayout) => (
  <div>
    <Opacity>
      {!isSection && <Header />}
      {isSection && <VerticalMenu active={active} />}
      <LayoutContainer>{children}</LayoutContainer>
    </Opacity>
  </div>
);

export default Layout;
