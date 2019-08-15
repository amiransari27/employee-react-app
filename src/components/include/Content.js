import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import EmployeelList from '../EmployeelList';

class Content extends Component {
    render() {
       return (
        <Container>
            <EmployeelList/>
        </Container>
       );
    }
}

export default Content;