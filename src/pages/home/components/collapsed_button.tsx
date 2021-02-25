import { RootStore } from '@/store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCollapsed } from '../store/actions';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import styles from '@/pages/home/index.module.css';
const CollapsedButton: React.FC = () => {
  const dispatch = useDispatch()
  const homeState = useSelector((state: RootStore) => state.home);
  const onchange = () => {
    dispatch(setCollapsed(!homeState.collapsed))
  }
  return <span>
    {homeState.collapsed ?
      <MenuUnfoldOutlined onClick={onchange}
        className={styles.collapsedButton} /> :
      < MenuFoldOutlined onClick={onchange}
        className={styles.collapsedButton}
      />}
  </span>
}
export default CollapsedButton