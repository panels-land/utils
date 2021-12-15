export type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Array<Json>

export type JsonObject = { [property: string]: Json }

export interface PanelProps<Config extends JsonObject = JsonObject> {
  x: number
  y: number
  editMode: boolean
  width: number
  height: number
  config: Config
}

export interface ConfigProps<Config extends JsonObject = JsonObject> {
  config: Config
  close: () => void
  update: {
    (config: Partial<Config>): void
    <K extends keyof Config>(key: K, value: Config[K]): void
  }
}

export * from './PanelError'
