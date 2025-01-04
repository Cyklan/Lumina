import { Initialiser } from "./Initialiser";
import { Assets as PixiAssets } from "pixi.js";

export class Assets extends Initialiser<void> {
  public async init() {
    await PixiAssets.init({ manifest: "assets/manifest.json" });
  }
}
