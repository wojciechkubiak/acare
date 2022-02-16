import styled from "styled-components";

import { BiExit } from "react-icons/bi";

export const Container = styled.div`
  width: 80px;
  left: 0;
  top: 0;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 1000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 16px 0 16px 0;
`;

export const LogOutButton = styled(BiExit)`
  color: black;
  cursor: pointer;
  transition: 500ms all;
  --webkit-filter: invert(25%);
  filter: invert(25%);

  &:hover {
    --webkit-filter: invert(15%);
    filter: invert(15%);
  }
`;

export const LogoText = styled.h1`
  font-family: "Merienda", cursive;
  font-weight: 400;
  font-size: 32px;
  cursor: default;
  transition: 500ms all;
  --webkit-filter: invert(25%);
  filter: invert(25%);

  &:hover {
    --webkit-filter: invert(15%);
    filter: invert(15%);
  }
`;
