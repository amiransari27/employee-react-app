import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col, Table } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Header from './components/include/Header';
import Content from './components/include/Content';


class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Content />        
      </div>
    );
  }
}

export default App;
