import Login from '@/pages/login'
import { RouterItem } from "./types"
import Home from "@/pages/home"
const routers: RouterItem[] = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Home,
  }
]

export default routers
