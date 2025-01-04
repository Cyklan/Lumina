import { Sprite, Ticker } from "pixi.js";

export abstract class GameObject extends Sprite {
  public abstract update(time: Ticker): void;
}
