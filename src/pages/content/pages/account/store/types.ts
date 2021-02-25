import { shakebook } from '@/service/api/v1/account_pb'

export const GET_ACCOUNT_LIST = "GET_ACCOUNT_LIST"
export const CHANGE_CHECKBOX_ROLES = "CHANGE_CHECKBOX_ROLES"

export type GetAccountListAction = {
  type: string
  data: shakebook.IAccountInfo[]
}

export type ChangeCheckboxAction = {
  type: string
  data: number[]
}

export type AccountState = {
  accountList: shakebook.IAccountInfo[],
  checkboxRoles: number[],
}



// export type GetMenuDispatch = (args: GetMenuListAction) => GetMenuListAction