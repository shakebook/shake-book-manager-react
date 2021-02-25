import { shakebook } from '@/service/api/v1/account_pb'
import * as types from './types'
import axios from 'axios';
import camelcaseKeys from 'camelcase-keys'
import api from '@/requestAPI';
import { notification } from 'antd';
import { manager } from '@/service/api/v1/manager_pb';
import * as tree from '@/common/toTree';
import * as menuTypes from '@/pages/content/pages/menu/store/types'

const getAccountAction = (res: shakebook.IAccountInfo): types.GetAccountAction => {
  return {
    type: types.GET_ACCOUNT,
    data: { ...res }
  }
}

const getAccountMenuAction = (data: manager.IMenuInfo[]): types.GetAccountMenuAction => {
  return {
    type: types.GET_ACCOUNT_MENU,
    data: [...data]
  }
}

export function getAccountRequest() {
  return (dispatch: types.GetAccountDispatch) => {
    axios({
      method: 'get',
      url: api.getAccount,
      headers: {
        "Grpc-metadata-token": "BEARER " + localStorage.getItem("token")
      }
    }).then(function (res) {

      let ret: shakebook.IGetAccountResponse =
        shakebook.GetAccountResponse.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )
      if (res.status === 200 && ret.success) {
        dispatch(getAccountAction(ret.data!))
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

//查询账号菜单
export function getAccountMenuRequest() {
  return (dispatch: types.GetAccountMenuDispatch) => {
    axios({
      method: 'get',
      url: api.getAccountMenu,
      headers: {
        "Grpc-metadata-token": "BEARER " + localStorage.getItem("token")
      }
    }).then(function (res) {

      let ret: manager.IGetAccountMenuResponse =
        manager.GetAccountMenuResponse.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )
      if (res.status === 200 && ret.success) {
        const tree = toTree(ret.data as manager.IMenuInfo[])
        dispatch(getAccountMenuAction(tree as menuTypes.MenuTree[]))


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

//退出登录
export function signoutRequest() {
  return (dispatch: types.GetAccountDispatch) => {
    axios({
      method: 'post',
      url: api.signout,
      headers: {
        "Grpc-metadata-token": "BEARER " + localStorage.getItem("token")
      }
    }).then(function (res) {

      let ret: shakebook.IResponse =
        shakebook.Response.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )

      if (res.status === 200 && ret.success) {
        dispatch(getAccountAction({} as shakebook.AccountInfo))
        localStorage.removeItem("token")
        window.globalHistory.push('/login')
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


function toTree(data: manager.IMenuInfo[]): menuTypes.MenuTree[] { //递归树算法 将pid-id的数据库返回的json 转为树json
  // 删除 所有 children,以防止多次调用
  let tree: menuTypes.MenuTree[] = []
  data.forEach(function (item) {
    const o: menuTypes.MenuTree = {
      title: item.menuName as string,
      value: item.id as number,
      key: item.id as number,
      menuIcon: item.menuIcon as string,
      menuName: item.menuName as string,
      menuRouter: item.menuRouter as string,
      parentId: item.parentId as number,
    }
    delete o.children
    tree.push(o)
  });
  // 将数据存储为 以id为KEY的map索引数据列 
  var map = new Map<any, menuTypes.MenuTree>();
  tree.forEach(function (item: menuTypes.MenuTree) {
    const id: number = item.key
    map.set(id, item)
  });

  let val: menuTypes.MenuTree[] = [];
  tree.forEach(function (item) {
    // 以当前遍历项，的pid,去map对象中找到索引的id
    var parent = map.get(item.parentId);
    // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      (parent.children || (parent.children = [])).push(item); //这里更改的是map对象的数据(索引数据)
      // console.log(map);
    } else {
      //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item);
    }
  });

  return val
}
