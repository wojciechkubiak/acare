import React from "react";
import { v4 as uuid } from "uuid";

import Place from "../../models/Place";
import AnimalRectTile from "../AnimalRectTile/AnimalRectTile";
import {
  BodyText,
  Container,
  AnimalContainerUnits,
  ContainerData,
  Data,
  AnimalContainerCard,
  Header,
} from "./AnimalContainerStyled";

interface IAnimalContainer {
  places: Place[];
  onTileClick: (id: string) => void;
}

const AnimalContainer = ({ places, onTileClick }: IAnimalContainer) => {
  const Text = ({ title, text }): JSX.Element => {
    const _text = text.charAt(0).toUpperCase() + text.slice(1);

    return (
      <BodyText>
        <strong>{title}: </strong>
        {_text}
      </BodyText>
    );
  };

  return (
    <Container>
      {places?.map((place) => (
        <AnimalContainerCard key={uuid()}>
          <ContainerData>
            <Header>{place.name}</Header>
            <Data>
              <Text title="Type" text={place.type?.toString()} />
              <Text title="Width" text={`${place.width} ${place.units}`} />
              <Text title="Height" text={`${place.height} ${place.units}`} />
              <Text title="Depth" text={`${place.depth} ${place.units}`} />
            </Data>
          </ContainerData>
          <AnimalContainerUnits>
            {place?.animals?.map((animal) => (
              <AnimalRectTile
                animal={animal}
                key={uuid()}
                tileSize={82}
                onClick={() => onTileClick(animal.id)}
              />
            ))}
          </AnimalContainerUnits>
        </AnimalContainerCard>
      ))}
    </Container>
  );
};

export default AnimalContainer;
