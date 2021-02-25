import axios from 'axios';
import camelcaseKeys from 'camelcase-keys'
import { shakebook } from '@/service/api/v1/account_pb'
import { notification } from 'antd';
import api from '@/requestAPI';
export const SignIn = (req: shakebook.ISignInRequest, props: any) => {
  axios({
    method: 'post',
    url: api.signin,
    data: req,
  }).then(function (res) {
    let ret: shakebook.ISignInResponse =
      shakebook.SignInResponse.fromObject(
        camelcaseKeys(res.data as Object)
      )
    if (res.status === 200 && ret.success) {
      localStorage.setItem("token", ret.data as string);
      props.history.push("/");
    } else {
      notification['warning']({
        message: '登录提示',
        description: ret.message
      });
    }
  })
    .catch(function (error) {
      notification['error']({
        message: '登录提示',
        description: "请稍后重试"
      });
    });
}