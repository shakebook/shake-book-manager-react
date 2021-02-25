import * as React from 'react';
import CollapsedButton from '@/pages/home/components/collapsed_button';
import styles from '@/pages/home/index.module.css';
import { Dispatch } from "redux"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "@/store";
import {
  TwitterOutlined,
  DownOutlined
} from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
import * as actions from './store/actions';
import { useHistory } from 'react-router-dom'
import IconFont from '@/common/icon';

const Header: React.FC = () => {
  let history = useHistory()
  const dispatch: Dispatch<any> = useDispatch()
  const headerState = useSelector((state: RootStore) => state.header);
  const signout = () => dispatch(actions.signoutRequest())
  React.useEffect(() => {
    dispatch(actions.getAccountRequest())
    dispatch(actions.getAccountMenuRequest())
  }, [dispatch, history])

  const menu = (
    <Menu>
      <Menu.Item>
        设置
      </Menu.Item>
      <Menu.Item onClick={() => signout()}>
        退出
      </Menu.Item>

    </Menu>
  );
  return <div className={styles.headerContainer}>
    <div className={styles.logoContainer}>
      {/* <TwitterOutlined className={styles.logo} /> */}
      <IconFont className={styles.logo} type="icontwitter" />
      <strong className={styles.title}>抖书管理系统</strong>
      {/* <CollapsedButton /> */}
    </div>
    <div className={styles.account}>
      <Avatar size={24} src={process.env.PUBLIC_URL + '/logo512.png'} />&nbsp;
      <Dropdown overlay={menu} trigger={['click']}>
        <a href="##" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <strong>{headerState.account.accountNickname}</strong> <DownOutlined />
        </a>
      </Dropdown>
    </div>

  </div>
}
export default Header