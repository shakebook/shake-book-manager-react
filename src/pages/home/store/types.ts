export const SIDEBAR_COLLAPSED = "SIDEBAR_COLLAPSED"
export type HomeState = {
  collapsed: boolean,
}

export type CollapsedAction = {
  type: string
  collapsed: boolean
}