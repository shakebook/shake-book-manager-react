import { RouterItem } from "@/router/types"
import Menu from "@/pages/content/pages/menu"
import Role from '@/pages/content/pages/role'
import Account from '@/pages/content/pages/account'
import Home from '@/pages/content/pages/home'
const routers: RouterItem[] = [
  {
    path: "/role",
    component: Role,
  },
  {
    path: "/menu",
    component: Menu,
  },
  {
    path: "/account",
    component: Account,
  },
  {
    path: "/",
    component: Home,
  }
]

export default routers
