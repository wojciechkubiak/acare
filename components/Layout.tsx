import React, { ReactNode } from "react";
import styled from "styled-components";
import Opacity from "./Opacity";

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  position: fixed;
  left: 0;
  top: 0;
`;

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Opacity>
      <LayoutContainer>{props.children}</LayoutContainer>
    </Opacity>
  </div>
);

export default Layout;
