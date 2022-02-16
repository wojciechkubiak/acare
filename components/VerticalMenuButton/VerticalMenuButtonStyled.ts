import styled from "styled-components";

interface StyledProps {
  isOver: boolean;
  isActive?: boolean;
}

export const Button = styled.div<StyledProps>`
  margin-bottom: 12px;
  margin-top: 12px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 500ms all;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid ${(props) => (props.isActive ? "#515151" : "white")};
`;

export const Image = styled.img<StyledProps>`
  transition: 500ms all;
  width: 36px;
  height: 36px;
  --webkit-filter: ${(props) => (props.isOver ? "invert(25%)" : "invert(15%)")};
  filter: ${(props) => (props.isOver ? "invert(25%)" : "invert(15%)")};
`;
