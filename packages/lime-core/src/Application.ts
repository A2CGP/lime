import { ApplicationContext } from './ApplicationContext'

export class Application {
  constructor(private _context: ApplicationContext) {}

  public getContext() {
    return this._context
  }
}
