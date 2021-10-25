import React, { ReactNode, useContext, useEffect } from "react";
import LoadingContext from "../context/LoadingContext";
import Loading from "./Loading";
import styled from "styled-components";

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

const Layout: React.FC<Props> = (props) => {
  const loadingCtx = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      loadingCtx.setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {!loadingCtx.isContentVisible ? (
        <Loading />
      ) : (
        <LayoutContainer>{props.children}</LayoutContainer>
      )}
    </div>
  );
};

export default Layout;
