import router from "next/router";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import { BaseRoutes } from "../utils/Routes";
import { Form } from "react-bootstrap";
import Animal from "../models/Animal";
import Place from "../models/Place";
import Animals from "../json/Animals.json";
import Places from "..//json/Places.json";
import AnimalRectTile from "../components/AnimalRectTile";
import FullscreenLayout from "../components/FullscreenLayout";
import FormContainer from "../components/FormContainer";
import SubmitButton from "../components/SubmitButton";

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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
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
    background-color: #fafafa;
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
    background-color: #fafafa;
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
  padding: 0px;
`;

const Control = styled(Form.Control)`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  border: 2px solid gray;
  padding: 10px 20px 10px 20px;
  border-radius: 2px;
  font-size: 32px;
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

  const appendAnimals = (animal: Animal) => {
    setAnimals((current) => current.concat(animal));
  };

  const appendPlaces = (place: Place) => {
    setPlaces((current) => current.concat(place));
  };

  // const handleData = (
  //   input: Animal | Place,
  //   current: Animal[] | Place[],
  //   cb: Function
  // ) => {
  //   cb(() => current.concat(input));
  // };

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
  };

  const handleShowContainerPicker = (id: string) => {
    setShowContainerPicker(true);
    setCurrentAnimal(id);
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
                key={animal.id}
                onClick={handleShowContainerPicker}
              />
            ))
          )}
        </AnimalsContainer>
        <SectionHeader text="Containers" />
        <AnimalContainers>
          {places.length > 0 ? (
            places?.map((place) => <h1>{place.id}</h1>)
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
              {/* <ControlHeader>Possible containers:</ControlHeader> */}
              {places?.length > 0 ? (
                <>
                  <Control as="select" onChange={() => {}}>
                    <option value={null}></option>
                    {places?.map((place) => (
                      <option value={place.id}>{place.name}</option>
                    ))}
                  </Control>
                  <Button>
                    <SubmitButton
                      btnType="button"
                      onClick={() => {}}
                      isDisabled={false}
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
