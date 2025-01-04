import type { EnvironmentInfo } from "@wails/runtime/runtime";
import { Initialiser } from "./Initialiser";

export class Runtime extends Initialiser<void> {
  public init() {
    window.runtime ||= {
      Environment(): Promise<EnvironmentInfo> {
        return Promise.resolve({
          platform: "web",
          arch: "Horseshoe",
          buildType: process.env.NODE_ENV!,
        });
      },
    };
  }
}

declare global {
  interface Window {
    runtime: object;
  }
}
