// import logo from './logo.svg';
import "./App.css";
import Login from "./components/login/Login";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";

import store from "./app/Store";
// import Home from "./components/Home/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />

        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
}

export default App;
