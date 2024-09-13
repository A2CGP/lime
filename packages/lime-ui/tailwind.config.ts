import type { Config } from '@repo/tailwind-config'
import sharedConfig from '@repo/tailwind-config'

const config: Config = {
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
  theme: {
    colors: {
      foreground: 'var(--lime-ui-foreground, #d8d8d8)',
      background: 'var(--lime-ui-background, #161616)',
      top: {
        bar: 'var(--lime-ui-top-bar, #181818)',
      },
      status: {
        bar: 'var(--lime-ui-status-bar, #181818)',
      },
      area: 'var(--lime-ui-area, #303030)',
    },
  },
}

export default config
