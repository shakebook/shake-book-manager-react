import * as React from 'react';
import styles from './index.module.css';
import { Form, Input, Button, Checkbox } from 'antd';
import {
  TwitterOutlined,
} from '@ant-design/icons';
import * as actions from './store/actions'
import { shakebook } from '@/service/api/v1/account_pb'

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 3, span: 24 },
};
const Login: React.FC = (props: any) => {
  const [accountName, setAccountName] = React.useState("")
  const [accountPassword, setAccountPassword] = React.useState("")
  const submit = () => {
    const req: shakebook.ISignInRequest = { accountName: accountName, accountPassword: accountPassword }
    actions.SignIn(req, props)
  }
  return <div className={styles.background}>

    <div className={styles.center}>
      <h1 className={styles.title}> <TwitterOutlined className={styles.logo} />抖书</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="账号"
          name="username"

        // rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input size="large" value={accountName} onChange={(e) => setAccountName(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
        // rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password size="large" value={accountPassword} onChange={(e) => setAccountPassword(e.target.value)} />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>保存登录信息</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit" size="large"
            onClick={submit}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
}

export default Login



