import { ActionBoiler } from "boiler-dev"

export const generate: ActionBoiler = async () => {
  const actions = []

  actions.push({
    action: "write",
    path: "src/tinyId.ts",
    sourcePath: "tsignore/tinyId.ts",
  })

  actions.push({
    action: "write",
    path: "test/tinyId.spec.ts",
    sourcePath: "tsignore/tinyId.spec.ts",
  })

  return actions
}
