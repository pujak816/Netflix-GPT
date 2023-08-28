import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/appStore";

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
