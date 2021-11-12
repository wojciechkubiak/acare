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
  background: rgb(156, 173, 206);
  background: linear-gradient(
    90deg,
    rgba(156, 173, 206, 1) 0%,
    rgba(209, 207, 226, 1) 35%,
    rgba(212, 175, 185, 1) 100%
  );
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
