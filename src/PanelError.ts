import type { JSX } from 'solid-js'

export interface PanelErrorAction {
  label: string
  onClick: (() => void) | 'delete' | 'configure'
}

interface PanelErrorOptions {
  actions?: Array<PanelErrorAction>
}

export class PanelError extends Error {
  constructor(
    public node: JSX.Element,
    public options: PanelErrorOptions = {}
  ) {
    super(typeof node === 'string' ? node : 'Panel Error')
  }
}
