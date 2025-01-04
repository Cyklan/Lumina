import { Container, ContainerChild, Ticker } from "pixi.js";
import { Layer } from "./Layer";
import { GameObject } from "../GameObject";
import { Game } from "../Game";

export class Stage extends Container {
  layers: Layer[] = [];

  private layerIndexMap: Map<string, number> = new Map();

  public addLayer(layer: Layer, insertAt?: number) {
    layer.parentStage = this;
    this.layers = [
      ...this.layers.slice(0, insertAt),
      layer,
      ...this.layers.slice(insertAt),
    ];

    this.calculateIndexMap();
  }

  private calculateIndexMap() {
    this.layerIndexMap.clear();
    for (let i = 0; i < this.layers.length; i++) {
      this.layerIndexMap.set(this.layers[i].name, i);
      this.layers[i].zIndex = i;
    }
  }

  public addChildToLayer<U extends ContainerChild[]>(
    layer: string,
    ...children: U
  ): U[0] {
    const index = this.layerIndexMap.get(layer);
    if (!index) {
      throw new Error("Can't add to layer that doesn't exist");
    }

    return this.layers[index].addChild(...children);
  }

  public update(time: Ticker) {
    if (Game.isPaused) {
      return;
    }

    for (let i = 0; i < this.layers.length; i++) {
      for (const child of this.layers[i].children) {
        if (child instanceof GameObject) {
          child.update(time);
        }
      }
    }
  }
}
