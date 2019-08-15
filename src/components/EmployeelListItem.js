import React, { Component } from 'react';
import Img from 'react-image'

class EmployeelListItem extends Component {
    constructor(props){
        super(props);
        this.state = {item : this.props.item}
    }
    render() {
       return (
        <tr>
            <td>{this.state.item.id}</td>
            <td>{this.state.item.email}</td>
            <td>{this.state.item.first_name}</td>
            <td>{this.state.item.last_name}</td>
            <td><Img src={this.state.item.avatar} /></td>
        </tr>
       );
    }
}

export default EmployeelListItem;