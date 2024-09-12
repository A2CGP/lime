import type { Config as TailwindConfig } from 'tailwindcss'

export type Config = TailwindConfig

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
