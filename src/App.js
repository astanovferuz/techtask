import './App.css';
import Main from './components/Main';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";

const store = ConfigureStore();

function App () {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <div classNameNameName="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
