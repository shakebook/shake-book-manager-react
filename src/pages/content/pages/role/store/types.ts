import { manager } from '@/service/api/v1/manager_pb'

export const GET_ROLE_LIST = "GET_ROLE_LIST"
export const CHANGE_CHECKED_KEYS = "CHANGE_CHECKED_KEYS"

export interface RoleData {
  roleList: manager.IRole[]
  roleCheckboxList: RoleCheckbox[]
}

export type GetRoleListAction = {
  type: string
  data: RoleData
}

export type ChangeCheckedKeysAction = {
  type: string
  data: any
}

export type RoleState = {
  roleList: manager.IRole[]
  checkedKeys: number[],
  roleCheckboxList: RoleCheckbox[]
}

// export type RoleRequestWithProps = {
//   data: manager.IRole,
// }

export interface RoleCheckbox {
  label: string
  value: string | number
}

export type GetRoleDispatch = (args: GetRoleListAction) => GetRoleListAction