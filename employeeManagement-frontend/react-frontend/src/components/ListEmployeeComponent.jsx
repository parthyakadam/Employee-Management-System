import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees : []
        }
        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data})
        })
    }

    addEmployee(){
        this.props.history.push('/add-employee')
    }
  
    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <Link to='/add-employee' className='btn btn-primary'>Add Employee</Link>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    e =>
                                    <tr key={e.id}>
                                        <td>{e.firstName}</td>
                                        <td>{e.lastName}</td>
                                        <td>{e.email}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>  
        )
  }
}

export default ListEmployeeComponent