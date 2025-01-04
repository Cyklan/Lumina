import { EnvironmentInfo } from "@wails/runtime/runtime"

export {}

window.runtime ||= {
  Environment(): Promise<EnvironmentInfo> {
    return Promise.resolve({
      platform: "web",
      arch: "Horseshoe",
      buildType: process.env.NODE_ENV!
    })
  }
}

declare global {
  interface Window {
    runtime: object
  }
}