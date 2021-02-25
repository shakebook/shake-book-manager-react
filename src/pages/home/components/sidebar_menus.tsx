import * as React from 'react';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,

} from '@ant-design/icons';
import IconFont from '@/common/icon';
import { RootStore } from '@/store';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import * as menuTypes from '@/pages/content/pages/menu/store/types'

const { SubMenu } = Menu;

const SiderBarMenus: React.FC = () => {
  const homeState = useSelector((state: RootStore) => state.home);
  const headerState = useSelector((state: RootStore) => state.header);

  //递归菜单
  const mapMenuList = (menus: menuTypes.MenuTree[]) => {
    console.log("menus:", menus)
    if (menus.length != 0) {
      return (
        menus.map(i => {
          if (i.children && i.children.length > 0) {
            return (
              <SubMenu
                key={i.value}
                title={<span>
                  <IconFont style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }} type={i.menuIcon} />
                  <span>{i.title}</span>
                </span>
                }
              >
                {mapMenuList(i.children)}
              </SubMenu>
            )
          } else {
            return <Menu.Item key={i.value}>
              <Link to={i.menuRouter}>{i.title}</Link>
            </Menu.Item>
          }
        })
      )
    }

  }
  return (
    <div style={{ width: homeState.collapsed ? 80 : 256 }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={[]}
        mode="inline"
        theme="dark"
        inlineCollapsed={homeState.collapsed}
      >

        <Menu.Item key="10000">
          <Link to="/">
            <IconFont style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }} type="iconshouye1" />
            系统首页
            </Link>
        </Menu.Item>
        {
          mapMenuList(headerState.accountMenus)
        }
      </Menu >
    </div >
  );
}


export default SiderBarMenus