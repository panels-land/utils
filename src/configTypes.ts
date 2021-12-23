import type { BaseConfig } from './baseTypes'

export interface ConfigProps<Config extends BaseConfig = BaseConfig> {
  config: Config
  close: () => void
  update: {
    (config: Partial<Config>): void
    <K extends keyof Config>(key: K, value: Config[K]): void
  }
}

export type ConfigSize = {
  width: number
  height: number
}
