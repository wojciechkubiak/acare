import React, { ReactNode } from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.3);
  position: fixed;
  left: 0;
  top: 0;
`;

type Props = {
  children: ReactNode;
  hide: () => void;
};

const FullscreenLayout: React.FC<Props> = ({ children, hide }: Props) => (
  <Layout onClick={hide}>{children}</Layout>
);

export default FullscreenLayout;
