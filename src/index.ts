export type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Array<Json>

export type JSONObject = { [property: string]: Json }

export interface PanelProps<Config extends JSONObject = JSONObject> {
  x: number
  y: number
  editMode: boolean
  width: number
  height: number
  config: Config
}

export interface ConfigProps<Config extends JSONObject = JSONObject> {
  config: Config
  close: () => void
  update: {
    (config: Partial<Config>): void
    <K extends keyof Config>(key: K, value: Config[K]): void
  }
}

export const placeholder = 'just a placeholder'
