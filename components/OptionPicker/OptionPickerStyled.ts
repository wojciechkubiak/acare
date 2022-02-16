import styled from "styled-components";

interface StyledProps {
  isActive?: boolean;
  isLeft?: boolean;
}

export const Button = styled.button<StyledProps>`
  background-color: ${(props) =>
    props.isActive ? "rgb(134,190,137)" : "white"};
  padding: 2px 8px;
  height: 44px;
  width: 49%;
  outline: none;
  box-shadow: none;
  border: none;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) =>
    props.isActive ? "default !important" : "pointer !important"};
`;

export const Header = styled.h1<StyledProps>`
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding-top: 8px;
  color: ${(props) => (props.isActive ? "white" : "rgba(0, 0, 0, 0.6)")};
`;
