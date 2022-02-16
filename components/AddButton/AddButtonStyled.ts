import styled from "styled-components";

import { BsPlusSquareDotted } from "react-icons/bs";

export interface StyledProps {
  isOver: boolean;
}

export const Btn = styled.button`
  cursor: pointer;
  transition: 500ms all;
  background-color: transparent;
  box-shadow: none;
  border: none;
`;

export const Add = styled(BsPlusSquareDotted)<StyledProps>`
  transition: 500ms all;
  --webkit-filter: ${(props) => (props.isOver ? "invert(25%)" : "invert(15%)")};
  filter: ${(props) => (props.isOver ? "invert(25%)" : "invert(15%)")};
`;
