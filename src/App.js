import { Provider } from "react-redux";
import store from "./redux/store";
import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Provider store={store}>
      <NavBar />

      <MainBody />
    </Provider>
  );
}

export default App;
