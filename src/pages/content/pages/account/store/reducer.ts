import * as types from "./types"
const initialState: types.AccountState = {
  accountList: [],
  checkboxRoles: [],
}

function reducer(
  state: types.AccountState = initialState,
  action: any
): types.AccountState {
  switch (action.type) {
    case types.GET_ACCOUNT_LIST:
      action as types.GetAccountListAction
      return {
        ...state,
        accountList: [...action.data!],
      }
    case types.CHANGE_CHECKBOX_ROLES:
      action as types.ChangeCheckboxAction
      return {
        ...state,
        checkboxRoles: [...action.data!],
      }
    default:
      return state
  }
}


export default reducer;