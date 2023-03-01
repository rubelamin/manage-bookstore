import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";

function App() {
  const [text, setText] = useState("");

  const searchHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <Provider store={store}>
      <NavBar handleSearch={searchHandler} />

      <MainBody searchText={text} />
    </Provider>
  );
}

export default App;
