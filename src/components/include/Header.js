import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends Component {
    render() {
       return (
        <Jumbotron>
            <center><h4>React List (Pagination, Redux)</h4></center>
        </Jumbotron>
       );
    }
}

export default Header;