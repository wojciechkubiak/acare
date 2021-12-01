import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import VerticalMenu from "./VerticalMenu";
import Opacity from "./Opacity";

const LayoutContainer = styled.div`
  width: 100%;
  left: 0;
  top: 0;
`;

type Props = {
  children: ReactNode;
  isSection: boolean;
  active: string;
};

const Layout: React.FC<Props> = ({ children, isSection, active }: Props) => (
  <div>
    <Opacity>
      {!isSection && <Header />}
      {isSection && <VerticalMenu active={active} />}
      <LayoutContainer>{children}</LayoutContainer>
    </Opacity>
  </div>
);

export default Layout;
