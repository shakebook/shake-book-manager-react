import React, { useEffect } from 'react';
import { Table, Modal, Space, Button, Checkbox, message, Tag } from 'antd';
import { Dispatch } from "redux"
import { useSelector, useDispatch } from "react-redux"
import * as actions from './store/actions'
import * as roleActions from '@/pages/content/pages/role/store/actions'
import { RootStore } from "@/store";
import { shakebook } from '@/service/api/v1/account_pb';
import { manager } from '@/service/api/v1/manager_pb';
import { SyncOutlined, CloseCircleOutlined } from '@ant-design/icons';



const Account: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const accountState = useSelector((state: RootStore) => state.account);
  const roleState = useSelector((state: RootStore) => state.role);
  const [accountId, setAccountId] = React.useState<null | number>(null)
  const [roleVisible, setRoleVisible] = React.useState<boolean>(false)

  const columns = [
    {
      title: '账号',
      dataIndex: 'accountName',
      key: 'accountName',
      render: (text: string) => <span style={{ color: "dodgerblue", fontWeight: "bold" }}>{text}</span>
    },
    {
      title: '邮箱',
      dataIndex: 'accountEmail',
      key: 'accountEmail',
    },
    {
      title: '手机号',
      dataIndex: 'accountPhone',
      key: 'accountPhone',
    },
    {
      title: '最后登录时间',
      dataIndex: 'lastTime',
      key: 'lastTime',
    },
    {
      title: '点赞数',
      dataIndex: 'thumbsUp',
      key: 'thumbsUp',
      render: (text: string) => <Tag color="geekblue">{text}</Tag>
    },
    {
      title: '喜欢数',
      dataIndex: 'focusNumber',
      key: 'focusNumber',
      render: (text: string) => <Tag color="magenta">{text}</Tag>
    },
    {
      title: '粉丝数',
      dataIndex: 'fansNumber',
      key: 'fansNumber',
      render: (text: string) => <Tag color="red">{text}</Tag>
    },
    {
      title: '状态',
      dataIndex: 'accountStatus',
      key: 'accountStatus',
      render: (text: number) => <>
        {
          text === shakebook.AccountStatus.NORMAL ?
            <Tag icon={<SyncOutlined spin />} color="success">
              {'正常'}
            </Tag> :
            text === shakebook.AccountStatus.DISABLE ?
              <Tag icon={<CloseCircleOutlined />} color="error">
                {'已禁用'}
              </Tag> : text === shakebook.AccountStatus.LOCK ?
                <Tag icon={<CloseCircleOutlined />} color="error">
                  {'已锁定'}
                </Tag> :
                <Tag icon={<CloseCircleOutlined />} color="error">
                  {'已删除'}
                </Tag>
        }
      </>
    },
    {
      title: '操作',
      key: 'action',
      render: (text: string, record: manager.IMenuInfo) => (
        <Space size="small">
          <Button type="primary" ghost size="small" onClick={() => showRoleModel(record)}>配置角色</Button>
        </Space>
      ),
    },
  ];

  React.useEffect(() => {
    dispatch(actions.getAccountListRequest())
    dispatch(roleActions.getRoleListRequest())
  }, [dispatch])

  const showRoleModel = (record: shakebook.IAccountInfo) => {
    dispatch(actions.getAccountBindRoleRequest({ id: record.id }))
    setAccountId(record.id!);
    setRoleVisible(true)
  }

  const cancelRoleModel = () => {
    setRoleVisible(false)
    setAccountId(null)
  }

  const submitAccountBindRole = () => {
    const roleIds: number[] = accountState.checkboxRoles
    dispatch(actions.AccountBindRoleRequest({ accountId, roleIds } as manager.AccountBindRoleRequest))
    cancelRoleModel()
  }
  const onChangeCheckbox = (checkedValues: any[]) => {
    dispatch(actions.onChangeCheckboxAction(checkedValues))
  }

  return (<>
    <div style={{ marginBottom: "20px" }}>
      <Modal
        title="账号绑定角色"
        visible={roleVisible}
        onOk={submitAccountBindRole}
        onCancel={cancelRoleModel}
        okText="确认"
        cancelText="取消"
      >
        <Checkbox.Group style={{ lineHeight: 3 }}
          options={roleState.roleCheckboxList}
          value={[...accountState.checkboxRoles]}
          onChange={onChangeCheckbox} />
      </Modal>
    </div>
    <Table
      columns={columns}
      dataSource={accountState.accountList}
      rowKey={(record) => record.id!}
    />
  </>
  )
}
export default Account
