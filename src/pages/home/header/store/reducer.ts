import * as types from "./types"
import { shakebook } from '@/service/api/v1/account_pb'
const initialState: types.AccountState = {
  account: {
    accountName: "",
    imageUrl: "",
    accountDesc: "",
    accountEmail: "",
    accountPhone: "",
    backgroundUrl: "",
    fansNumber: 0,
    focusNumber: 0,
    lastTime: "",
    signupAt: "",
    thumbsUp: 0,
    accountStatus: shakebook.AccountStatus.NORMAL
  },
  accountMenus: []
}

function reducer(
  state: types.AccountState = initialState,
  action: any
): types.AccountState {
  switch (action.type) {
    case types.GET_ACCOUNT:
      action as types.GetAccountAction
      return {
        ...state,
        account: {
          ...action.data
        },
      }
    case types.GET_ACCOUNT_MENU:
      action as types.GetAccountMenuAction
      return {
        ...state,
        accountMenus: [...action.data],
      }
    default:
      return state
  }
}


export default reducer;