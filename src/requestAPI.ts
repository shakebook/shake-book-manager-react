

interface api {
  signin: string
  signup: string
  signout: string
  getAccount: string
  accountList: string
  getAccountMenu: string
  role: string
  roleBindMenu: string
  accountBindRole: string
  managerMenu: string
}

export default {
  signin: "/api/v1/signin",
  signup: "/api/v1/signup",
  signout: "/api/v1/signout",
  getAccount: "/api/v1/account",
  accountList: "/api/v1/account/list",
  getAccountMenu: "/api/v1/account/menu",
  role: "/api/v1/role",
  roleBindMenu: "/api/v1/role/bind/menu",
  accountBindRole: "/api/v1/account/bind/role",
  managerMenu: "/api/v1/managerMenu",
} as api