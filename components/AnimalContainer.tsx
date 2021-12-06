import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Place from "../models/Place";
import AnimalRectTile from "./AnimalRectTile";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const AnimalContainerCard = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  min-width: 800px;
  min-height: 400px;
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  min-height: 400px;
  min-width: 300px;
`;

const Data = styled.div`
  box-shadow: rgba(50, 50, 93, 0.45) 0 6px 14px -5px,
    rgba(0, 0, 0, 0.35) 0px 4px 8px -4px;
  border-right: none;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-evenly;
  margin-right: 16px;
`;

const Header = styled.h1`
  font-family: "Merienda", cursive;
  font-weight: 400;
  font-size: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 20px 8px 20px;
  align-items: center;
  background-color: #515151;
  color: white;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
`;

const BodyText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.67);
  letter-spacing: 1px;
  width: 150px;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 16px 8px 0 !important;
`;

const AnimalContainerUnits = styled.div`
  width: 60%;
  box-shadow: rgba(50, 50, 93, 0.45) 0 6px 14px -5px,
    rgba(0, 0, 0, 0.35) 0px 4px 8px -4px;
  height: 400px;
  overflow-y: scroll;
  cursor: default;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

type Props = {
  places: Place[];
  onTileClick: (id: string) => void;
};

const AnimalContainer = ({ places, onTileClick }: Props) => {
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
