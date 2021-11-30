import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { FaTrash } from "react-icons/fa";
import Place from "../models/Place";
import AnimalRectTile from "./AnimalRectTile";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AnimalContainerCard = styled.div`
  border: 4px dotted #c1c1c1;
  margin-top: 24px;
  margin-bottom: 24px;
  width: 80%;
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
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 14px -5px,
    rgba(0, 0, 0, 0.3) 0px 4px 8px -8px;
  border: 4px solid #515151;
  border-right: none;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-evenly;
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
  color: rgba(0, 0, 0, 0.87);
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
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 14px -5px,
    rgba(0, 0, 0, 0.3) 0px 4px 8px -8px;
  height: 400px;
  overflow-y: scroll;
  border: 4px solid #515151;
  cursor: default;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const Trashcan = styled(FaTrash)`
  color: white;
  cursor: pointer;
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
            <Header>
              <Trashcan size={24} />
              {place.name}
            </Header>
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
