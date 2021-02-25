import React, { useEffect } from 'react';
import { Table, Modal, Space, Button, Input, message, Tree } from 'antd';
import styles from './index.module.css';
import { manager } from '@/service/api/v1/manager_pb'
import { Dispatch } from "redux"
import { useSelector, useDispatch } from "react-redux"
import * as actions from './store/actions'
import * as menuActions from '@/pages/content/pages/menu/store/actions'
import { useHistory } from 'react-router-dom'
import { RootStore } from "@/store";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const Role: React.FC = () => {
  let history = useHistory()
  const [visible, setVisible] = React.useState(false)
  const [name, setName] = React.useState("")
  const [id, setId] = React.useState<null | number>(null)
  const dispatch: Dispatch<any> = useDispatch()
  const roleState = useSelector((state: RootStore) => state.role);
  const menuState = useSelector((state: RootStore) => state.menu);

  //关联modal
  const [treeVisibel, setTreeVisibel] = React.useState(false)

  useEffect(() => {
    dispatch(actions.getRoleListRequest())
    dispatch(menuActions.getMenuListRequest())
  }, [dispatch, history])

  const submit = () => {
    if (!name.trim()) {
      message.warning("这是一个必填项")
      return
    }
    if (id) {
      dispatch(actions.UpdateRoleRequest({
        roleName: name,
        id: id,
      } as manager.IRole))
    } else {
      dispatch(actions.createRoleRequest({
        roleName: name,
      } as manager.IRole))
    }
    cancelModel()
  }
  const treeSubmit = () => {
    const menuIds: number[] = roleState.checkedKeys
    dispatch(actions.RoleBindMenuRequest({ roleId: id, menuIds }))
    cancelTreeModel()
  }

  const showModel = (record: manager.IRole) => {
    setName(record.roleName!);
    setId(record.id!);
    setVisible(true)
  }
  const showTreeModel = (id: number) => {
    dispatch(actions.getRoleBindMenuRequest({ id: id }))
    setTreeVisibel(true)
    setId(id);
  }

  const cancelModel = () => {
    setVisible(false)
    setName("");
    setId(null)
  }

  const cancelTreeModel = () => {
    setTreeVisibel(false)
    setId(null)
  }

  const onCheck = (checkedKeys: any) => {
    dispatch(actions.changeCheckedKeys(checkedKeys.checked))
  }

  const deleteConfirm = (id: number) => {
    confirm({
      title: '这个是一个危险操作?',
      icon: <ExclamationCircleOutlined />,
      content: '确定执行删除操作吗？',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        deleteRow(id)
      },
    });
  }

  const deleteRow = (id: number) => {
    dispatch(actions.deleteRoleRequest({ id: id } as manager.IRoleId))
  }

  const columns = [
    {
      title: '角色名称',
      dataIndex: 'roleName',
      key: 'roleName',
      render: (text: string) => text,
    },
    {
      title: '创建日期',
      dataIndex: 'createAt',
      key: 'createAt',
      render: (text: string) => text,
    },
    {
      title: '操作',
      key: 'action',
      render: (text: string, record: manager.IRole) => (

        <Space size="small">
          <Button type="primary" ghost size="small" onClick={() => showTreeModel(record.id!)}>关联菜单</Button>
          <Button type="primary" ghost size="small" onClick={() => showModel({ roleName: record.roleName, id: record.id })}>修改</Button>
          <Button type="primary" ghost danger size="small"
            onClick={() => deleteConfirm(record.id!)}
          >删除</Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className={styles.form}>
        <Button type="primary" onClick={() => showModel({ id: null, roleName: "" })}>新增</Button>
        <Modal
          title="角色名称"
          visible={visible}
          onOk={submit}
          onCancel={cancelModel}
          okText="确认"
          cancelText="取消"
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Modal>
        <Modal
          title="关联菜单"
          style={{ width: "100%", minWidth: "600px" }}
          visible={treeVisibel}
          onOk={treeSubmit}
          onCancel={cancelTreeModel}
        >

          <Tree
            checkStrictly={true}
            checkable
            checkedKeys={roleState.checkedKeys}
            onCheck={onCheck}
            treeData={menuState.menuList}
          />
        </Modal>

      </div>
      <Table
        columns={columns}
        dataSource={roleState.roleList}
        rowKey={(record: manager.IRole) => record.id!}
        pagination={false} />
    </>
  )
}
export default Role
