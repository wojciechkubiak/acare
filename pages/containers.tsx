import router from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import { BaseRoutes } from "../utils/Routes";
import { Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import Animal from "../models/Animal";
import Place, { Containers as PlaceType, LengthUnits } from "../models/Place";
import Animals from "../json/Animals.json";
import Places from "..//json/Places.json";
import AnimalRectTile from "../components/AnimalRectTile";
import FullscreenLayout from "../components/FullscreenLayout";
import FormContainer from "../components/FormContainer";
import SubmitButton from "../components/SubmitButton";
import AnimalContainer from "../components/AnimalContainer";
import BottomMenu from "../components/BottomMenu";
import IconButton from "../components/IconButton";

import { MdLibraryAdd } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import VerticalDottedDivider from "../components/VerticalDottedDivider";

interface Props {}

type AnimalContainerStyle = {
  isEmpty: boolean;
};

const Container = styled.div`
  min-width: 1040px;
  width: 70%;
  min-height: 200px;
  background-color: white;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 90px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  margin-bottom: 24px;
`;

const AnimalsContainer = styled.div<AnimalContainerStyle>`
  width: 100%;
  min-height: 200px;
  border: 3px dotted #7b7b7b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 24px;
  transition: 500ms all;
  padding-top: 24px;
  padding-bottom: 24px;
  cursor: ${(props) => (props.isEmpty ? "pointer" : "default")};

  & :hover {
    transition: 500ms all;
  }
`;

const AnimalContainers = styled.div`
  width: 100%;
  min-height: 200px;
  border: 3px dotted #7b7b7b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 24px;
  transition: 500ms all;

  & :hover {
    transition: 500ms all;
  }
`;

const Info = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.67);
  font-size: 16px;
`;

const FormHeader = styled.h1`
  font-family: "Merienda", cursive;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.67);
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

const ControlHeader = styled.h3`
  margin-top: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.67);
  font-size: 28px;
  text-align: center;
`;

const ID = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.87);
  font-size: 24px;
  text-align: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: end;
  padding: 0;
`;

const Control = styled(Form.Control)`
  margin-top: 12px;
  margin-bottom: 12px;
  width: 100%;
  border: 4px solid #515151;
  padding: 10px 20px 10px 20px;
  border-radius: 2px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.8);
  font-family: "Roboto", sans-serif;

  &:focus {
    border: 4px solid #515151;
    outline: none;
    box-shadow: none;
  }
  &:active {
    border: 4px solid #515151;
    outline: none;
    box-shadow: none;
  }
`;

const Label = styled(Form.Label)`
  width: 100%;
  padding-left: 12px;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.8);
  font-family: "Roboto", sans-serif;
`;

const Option = styled.option`
  color: #515151;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  padding: 20px 10px 20px 10px;
`;

const HeaderButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 24px;
  cursor: pointer;
`;

const AddIcon = styled(MdLibraryAdd)`
  transition: 500ms all;
  --webkit-filter: invert(25%);
  filter: invert(25%);

  &:hover {
    --webkit-filter: invert(15%);
    filter: invert(15%);
  }
`;

const TransferIcon = styled(BiTransferAlt)`
  transition: 500ms all;
  --webkit-filter: invert(25%);
  filter: invert(25%);

  &:hover {
    --webkit-filter: invert(15%);
    filter: invert(15%);
  }
`;

const RemoveIcon = styled(FaTrash)`
  transition: 500ms all;
  --webkit-filter: invert(25%);
  filter: invert(25%);

  &:hover {
    --webkit-filter: invert(15%);
    filter: invert(15%);
  }
`;

enum ActiveLayout {
  NONE,
  AVAILABLE,
  ADD,
  TRANSFER,
  REMOVE,
}

