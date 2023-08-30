import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default class CreateEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };

        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees')
        })
    }

    render() {
        return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add New Employee</h3>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input placeholder='First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input placeholder='Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Email Id: </label>
                                    <input placeholder='Email' name='email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler}/>
                                </div>

                                {/* <button className="btn btn-success" onClick={this.saveEmployee}>Save</button> */}
                                <Link to="/employees" className="btn btn-success" onClick={this.saveEmployee}>Save</Link>
                                {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button> */}
                                <Link to='/employees' className='btn btn-danger' style={{marginLeft: "10px"}}>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}