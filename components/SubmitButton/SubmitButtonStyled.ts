import styled from "styled-components";

import { BsArrowRight } from "react-icons/bs";

interface StyledProps {
  isOver: boolean;
}

export const Btn = styled.button`
  cursor: pointer;
  transition: 500ms all;
  background-color: rgb(134, 190, 137);
  box-shadow: none;
  border: none;
  padding: 0 42px !important;
  border-radius: 32px;
`;

export const Arrow = styled(BsArrowRight)<StyledProps>`
  transition: 500ms all;
`;
