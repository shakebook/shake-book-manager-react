import * as React from 'react';
import CollapsedButton from './collapsed_button';
import styles from '@/pages/home/index.module.css';
import {
  TwitterOutlined,
  DownOutlined
} from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
const Logo: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          设置
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          退出
        </a>
      </Menu.Item>

    </Menu>
  );
  return <div className={styles.headerContainer}>
    <div className={styles.logoContainer}>
      <TwitterOutlined className={styles.logo} />
      <strong className={styles.title}>SHAKEBOOK</strong>
      {/* <CollapsedButton /> */}
    </div>
    <div className={styles.account}>
      <Avatar size={20} src={process.env.PUBLIC_URL + '/logo512.png'} />&nbsp;
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          yangjiafeng <DownOutlined />
        </a>
      </Dropdown>
    </div>

  </div>
}
export default Logo