import RouterConfig from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <RouterConfig />
    </Provider>
  );
}

export default App;
