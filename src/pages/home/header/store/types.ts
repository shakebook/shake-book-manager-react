import { shakebook } from '@/service/api/v1/account_pb'
import { manager } from '@/service/api/v1/manager_pb';
import * as menuTypes from '@/pages/content/pages/menu/store/types';

export const GET_ACCOUNT = "GET_ACCOUNT"
export const GET_ACCOUNT_MENU = "GET_ACCOUNT_MENU"

export type GetAccountAction = {
  type: string
  data: shakebook.IAccountInfo
}

export type GetAccountMenuAction = {
  type: string
  data: manager.IMenuInfo[]
}

export type AccountState = {
  account: shakebook.IAccountInfo
  accountMenus: menuTypes.MenuTree[]
}

export type GetAccountDispatch = (args: GetAccountAction) => GetAccountAction
export type GetAccountMenuDispatch = (args: GetAccountMenuAction) => GetAccountMenuAction