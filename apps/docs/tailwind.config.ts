import type { Config } from '@repo/tailwind-config'
import sharedConfig from '@repo/tailwind-config'

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./app/**/*.tsx'],
  presets: [sharedConfig],
}

export default config
