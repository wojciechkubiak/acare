import { Units } from "./Place";

export default class Animal {
  public id: string = null;
  public name: string | null = null;
  public type: string | null = null;
  public weight: number = 0;
  public sex: string = null;
  public wUnit: Units | null = null;
  public length: number = 0;
  public lUnit: Units | null = null;
  public born: string = new Date().toISOString();
  public color: string = null;
  public medications: string[] | null = [];
  public description: string | null = null;
  public vet: string | null = null;
  public container: string | null = null;

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
    this.weight = data["weight"];
    this.sex = data["sex"];
    this.wUnit = data["wUnit"];
    this.length = data["length"];
    this.lUnit = data["lUnit"];
    this.born = data["born"];
    this.color = data["color"];
    this.medications = data["medications"];
    this.vet = data["vet"];
  }
}
