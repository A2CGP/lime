import * as BABYLON from '@babylonjs/core'
import { Context } from '@repo/lime-core'

export class RendererContext extends Context {
  public engine: BABYLON.Engine

  constructor(public canvas: HTMLCanvasElement | OffscreenCanvas) {
    super()
    this.engine = new BABYLON.Engine(canvas, true, {}, true)
  }

  public render() {
    const scene = new BABYLON.Scene(this.engine)

    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene)
    camera.setTarget(BABYLON.Vector3.Zero())
    camera.attachControl(this.canvas, true)

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene)
    light.intensity = 0.7

    const sphere = BABYLON.MeshBuilder.CreateSphere(
      'sphere',
      {
        diameter: 2,
        segments: 32,
      },
      scene
    )
    const material = new BABYLON.StandardMaterial('material', scene)
    material.wireframe = true
    sphere.material = material

    const ground = BABYLON.MeshBuilder.CreateGround(
      'ground',
      {
        width: 6,
        height: 6,
      },
      scene
    )
    ground.position.y = -2

    this.engine.runRenderLoop(() => {
      scene.render()
    })
  }
}
