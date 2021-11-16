import React from "react";
import styled from "styled-components";
import Animal from "../models/Animal";
import { GiFemale, GiMale } from "react-icons/gi";

type TileStyle = {
  color?: string;
  isOver?: boolean;
};

const Container = styled.div`
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
  background-color: ${(props) => props.color};
  width: 112px;
  height: 112px;
  color: white;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 500ms all;

  &:hover {
    padding: 0px;
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
}

const AnimalRectTile = ({ animal, onClick }: IAnimalRectTile) => {
  return (
    <Container onClick={() => onClick(animal.id)}>
      <Tile color={animal.color}>
        <Header>{animal.type[0]?.toUpperCase()}</Header>
        {animal.sex === "m" ? <GiMale size={24} /> : <GiFemale size={24} />}
      </Tile>
    </Container>
  );
};

export default AnimalRectTile;
