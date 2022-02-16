import router from "next/router";
import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import { BaseRoutes } from "../utils/Routes";
import { v4 as uuid } from "uuid";
import Animal from "../models/Animal";
import Place, { Containers as PlaceType, LengthUnits } from "../models/Place";
import Animals from "../json/Animals.json";
import Places from "..//json/Places.json";
import AnimalRectTile from "../components/AnimalRectTile/AnimalRectTile";
import FullscreenLayout from "../components/FullscreenLayout/FullscreenLayout";
import FormContainer from "../components/FormContainer/FormContainer";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import AnimalContainer from "../components/AnimalContainer/AnimalContainer";
import BottomMenu from "../components/BottomMenu/BottomMenu";
import IconButton from "../components/IconButton/IconButton";
import VerticalDottedDivider from "../components/VerticalDottedDivider/VerticalDottedDivider";
import {
  AnimalContainers,
  Container,
  AnimalsContainer,
  Info,
  Button,
  CloseButton,
  Control,
  ControlHeader,
  FormHeader,
  ID,
  TransferIcon,
  Label,
  RemoveIcon,
  Option,
  AddIcon,
} from "../styles/ContainersStyled";
enum ActiveLayout {
  NONE,
  AVAILABLE,
  ADD,
  TRANSFER,
  REMOVE,
}

const Containers: React.FC = () => {
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
