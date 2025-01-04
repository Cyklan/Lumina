import { Environment } from "@wails/runtime";
import "./Runtime/runtime";
const el = document.getElementById("app")!;
Environment()
  .then((env) => (el.innerText = JSON.stringify(env)))
  .catch((e) => (el.innerText = JSON.stringify(e)));
