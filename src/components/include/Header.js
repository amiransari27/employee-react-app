import React, { Component } from 'react';
import { Jumbotron, Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Jumbotron>
                <center><h4>React List (Pagination, Redux)</h4></center>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/list">List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/create">Create</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Jumbotron>
        );
    }
}

export default Header;