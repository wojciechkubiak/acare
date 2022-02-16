import styled from "styled-components";

type TileStyle = {
  color?: string;
  isOver?: boolean;
  size?: number;
};

export const Container = styled.div<TileStyle>`
  width: 132px;
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
`;

export const Tile = styled.div<TileStyle>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 14px -5px,
    rgba(0, 0, 0, 0.3) 0px 4px 8px -4px;
  transition: 500ms all;
  border: 4px solid ${(props) => props.color};

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Header = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  transition: 500ms all;
  margin: 0;
`;
