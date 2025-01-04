import { Application, ApplicationOptions } from "pixi.js";
import { Initialiser } from "./Initialiser";

export type PixiInitialiserConfig = Partial<{
  rootElement: HTMLElement;
  pixiOptions: Partial<ApplicationOptions>;
}>;

export class Pixi extends Initialiser<Promise<Application>> {
  options: Required<PixiInitialiserConfig>;

  constructor(options: PixiInitialiserConfig = {}) {
    super();
    options.rootElement ||= document.getElementById("app")!;
    options.pixiOptions ||= { resizeTo: options.rootElement };

    this.options = {
      rootElement: options.rootElement,
      pixiOptions: options.pixiOptions,
    };
  }

  public async init() {
    const app = new Application();
    await app.init(this.options.pixiOptions);

    this.options.rootElement.appendChild(app.canvas);

    return app;
  }
}