const Containers: React.FC<Props> = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [places, setPlaces] = useState<Place[]>([]);
  const [activeLayout, setActiveLayout] = useState<ActiveLayout>(
    ActiveLayout.NONE
  );

  const [currentAnimal, setCurrentAnimal] = useState<string | null>();
  const [currentPlace, setCurrentPlace] = useState<string | null>();

  const [type, setType] = useState<PlaceType>(PlaceType.CAGE);
  const [unit, setUnit] = useState<LengthUnits>(LengthUnits.CM);
  const [newName, setNewName] = useState<string>("");
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [depth, setDepth] = useState<number>(0);

  const clearData = () => {
    setType(PlaceType.CAGE);
    setUnit(LengthUnits.CM);
    setNewName("");
    setWidth(0);
    setHeight(0);
    setDepth(0);
  };
  const appendAnimals = (animal: Animal) => {
    setAnimals((current) => current.concat(animal));
  };

  const appendPlaces = (place: Place) => {
    setPlaces((current) => current.concat(place));
  };

  useEffect(() => {
    const animals = Animals["results"];

    for (const animal of animals) {
      const AnimalUnit = new Animal();
      AnimalUnit.parse(animal);

      appendAnimals(AnimalUnit);
    }
  }, []);

  useEffect(() => {
    const places = Places["results"];

    for (const place of places) {
      const PlaceUnit = new Place();
      PlaceUnit.parse(place);

      appendPlaces(PlaceUnit);
    }
  }, []);

  const handleHideContainerPicker = () => {
    setActiveLayout(ActiveLayout.NONE);
    setCurrentAnimal(null);
    setCurrentPlace(null);
  };

  const handleShowContainerPicker = (id: string) => {
    setActiveLayout(ActiveLayout.AVAILABLE);
    setCurrentAnimal(id);
  };

  const insertAnimalIntoPlace = () => {
    const animalIndex = animals.findIndex(
      (animal) => animal.id === currentAnimal
    );
    const placeIndex = places.findIndex((place) => place.id === currentPlace);

    if (animalIndex !== -1 && placeIndex !== -1) {
      const animal = animals[animalIndex];
      if (animal) {
        const newPlaces = places;
        const newAnimals = animals;

        newPlaces[placeIndex].animals.push(animal);
        newAnimals.splice(animalIndex, 1);

        setPlaces(newPlaces);
        setAnimals(newAnimals);
      }

      handleHideContainerPicker();
    } else if (animalIndex === -1 && placeIndex !== -1) {
      findAnimal(places, currentAnimal, placeIndex);
    }
  };

  const findAnimal = (
    oldPlaces: Place[],
    animalIndex: string,
    newPlaceIndex: number
  ) => {
    const newPlaces = places;

    for (const [index, place] of places.entries()) {
      const animalIndex = place.animals.findIndex(
        (animal) => animal.id === currentAnimal
      );

      if (animalIndex !== -1) {
        const newAnimal: Animal = place.animals[animalIndex];
        newPlaces[index].animals.splice(animalIndex, 1);
        newPlaces[newPlaceIndex].animals.push(newAnimal);

        setPlaces(newPlaces);
        handleHideContainerPicker();
      }
    }
  };

  const insertNewPlace = () => {
    const placesCopy = places;
    let newPlace = new Place();

    newPlace.id = uuid(); //TODO: Created by backend/db - remove
    newPlace.name = newName;
    newPlace.type = type;
    newPlace.width = width;
    newPlace.height = height;
    newPlace.depth = depth;
    newPlace.units = unit;

    placesCopy.push(newPlace);

    setPlaces(placesCopy);
    clearData();
    setActiveLayout(ActiveLayout.NONE);
  };
  const MARGIN = "0 16px 0 16px";

  return (
    <>
      <BottomMenu>
        <IconButton
          size={72}
          onClick={() => setActiveLayout(ActiveLayout.ADD)}
          margin={MARGIN}
        >
          <AddIcon size={72} />
        </IconButton>
        <IconButton
          size={72}
          onClick={() => setActiveLayout(ActiveLayout.TRANSFER)}
          margin={MARGIN}
        >
          <TransferIcon size={72} />
        </IconButton>
        <VerticalDottedDivider />
        <IconButton
          size={72}
          onClick={() => setActiveLayout(ActiveLayout.REMOVE)}
          margin={MARGIN}
        >
          <RemoveIcon size={72} />
        </IconButton>
      </BottomMenu>
      <Container>
        <SectionHeader text="Available animals" />
        <AnimalsContainer
          onClick={() => {
            if (animals?.length === 0) {
              router.push(BaseRoutes.animals);
            }
          }}
          isEmpty={animals?.length === 0}
        >
          {animals?.length === 0 ? (
            <Info>
              No animals found. Click to add <strong>new animal</strong>.
            </Info>
          ) : (
            animals?.map((animal) => (
              <AnimalRectTile
                animal={animal}
                key={uuid()}
                onClick={handleShowContainerPicker}
              />
            ))
          )}
        </AnimalsContainer>
        <SectionHeader text="Containers" />
        <AnimalContainers>
          {places.length > 0 ? (
            <AnimalContainer
              places={places}
              onTileClick={handleShowContainerPicker}
            />
          ) : (
            <Info>
              Seems like your animals have no place to live. Click to add{" "}
              <strong>new one</strong>.
            </Info>
          )}
        </AnimalContainers>
      </Container>
      {activeLayout === ActiveLayout.ADD && (
        <FullscreenLayout>
          <FormContainer>
            <div>
              <CloseButton
                onClick={() => {
                  setActiveLayout(ActiveLayout.NONE);
                  clearData();
                }}
              >
                x
              </CloseButton>
              <FormHeader>Create new container:</FormHeader>
              {places?.length > 0 ? (
                <>
                  <Control
                    as="select"
                    onChange={(event) => setType(PlaceType[event.target.value])}
                    defaultValue={type}
                  >
                    {Object.values(PlaceType).map((type) => (
                      <Option key={uuid()} value={type}>
                        {type}
                      </Option>
                    ))}
                  </Control>
                  <Control
                    onChange={(event) => setNewName(event.target.value)}
                    defaultValue={newName}
                    placeholder="Enter name"
                  />
                  <Label>Width:</Label>
                  <Control
                    type="number"
                    onChange={(event) => setWidth(Number(event.target.value))}
                    defaultValue={width}
                    placeholder="Enter width"
                  />
                  <Label>Height:</Label>
                  <Control
                    type="number"
                    onChange={(event) => setHeight(Number(event.target.value))}
                    defaultValue={height}
                    placeholder="Enter height"
                  />
                  <Label>Depth:</Label>
                  <Control
                    type="number"
                    onChange={(event) => setDepth(Number(event.target.value))}
                    defaultValue={depth}
                    placeholder="Enter depth"
                  />
                  <Control
                    as="select"
                    onChange={(event) =>
                      setUnit(LengthUnits[event.target.value])
                    }
                    defaultValue={unit}
                    placeholder="Enter name"
                  >
                    {Object.values(LengthUnits).map((unit) => (
                      <Option key={uuid()} value={unit}>
                        {unit}
                      </Option>
                    ))}
                  </Control>
                  <Button>
                    <SubmitButton
                      btnType="button"
                      onClick={insertNewPlace}
                      isDisabled={!(width && height && depth && newName.length)}
                    />
                  </Button>
                </>
              ) : (
                <ControlHeader>No containers available</ControlHeader>
              )}
            </div>
          </FormContainer>
        </FullscreenLayout>
      )}
      {activeLayout === ActiveLayout.AVAILABLE && currentAnimal && (
        <FullscreenLayout>
          <FormContainer>
            <div>
              <CloseButton onClick={handleHideContainerPicker}>x</CloseButton>
              <FormHeader>Pick container for:</FormHeader>
              <ID>{currentAnimal}</ID>
              {places?.length > 0 ? (
                <>
                  <Control
                    as="select"
                    onChange={(event) => {
                      setCurrentPlace(event.target.value);
                    }}
                    value={currentPlace}
                  >
                    <Option value={null} />
                    {places?.map((place) => (
                      <Option key={uuid()} value={place.id}>
                        {place.name}
                      </Option>
                    ))}
                  </Control>
                  <Button>
                    <SubmitButton
                      btnType="button"
                      onClick={insertAnimalIntoPlace}
                      isDisabled={!currentAnimal || !currentPlace}
                    />
                  </Button>
                </>
              ) : (
                <ControlHeader>No containers available</ControlHeader>
              )}
            </div>
          </FormContainer>
        </FullscreenLayout>
      )}
    </>
  );
};

export default Containers;
