import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Opacity from "./Opacity";

const LayoutContainer = styled.div`
  width: 100%;
  left: 0;
  top: 0;
`;

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Opacity>
      <Header />
      <LayoutContainer>{props.children}</LayoutContainer>
    </Opacity>
  </div>
);

export default Layout;
