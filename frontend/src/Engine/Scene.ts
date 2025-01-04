import { Container, Ticker } from "pixi.js";

export abstract class Scene<T> extends Container {
  initialised = false;
  options: T;

  /**
   *
   */
  constructor(args: T) {
    super();
    this.options = args;
  }

  public abstract init(): void;

  public abstract update(time: Ticker): void;
}
