import * as actionTypes from "./types"
import { CollapsedAction, HomeState } from "./types"
const initialState: HomeState = {
  collapsed: false,
  //siderbarWidth: 300,
}

const reducer = (
  state: HomeState = initialState,
  action: CollapsedAction
): HomeState => {

  switch (action.type) {
    case actionTypes.SIDEBAR_COLLAPSED:
      const newState: HomeState = {
        collapsed: action.collapsed
      }
      return newState
    default:
      return state
  }
}

export default reducer