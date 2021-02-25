import * as types from "./types"
const initialState: types.RoleState = {
  roleList: [],
  checkedKeys: [],
  roleCheckboxList: []
}

function reducer(
  state: types.RoleState = initialState,
  action: any
): types.RoleState {
  switch (action.type) {
    case types.GET_ROLE_LIST:
      action as types.GetRoleListAction
      let data = action.data as types.RoleData
      return {
        ...state,
        roleList: [...data.roleList],
        roleCheckboxList: [...data.roleCheckboxList]
      }
    case types.CHANGE_CHECKED_KEYS:
      action as types.ChangeCheckedKeysAction
      return {
        ...state,
        checkedKeys: [...action.data!],
      }
    default:
      return state
  }
}


export default reducer;