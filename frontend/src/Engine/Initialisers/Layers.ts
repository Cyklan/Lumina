import type { Application } from "pixi.js";
import { Initialiser } from "./Initialiser";
import { Stage } from "../Layers/Stage";
import { Layer } from "../Layers/Layer";

export type AppWithStage = Application & {
  stage: Stage;
};

export class Layers extends Initialiser<AppWithStage> {
  app: Application;
  constructor(app: Application) {
    super();
    this.app = app;
  }

  public init() {
    const stage = new Stage();
    this.setLayers(stage);

    this.app.stage = stage;
    return this.app as AppWithStage;
  }

  private setLayers(stage: Stage) {
    stage.addLayer(new Layer("bg"));
    stage.addLayer(new Layer("game"));
    stage.addLayer(new Layer("ui"));
  }
}
