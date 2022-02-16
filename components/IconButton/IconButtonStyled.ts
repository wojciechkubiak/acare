import { IconBaseProps } from "react-icons";
import styled from "styled-components";

interface StyledProps {
  iconSize?: number;
  margin?: string;
}

export const Button = styled.button<StyledProps>`
  width: ${(props) => `${props.iconSize}px`};
  height: ${(props) => `${props.iconSize}px`};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  outline: none;
  box-shadow: none;
  border: none;
`;
