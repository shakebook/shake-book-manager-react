import { manager } from '@/service/api/v1/manager_pb'
import * as types from './types'
import axios from 'axios';
import camelcaseKeys from 'camelcase-keys'
import api from '@/requestAPI';
import { notification } from 'antd';
import { Dispatch } from "redux"

const getRoleListAction = (roleList: manager.IRole[], roleCheckboxList: types.RoleCheckbox[]): types.GetRoleListAction => {
  return {
    type: types.GET_ROLE_LIST,
    data: {
      roleCheckboxList,
      roleList,
    }
  }
}

export const changeCheckedKeys = (data: any): types.ChangeCheckedKeysAction => {
  return {
    type: types.CHANGE_CHECKED_KEYS,
    data: data
  }
}

export function createRoleRequest(req: manager.IRole) {
  return (dispatch: Dispatch<any>) => {
    axios({
      method: 'post',
      url: api.role,
      data: req,
      headers: {
        "Grpc-metadata-token": "BEARER " + localStorage.getItem("token")
      }
    }).then(function (res) {
      let ret: manager.IResponse =
        manager.Response.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )

      if (res.status === 200 && ret.success) {
        dispatch(getRoleListRequest())
        notification['success']({
          message: '信息提示',
          description: "新增成功"
        });
      } else {
        notification['warning']({
          message: '信息提示',
          description: ret.message
        });

      }
    })
      .catch(function () {
        localStorage.removeItem("token")
        window.globalHistory.push('/login')
      });
  }
}

//更新
export function UpdateRoleRequest(req: manager.IRole) {
  return (dispatch: Dispatch<any>) => {
    axios({
      method: 'put',
      url: api.role,
      data: req,
      headers: {
        "Grpc-metadata-token": "BEARER " + localStorage.getItem("token")
      }
    }).then(function (res) {
      let ret: manager.IResponse =
        manager.Response.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )

      if (res.status === 200 && ret.success) {
        dispatch(getRoleListRequest())
        notification['success']({
          message: '信息提示',
          description: "更新成功"
        });
      } else {
        notification['warning']({
          message: '信息提示',
          description: ret.message
        });
      }
    })
      .catch(function () {
        localStorage.removeItem("token")
        window.globalHistory.push('/login')
      });
  }
}

//查询角色列表
export function getRoleListRequest() {
  return (dispatch: types.GetRoleDispatch) => {
    axios({
      method: 'get',
      url: api.role,
      headers: {
        "Grpc-metadata-token": "BEARER " + localStorage.getItem("token")
      }
    }).then(function (res) {
      let ret: manager.IGetRoleListResponse =
        manager.GetRoleListResponse.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )

      if (res.status === 200 && ret.success) {
        let arr: manager.IRole[] = ret.data as manager.IRole[]
        let roleCheckboxs: types.RoleCheckbox[] = []
        for (let i = 0; i < arr.length; i++) {
          roleCheckboxs.push({
            label: arr[i].roleName as string,
            value: arr[i].id as number
          })
        }
        dispatch(getRoleListAction(arr, roleCheckboxs))

      } else {
        notification['warning']({
          message: '信息提示',
          description: ret.message
        });
      }
    })
      .catch(function () {
        localStorage.removeItem("token")
        window.globalHistory.push('/login')
      });
  }
}

//删除角色
export function deleteRoleRequest(req: manager.IRoleId) {
  return (dispatch: Dispatch<any>) => {
    axios({
      method: 'delete',
      url: api.role,
      data: req,
      headers: {
        "Grpc-metadata-token": "BEARER " + localStorage.getItem("token")
      }
    }).then(function (res) {
      let ret: manager.IResponse =
        manager.Response.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )

      if (res.status === 200 && ret.success) {
        dispatch(getRoleListRequest())

      } else {
        notification['warning']({
          message: '信息提示',
          description: ret.message
        });
      }
    })
      .catch(function () {
        localStorage.removeItem("token")
        window.globalHistory.push('/login')
      });
  }
}

//角色绑定菜单
export function RoleBindMenuRequest(req: manager.IRoleBindMenuRequest) {
  return (dispatch: Dispatch<any>) => {
    axios({
      method: 'post',
      url: api.roleBindMenu,
      data: req,
      headers: {
        "Grpc-metadata-token": "BEARER " + localStorage.getItem("token")
      }
    }).then(function (res) {
      let ret: manager.IResponse =
        manager.Response.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )

      if (res.status === 200 && ret.success) {
        notification['success']({
          message: '信息提示',
          description: "操作成功"
        });

      } else {
        notification['warning']({
          message: '信息提示',
          description: ret.message
        });
      }
    })
      .catch(function () {
        localStorage.removeItem("token")
        window.globalHistory.push('/login')
      });
  }
}

//获取角色绑定菜单
export function getRoleBindMenuRequest(req: manager.IRoleId) {
  return (dispatch: Dispatch<any>) => {
    axios({
      method: 'get',
      url: api.roleBindMenu + '/' + req.id,
      headers: {
        "Grpc-metadata-token": "BEARER " + localStorage.getItem("token")
      }
    }).then(function (res) {
      let ret: manager.IGetRoleBindMenuResponse =
        manager.GetRoleBindMenuResponse.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )

      if (res.status === 200 && ret.success && (ret.data as number[]).length > 0) {
        let checkedKeys: number[] = (ret.data as number[])
        dispatch(changeCheckedKeys(checkedKeys))
      } else {
        dispatch(changeCheckedKeys([]))
      }
    })
      .catch(function () {
        localStorage.removeItem("token")
        window.globalHistory.push('/login')
      });
  }
}