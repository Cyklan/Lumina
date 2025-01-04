import { Container } from "pixi.js";
import { Stage } from "./Stage";

export class Layer extends Container {
  public parentStage!: Stage;
  public name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}
