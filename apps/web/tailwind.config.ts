import type { Config } from '@repo/tailwind-config'
import sharedConfig from '@repo/tailwind-config'
import uiConfig from '@repo/lime-ui/tailwind.config'

const config: Config = {
  content: ['./app/**/*.tsx'],
  presets: [sharedConfig, uiConfig],
}

export default config
