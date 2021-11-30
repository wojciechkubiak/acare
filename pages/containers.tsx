import router from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import { BaseRoutes } from "../utils/Routes";
import { Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import Animal from "../models/Animal";
import Place from "../models/Place";
import Animals from "../json/Animals.json";
import Places from "..//json/Places.json";
import AnimalRectTile from "../components/AnimalRectTile";
import FullscreenLayout from "../components/FullscreenLayout";
import FormContainer from "../components/FormContainer";
import SubmitButton from "../components/SubmitButton";
import AnimalContainer from "../components/AnimalContainer";
import AddButton from "../components/AddButton";

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
  border: 3px dotted #d1cfe2;
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
  border: 3px dotted #d1cfe2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 24px;
  transition: 500ms all;
  cursor: pointer;

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
  color: rgba(0, 0, 0, 0.67);
  font-size: 24px;
  text-align: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: end;
  padding: 0;
`;

const Control = styled(Form.Control)`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  border: 2px solid gray;
  padding: 10px 20px 10px 20px;
  border-radius: 2px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.8);
  font-family: "Roboto", sans-serif;
  &:focus {
    border: 2px solid gray;
  }
  &:active {
    border: 2px solid gray;
  }
`;

const Option = styled.option`
  color: rgba(0, 0, 0, 0.6);
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

const Containers: React.FC<Props> = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [places, setPlaces] = useState<Place[]>([]);
  const [showContainerPicker, setShowContainerPicker] =
    useState<boolean>(false);

  const [currentAnimal, setCurrentAnimal] = useState<string | null>();
  const [currentPlace, setCurrentPlace] = useState<string | null>();

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
    setShowContainerPicker(false);
    setCurrentAnimal(null);
    setCurrentPlace(null);
  };

  const handleShowContainerPicker = (id: string) => {
    setShowContainerPicker(true);
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

  return (
    <>
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
        <HeaderButton>
          <SectionHeader text="Containers" />
          <AddButton isDisabled={false} onClick={() => {}} />
        </HeaderButton>
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
      {showContainerPicker && currentAnimal && (
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
                  </Button>{" "}
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
