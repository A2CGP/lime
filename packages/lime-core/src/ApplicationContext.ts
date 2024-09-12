import { Context } from './Context'

export class ApplicationContext extends Context {
  public current: Context | null = null
  public childContexts: Map<string, Context> = new Map()

  public setCurrent(context: Context) {
    this.current = context
  }

  public setChildContext(key: string, context: Context) {
    this.childContexts.set(key, context)
  }
}
