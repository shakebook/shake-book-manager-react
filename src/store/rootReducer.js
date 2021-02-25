import { combineReducers } from "redux";
import listReducer from "@/pages/list/store/reducer";
import countReducer from "@/pages/count/store/reducer";
import homeReducer from "@/pages/home/store/reducer";
import headerReducer from "@/pages/home/header/store/reducer";
import roleReducer from "@/pages/content/pages/role/store/reducer";
import menuReducer from "@/pages/content/pages/menu/store/reducer";
import accountReducer from "@/pages/content/pages/account/store/reducer";
const RootReducer = combineReducers({
  list: listReducer,
  count: countReducer,
  home: homeReducer,
  header: headerReducer,
  role: roleReducer,
  menu: menuReducer,
  account: accountReducer,
});

export default RootReducer