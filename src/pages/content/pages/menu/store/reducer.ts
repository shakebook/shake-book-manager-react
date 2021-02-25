import * as types from "./types"
const initialState: types.MenuState = {
  menuList: []
}

function reducer(
  state: types.MenuState = initialState,
  action: any
): types.MenuState {
  switch (action.type) {
    case types.GET_MENU_LIST:
      const a = action as types.GetMenuListAction
      return {
        ...state,
        menuList: [...a.data!],
      }
    default:
      return state
  }
}


export default reducer;