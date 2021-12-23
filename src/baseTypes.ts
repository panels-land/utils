export type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Array<Json>

export type JsonObject = { [property: string]: Json }

export type BaseConfig = JsonObject
