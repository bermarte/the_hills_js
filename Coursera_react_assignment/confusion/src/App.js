import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
//the redux store became available in my application
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
