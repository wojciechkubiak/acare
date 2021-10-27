import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  font-family: "Merienda", cursive;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.67);
  text-align: center;
  margin-top: 32px;
`;

interface IAppNameHeader {
  text?: string;
  margin?: number;
}

const AppNameHeader = (props: IAppNameHeader) => (
  <Header>{props.text ?? "Acare"}</Header>
);

export default AppNameHeader;
