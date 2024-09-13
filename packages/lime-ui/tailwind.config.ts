import type { Config } from '@repo/tailwind-config'
import sharedConfig from '@repo/tailwind-config'

const config: Config = {
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
  theme: {
    colors: {
      foreground: 'var(--lime-ui-foreground, white)',
      top: {
        bar: 'var(--lime-ui-top-bar, #222)',
      },
    },
  },
}

export default config
