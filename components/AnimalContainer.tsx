import styled from "styled-components";
import { v4 as uuid } from "uuid";

import Place from "../models/Place";
import AnimalRectTile from "./AnimalRectTile";

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
  justify-content: space-between;
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
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Header = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  background-color: #494949;
  color: white;
  text-align: center;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const BodyText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  width: 120px;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0 8px 0 !important;
`;

const AnimalContainerUnits = styled.div`
  width: 60%;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  height: 400px;
  overflow-y: scroll;
  cursor: default;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
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
    <div>
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
    </div>
  );
};

export default AnimalContainer;
