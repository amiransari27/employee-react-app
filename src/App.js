import React, { Component } from 'react';
import './App.css';
import Header from './components/include/Header';
import Content from './components/include/Content';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store'
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Header />
          <Content />        
      </Provider>
    );
  }
}

export default App;
