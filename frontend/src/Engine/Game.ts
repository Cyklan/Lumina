import { Assets } from "./Initialisers/Assets";
import { Pixi } from "./Initialisers/Pixi";
import { Runtime } from "./Initialisers/Runtime";
import { AppWithStage, Layers } from "./Initialisers/Layers";
import { Ticker } from "pixi.js";
import { Scene } from "./Scene";

export class Game {
  public static app: AppWithStage;
  public static currentScene?: Scene<unknown>;

  public static isPaused: boolean = false;

  public static async init() {
    let app = await new Pixi().init();
    new Runtime().init();
    await new Assets().init();
    new Layers(app).init();

    Game.app = app as AppWithStage;
  }

  public static update(time: Ticker) {
    Game.app.stage.update(time);
    Game.currentScene?.update(time);
  }

  public static changeScene(scene: Scene<unknown>) {
    Game.currentScene?.destroy();
    Game.currentScene = scene;
    Game.currentScene.init();
  }
}
