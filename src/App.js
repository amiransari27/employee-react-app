import React, { Component } from 'react';
import './App.css';
import Header from './components/include/Header';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store'
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployeelList from './components/EmployeelList';
import { Container } from 'react-bootstrap';
import EmployeelCreate from './components/EmployeeCreate';


const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Header />
          <Container>
            <Route path="/create" component={EmployeelCreate} />
            <Route path="/list" component={EmployeelList} />
          </Container>
        </Provider>
      </Router>
    );
  }
}

export default App;
