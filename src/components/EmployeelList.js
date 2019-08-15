import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import EmployeelListItem from './EmployeelListItem';
import axios from 'axios';
import EmployeelListPagination from './EmployeeListPagination';
 

class EmployeelList extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:false,
            employeeList:[],
            page:1,
            pages:'',
            total:''
        }
        this.getEmpList = this.getEmpList.bind(this)
        this.getEmpList(this.state.page)
    }
    async getEmpList (page){
        const {data} = await axios.get(`https://reqres.in/api/users?page=${page}`)
        this.setState({loading:true});
        if(data.error){
            this.setState({
                employeeList:[],
                loading:false
            })
        }else{
            this.setState({
                employeeList:data.data,
                page: data.page,
                pages: data.total_pages,
                total: data.total,
                loading:false
            })
        }
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
                    {this.state.employeeList.map(item => 
                        <EmployeelListItem item={item} key={item.id.toString()} />
                    )}
                </tbody>
            </Table>    
            
            {
                !(this.state.loading) && 
                <EmployeelListPagination 
                    page={this.state.page}
                    pages={this.state.pages}
                    total={this.state.total}
                    onPageChange={this.getEmpList}

                />
            }

            
        </div>
       );
    }
}

export default EmployeelList;