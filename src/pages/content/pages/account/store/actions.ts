import { shakebook } from '@/service/api/v1/account_pb'
import * as types from '@/pages/content/pages/account/store/types'
import axios from 'axios';
import camelcaseKeys from 'camelcase-keys'
import api from '@/requestAPI';
import { notification } from 'antd';
import { Dispatch } from "redux"
import { manager } from '@/service/api/v1/manager_pb';
import * as token from '@/common/token'

declare global {
  interface Window {
    globalHistory: any
  }
}

const getAccountListAction = (res: shakebook.IAccountInfo[]): types.GetAccountListAction => {
  return {
    type: types.GET_ACCOUNT_LIST,
    data: res
  }
}

export const onChangeCheckboxAction = (data: number[]): types.ChangeCheckboxAction => {
  return {
    type: types.CHANGE_CHECKBOX_ROLES,
    data: data
  }
}


//获取用户列表
export function getAccountListRequest() {
  return (dispatch: Dispatch<any>) => {
    axios({
      method: 'get',
      url: api.accountList,
      headers: {
        "Grpc-metadata-token": "BEARER " + localStorage.getItem("token")
      }
    }).then(function (res) {

      let ret: shakebook.IGetAccountListResponse =
        shakebook.GetAccountListResponse.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )

      if (res.status === 200 && ret.success) {
        dispatch(getAccountListAction(ret.data as shakebook.IAccountInfo[]))

      } else {
        notification['warning']({
          message: '信息提示',
          description: ret.message
        });
      }
    })
      .catch(function (err) {
        localStorage.removeItem("token")
        window.globalHistory.push('/login')
      });
  }
}

//
export function AccountBindRoleRequest(req: manager.IAccountBindRoleRequest) {
  return () => {
    axios({
      method: 'post',
      url: api.accountBindRole,
      data: req,
      headers: { "Grpc-metadata-token": "BEARER " + localStorage.getItem("token") }
    }).then(function (res) {

      let ret: shakebook.IResponse =
        shakebook.Response.fromObject(
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
      .catch(function (err) {
        localStorage.removeItem("token")
        window.globalHistory.push('/login')
      });
  }
}
//获取用户已绑定的角色
export function getAccountBindRoleRequest(req: manager.IAccountId) {
  return (dispatch: Dispatch<any>) => {
    axios({
      method: 'get',
      url: api.accountBindRole + '/' + req.id,
      headers: { "Grpc-metadata-token": "BEARER " + localStorage.getItem("token") }
    }).then(function (res) {

      let ret: manager.IGetAccountBindRoleResponse =
        manager.GetAccountBindRoleResponse.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )

      if (res.status === 200 && ret.success && (ret.data as number[]).length > 0) {
        let checkedKeys: number[] = (ret.data as number[])

        dispatch(onChangeCheckboxAction(checkedKeys))
      } else {
        dispatch(onChangeCheckboxAction([]))
      }
    })
      .catch(function (err) {
        localStorage.removeItem("token")
        window.globalHistory.push('/login')
      });
  }
}