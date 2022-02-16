import styled from "styled-components";

import { BiExit } from "react-icons/bi";

interface StyledProps {
  isOut: boolean;
}

export const HeaderContainer = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  margin: 0 !important;
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  transition: 500ms;
  box-shadow: ${(props) =>
    props.isOut
      ? "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      : "none"};
  background-color: ${(props) => (props.isOut ? "white" : "transparent")};
`;

export const LogOutButton = styled(BiExit)`
  cursor: pointer;
  transition: 500ms all;
  --webkit-filter: invert(25%);
  filter: invert(25%);

  &:hover {
    --webkit-filter: invert(15%);
    filter: invert(15%);
  }
`;

export const Logo = styled.h1`
  font-family: "Merienda", cursive;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.67);
  font-size: 32px;
  text-align: center;
  cursor: pointer;
  margin: 0 !important;
  padding-left: 20px;
`;
