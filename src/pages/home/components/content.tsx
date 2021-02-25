import * as React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import routers from "@/pages/content/router";

const Content: React.FC = () => {

  return <main>
    <Switch>
      {
        routers.map((item, index) =>
          <Route key={index} path={item.path} component={item.component}></Route>
        )
      }
    </Switch>
  </main>
}
export default Content