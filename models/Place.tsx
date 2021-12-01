import Animal from "./Animal";

export enum Containers {
  CAGE = "cage",
  AQUARIUM = "aquarium",
  TERRARIUM = "terrarium",
}

export enum LengthUnits {
  CM = "cm",
  M = "m",
  MM = "mm",
  FT = "feet",
  IN = "inch",
}

export enum Units {
  KG = "kg",
  LB = "lb",
  G = "g",
  CM = "cm",
  M = "m",
  MM = "mm",
  FT = "feet",
  IN = "inch",
}

export default class Place {
  public id: string | null = null;
  public name: string = "";
  public type: Containers = Containers.CAGE;
  public width: number = 0;
  public height: number = 0;
  public depth: number = 0;
  public units: LengthUnits = LengthUnits.CM;
  public animals: Animal[] = [];

  constructor(instanceData?: Animal) {
    if (instanceData) {
      this.deserialize(instanceData);
    }
  }

  private deserialize(instanceData: Animal) {
    const keys = Object.keys(this);

    for (const key of keys) {
      if (instanceData.hasOwnProperty(key)) {
        this[key] = instanceData[key];
      }
    }
  }

  public parse(data: object) {
    this.id = data["id"];
    this.name = data["name"];
    this.type = data["type"];
    this.width = data["width"];
    this.height = data["height"];
    this.depth = data["depth"];
    this.units = data["units"];
    this.animals = data["animals"];
  }
}
