import type { Config } from '@repo/tailwind-config'
import sharedConfig from '@repo/tailwind-config'

const config: Config = {
  content: ['./app/**/*.tsx'],
  presets: [sharedConfig],
}

export default config
