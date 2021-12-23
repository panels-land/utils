import type { BaseConfig } from './baseTypes'

export interface PanelProps<Config extends BaseConfig = BaseConfig> {
  x: number
  y: number
  editMode: boolean
  width: number
  height: number
  config: Config
}

export type PanelDefaultConfig<T extends BaseConfig = BaseConfig> = T
export type PanelDescription = string

export type PanelSizes =
  | Array<{ width: number; height: number }>
  | {
      width?: { min?: number; max?: number } | Array<number>
      height?: { min?: number; max?: number } | Array<number>
    }
