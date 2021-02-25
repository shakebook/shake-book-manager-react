import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import store from "./store/index"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>

  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
