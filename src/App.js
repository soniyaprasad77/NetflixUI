import { Provider } from "react-redux";

import Body from "./components/Body";
import appStore from "./store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
