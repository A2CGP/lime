import { RendererContext } from './RendererContext'

export class Renderer {
  constructor(private _context: RendererContext) {
    window.addEventListener('resize', this._onResize)
  }

  public getContext() {
    return this._context
  }

  public render() {
    this._context.render()
  }

  private _onResize = () => {
    this._context.engine.resize()
  }
}
