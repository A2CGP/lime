import {
  Engine,
  Vector3,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  MeshBuilder,
} from '@babylonjs/core'
import { GridMaterial } from '@babylonjs/materials'
import { Context } from '@repo/lime-core'

export class RendererContext extends Context {
  public engine: Engine

  constructor(public canvas: HTMLCanvasElement | OffscreenCanvas) {
    super()
    this.engine = new Engine(canvas, true, {}, true)
  }

  public render() {
    const scene = new Scene(this.engine)

    const camera = new ArcRotateCamera('camera', Math.PI / 4, Math.PI / 4, 8, Vector3.Zero(), scene)
    camera.lowerRadiusLimit = 4
    camera.upperRadiusLimit = 32
    camera.attachControl(this.canvas, true)

    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene)
    light.intensity = 0.7

    const box = MeshBuilder.CreateBox('box', {}, scene)

    const ground = MeshBuilder.CreateGround(
      'ground',
      {
        width: 50,
        height: 50,
      },
      scene
    )
    ground.material = new GridMaterial('material')

    this.engine.runRenderLoop(() => {
      scene.render()
    })
  }
}
