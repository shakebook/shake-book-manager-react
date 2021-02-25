import { manager } from '@/service/api/v1/manager_pb'
export const GET_MENU_LIST = "GET_MENU_LIST"
export type GetMenuListAction = {
  type: string
  data: MenuTree[]
}
export type MenuState = {
  menuList: MenuTree[]
}

export interface MenuTree {
  title: string
  value: number
  key: number
  parentId: number
  menuIcon: string
  menuName: string
  menuRouter: string
  children?: MenuTree[]
}

export type GetMenuDispatch = (args: GetMenuListAction) => GetMenuListAction