import { manager } from '@/service/api/v1/manager_pb'
import * as types from '@/pages/content/pages/menu/store/types'
import axios from 'axios';
import camelcaseKeys from 'camelcase-keys'
import api from '@/requestAPI';
import { notification } from 'antd';
import { Dispatch } from "redux"
declare global {
  interface Window {
    globalHistory: any
  }
}
const getMenuListAction = (res: types.MenuTree[]): types.GetMenuListAction => {
  return {
    type: types.GET_MENU_LIST,
    data: res
  }
}

export function createMenuRequest(req: manager.ICreateMenuRequest) {
  return (dispatch: Dispatch<any>) => {
    axios({
      method: 'post',
      url: api.managerMenu,
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
        dispatch(getMenuListRequest())
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
      .catch(function (err) {
        localStorage.removeItem("token")
        window.globalHistory.push('/login')
      });
  }
}
export function getMenuListRequest() {
  return (dispatch: types.GetMenuDispatch) => {
    axios({
      method: 'get',
      url: api.managerMenu,
      headers: {
        "Grpc-metadata-token": "BEARER " + localStorage.getItem("token")
      }
    }).then(function (res) {
      let ret: manager.IGetMenuListResponse =
        manager.GetMenuListResponse.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )

      if (res.status === 200 && ret.success) {
        const tree = toTree(ret.data as manager.IMenuInfo[])
        dispatch(getMenuListAction(tree as types.MenuTree[]))
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

//删除
export function deleteRowRequest(req: manager.IMenuId) {
  return (dispatch: Dispatch<any>) => {
    axios({
      method: 'delete',
      url: api.managerMenu,
      data: req,
      headers: {
        "Grpc-metadata-token": "BEARER " + localStorage.getItem("token")
      }
    }).then(function (res) {
      let ret: manager.IGetMenuListResponse =
        manager.GetMenuListResponse.fromObject(
          camelcaseKeys(res.data as Object, {
            deep: true
          }),
        )

      if (res.status === 200 && ret.success) {
        dispatch(getMenuListRequest())
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

//更新
export function UpdateRowRequest(req: manager.IUpdateMenuRequest) {
  return (dispatch: Dispatch<any>) => {
    axios({
      method: 'put',
      url: api.managerMenu,
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
        dispatch(getMenuListRequest())
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

function toTree(data: manager.IMenuInfo[]): types.MenuTree[] { //递归树算法 将pid-id的数据库返回的json 转为树json
  // 删除 所有 children,以防止多次调用
  let tree: types.MenuTree[] = []
  data.forEach(function (item) {
    const o: types.MenuTree = {
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
  var map = new Map<any, types.MenuTree>();
  tree.forEach(function (item: types.MenuTree) {
    const id: number = item.key
    map.set(id, item)
  });

  let val: types.MenuTree[] = [];
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
