import styled from "styled-components";

interface StyledProps {
  isOver: boolean;
}

export const Button = styled.div<StyledProps>`
  width: 220px;
  height: 220px;
  margin: 20px;
  display: flex;
  padding: 20px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  box-shadow: ${(props) =>
    !props.isOver
      ? "rgba(50, 50, 93, 0.45) 0 13px 27px -5px, rgba(0, 0, 0, 0.35) 0px 8px 16px -8px"
      : "rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"};

  cursor: pointer;
  transition: 500ms all;
`;

export const Header = styled.h2<StyledProps>`
  transition: 500ms all;
  font-family: "Merienda", cursive;
  font-weight: 400;
  color: ${(props) =>
    !props.isOver ? "rgba(0, 0, 0, 0.87)" : "rgba(0, 0, 0, 0.67)"};
  & * {
    pointer-events: none;
  }
`;

export const Image = styled.img<StyledProps>`
  transition: 500ms all;
  --webkit-filter: ${(props) => (props.isOver ? "invert(25%)" : "invert(15%)")};
  filter: ${(props) => (props.isOver ? "invert(25%)" : "invert(15%)")};
`;
