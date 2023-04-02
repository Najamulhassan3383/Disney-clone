// import logo from './logo.svg';
import "./App.css";
import Login from "./components/login/Login";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./app/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Login />
      </Provider>
    </div>
  );
}

export default App;
