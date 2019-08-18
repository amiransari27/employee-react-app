import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from "react-redux";
import EmployeelListItem from './EmployeelListItem';
import EmployeelListPagination from './EmployeeListPagination';
import { fetchEmployees } from '../store/actions/employeeActions';
 

class EmployeelList extends Component {
    constructor(props){
        super(props)
        this.getEmpList = this.getEmpList.bind(this)
        this.getEmpList(this.props.page)
    }
    getEmpList (page){
        
        this.props.dispatch(
            fetchEmployees(page)
        );
    }
    render() {
       return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employeeList.map(item => 
                        <EmployeelListItem item={item} key={item.id.toString()} />
                    )}
                </tbody>
            </Table>    
            
            {
                !(this.props.loading) && 
                <EmployeelListPagination 
                    page={this.props.page}
                    pages={this.props.pages}
                    total={this.props.total}
                    onPageChange={this.getEmpList}

                />
            }

            
        </div>
       );
    }
}

const mapStateToProps = state => ({
    employeeList: state.employee.items,
    page: state.employee.page,
    pages: state.employee.pages,
    total: state.employee.total,
    loading: state.employee.loading,
    error: state.employee.error
  });

export default connect(mapStateToProps)(EmployeelList);
