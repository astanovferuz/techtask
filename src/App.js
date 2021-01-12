import './App.css';
import Main from './components/Main';
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { client } from "./graphql/client";


function App () {
  return (
    <ApolloProvider client={ client }>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
