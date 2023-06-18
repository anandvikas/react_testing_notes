import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { Users } from "./components/24_mockingHTTPRequest/user";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Users />
      </div>
    </Provider>
  );
}

export default App;
