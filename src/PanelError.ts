import type { JSX } from 'solid-js'

interface PanelErrorAction {
  label: string
  onClick: () => void
}

interface PanelErrorOptions {
  actions?: Array<PanelErrorAction>
  node?: JSX.Element
}

export class PanelError extends Error {
  constructor(message: string, public options: PanelErrorOptions = {}) {
    super(message)
  }
}
