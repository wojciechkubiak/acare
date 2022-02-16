import React from "react";
import { GiFemale, GiMale } from "react-icons/gi";

import { Container, Tile, Header } from "./AnimalRectTileStyled";
import Animal from "../../models/Animal";

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
