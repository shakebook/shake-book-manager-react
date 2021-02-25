import * as React from 'react';
import { Table, Button, Modal, Input, Form, TreeSelect, message, Space } from 'antd';
import { Dispatch } from "redux"
import { useSelector, useDispatch } from "react-redux"
import { manager } from '@/service/api/v1/manager_pb'
import * as actions from './store/actions'
import { RootStore } from "@/store";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import IconFont from '@/common/icon';
import * as types from './store/types';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 15 },
};

const { confirm } = Modal;

const Menu: React.FC = () => {
  const [visible, setVisible] = React.useState(false)
  const [menuName, setMenuName] = React.useState<string>("")
  const [menuIcon, setMenuIcon] = React.useState<string>("")
  const [menuRouter, setMenuRouter] = React.useState<string>("")
  const [parentId, setParentId] = React.useState<number | string>("")
  const [id, setId] = React.useState<number | string>(0)
  const dispatch: Dispatch<any> = useDispatch()
  const menuState = useSelector((state: RootStore) => state.menu);

  const columns = [
    {
      title: '菜单名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '菜单路由',
      dataIndex: 'menuRouter',
      key: 'menuRouter',
    },
    {
      title: '菜单图标',
      dataIndex: 'menuIcon',
      key: 'menuIcon',
      render: (text: string) => <IconFont style={{ fontSize: '20px', color: "dodgerblue" }} type={text} />
    },
    {
      title: '操作',
      key: 'action',
      render: (text: string, record: types.MenuTree) => (
        <Space size="small">
          <Button type="primary" ghost size="small"
            onClick={() => showModel({
              menuRouter: record.menuRouter,
              id: record.key,
              menuName: record.menuName,
              menuIcon: record.menuIcon,
              parentId: record.parentId,
            })}>修改</Button>
          <Button type="primary" ghost danger size="small"
            onClick={() => deleteConfirm(record)}
          >删除</Button>
        </Space>
      ),
    },
  ];

  React.useEffect(() => {
    dispatch(actions.getMenuListRequest())
  }, [dispatch])

  const deleteConfirm = (record: types.MenuTree) => {
    confirm({
      title: '这个是一个危险操作?',
      icon: <ExclamationCircleOutlined />,
      content: '确定执行删除操作吗？',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        dispatch(actions.deleteRowRequest({ id: record.key }))
      },
    });
  }

  const submit = () => {
    if (!menuName) {
      message.error('菜单名称不能为空');
      return
    }
    if (id) {
      dispatch(actions.UpdateRowRequest({
        menuName: menuName,
        id: id,
        menuIcon: menuIcon,
        menuRouter: menuRouter,
        parentId: parentId || 0,
      } as manager.IUpdateMenuRequest))
    } else {
      dispatch(actions.createMenuRequest({
        menuName: menuName.trim(),
        menuIcon: menuIcon.trim(),
        menuRouter: menuRouter.trim(),
        parentId: Number(parentId),
      } as manager.ICreateMenuRequest))
    }
    cancelModel()
  }

  const showModel = (record: manager.IMenuInfo) => {
    setMenuName(record.menuName || "");
    setParentId(record.parentId || "")
    setMenuIcon(record.menuIcon || "")
    setMenuRouter(record.menuRouter || "")
    setId(record.id!);
    setVisible(true)
  }

  const cancelModel = () => {
    setVisible(false)
    setMenuName("");
    setId(0)
  }

  return <>
    <div style={{ marginBottom: '10px' }}>
      <Button type="primary" onClick={() => showModel({} as manager.ICreateMenuRequest)}>新增</Button>
      <Modal
        title="菜单"
        visible={visible}
        onOk={submit}
        onCancel={cancelModel}
        okText="确认"
        cancelText="取消"
        style={{ top: 20 }}
      >
        <Form {...layout}>
          <Form.Item label="上级菜单">
            <TreeSelect
              allowClear={true}
              style={{ width: '100%' }}
              value={parentId}
              dropdownStyle={{ maxHeight: 600, overflow: 'auto' }}
              treeData={menuState.menuList}
              placeholder="请选择..."
              treeDefaultExpandAll
              onChange={(v) => setParentId(v)}
            />
          </Form.Item >
          <Form.Item label={<span><strong style={{ color: "red" }}>*</strong>菜单名称</span>}>
            <Input
              onChange={(e) => setMenuName(e.target.value)}
              value={menuName}
            />
          </Form.Item >
          <Form.Item label="菜单路由">
            <Input
              onChange={(e) => setMenuRouter(e.target.value)}
              value={menuRouter}
            />
          </Form.Item >
          <Form.Item label="菜单图标">
            <Input
              onChange={(e) => setMenuIcon(e.target.value)}
              value={menuIcon}
            />
          </Form.Item >
        </Form>
      </Modal>
    </div>
    <Table
      columns={columns}
      dataSource={menuState.menuList as types.MenuTree[]}
      rowKey={(record: types.MenuTree) => record.key!}
      pagination={false}
    />
  </>

}

export default Menu
