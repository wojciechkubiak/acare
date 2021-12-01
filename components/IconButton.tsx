import { IconBaseProps } from "react-icons";
import styled from "styled-components";
import React, { ReactNode } from "react";

type StyledProps = {
  iconSize?: number;
  margin?: string;
};

const Button = styled.button<StyledProps>`
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

type Props = {
  children: ReactNode;
  size: number;
  margin?: string;
  onClick: () => void;
};

const IconButton: React.FC<Props> = ({
  children,
  onClick,
  margin,
  size,
}: Props) => (
  <Button onClick={onClick} iconSize={size} margin={margin}>
    {children}
  </Button>
);

export default IconButton;
