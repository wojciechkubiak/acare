import React from "react";
import styled from "styled-components";
import Animal from "../models/Animal";
import { GiFemale, GiMale } from "react-icons/gi";

type TileStyle = {
  color?: string;
  isOver?: boolean;
  size?: number;
};

const Container = styled.div<TileStyle>`
  width: 132px;
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
`;

const Tile = styled.div<TileStyle>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 500ms all;
  border: 4px solid ${(props) => props.color};

  &:hover {
    transform: translateY(-10px);
  }
`;

const Header = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  transition: 500ms all;
  margin: 0;
`;

interface IAnimalRectTile {
  animal: Animal;
  onClick: (id: string) => void;
  tileSize?: number;
}

const AnimalRectTile = ({ animal, tileSize, onClick }: IAnimalRectTile) => {
  return (
    <Container onClick={() => onClick(animal.id)}>
      <Tile color={animal.color} size={!tileSize ? 112 : tileSize}>
        <Header>{animal.type[0]?.toUpperCase()}</Header>
        {animal.sex === "m" ? <GiMale size={24} /> : <GiFemale size={24} />}
      </Tile>
    </Container>
  );
};

export default AnimalRectTile;
