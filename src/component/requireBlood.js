import React, { Component } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
//import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'
//import BloodAction from '../store/action/requireBloodAct'

export class BloodRequired extends Component {

    constructor(props) {
        super(props);
        this.bloodgroups = [
            "A+",
            "B+",
            "AB+",
            "O+", 
            "A-",
            "B-",
            "AB-",
            "O-"
        ]
        this.state = { requireBlood: 'A+' }
        this.handleRequiredTypeChange = this.handleRequiredTypeChange.bind(this);
       this.checkBlood = this.checkBlood.bind(this);
    }

    handleRequiredTypeChange = (event, index, value) => { this.setState({ requireBlood: value }); this.props.BloodRequest(value); };

    checkBlood(currentBlood) {
        if (this.state.bloodGroup == 'AB+') {
            if (currentBlood == 'O-' || currentBlood == 'O+' || currentBlood == 'AB+') {
                return true;
            }
        }

        if (this.state.bloodGroup == 'A+') {
            if (currentBlood == 'O-' || currentBlood == 'O+' || currentBlood == 'A+' || currentBlood == 'A-') {
                return true;
            }
        }
        if (this.state.bloodGroup == 'A-') {
            if (currentBlood == 'O-' || currentBlood == 'A-') {
                return true;
            }
        }
        if (this.state.bloodGroup == 'B+') {
            if (currentBlood == 'O-' || currentBlood == 'O+' || currentBlood == 'B+' || currentBlood == 'B-') {
                return true;
            }
        }

        if (this.state.bloodGroup == 'B-') {
            if (currentBlood == 'O-' || currentBlood == 'B-') {
                return true;
            }
        }

        if (this.state.bloodGroup == 'O+') {
            if (currentBlood == 'O-' || currentBlood == 'O+') {
                return true;
            }
        }
        if (this.state.bloodGroup == 'O-') {
            if (currentBlood == 'O-') {
                return true;
            }
        }


    }

    render() {

        const application = this.props && this.props.application && this.props.application.allBlood ? this.props.application.allBlood : [];
        console.log("====================================", application)
        return (

            <div>
                <center>
                    <SelectField
                        ref='bloodGroup'
                        name='bloodGroup'
                        required={true}
                        hintText="Blood Group"
                        floatingLabelText="Select Field"
                        value={this.state.requireBlood}
                        onChange={this.handleRequiredTypeChange}>
                        {
                            this.bloodgroups.map(bldgrop => {
                                return <MenuItem key={bldgrop} value={bldgrop} primaryText={bldgrop} />
                            })

                        }

                    </SelectField>
                </center>
                <div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>name</TableHeaderColumn>
                                <TableHeaderColumn>gender</TableHeaderColumn>
                                <TableHeaderColumn>email</TableHeaderColumn>
                                <TableHeaderColumn>age</TableHeaderColumn>
                                <TableHeaderColumn>bloodGroup</TableHeaderColumn>
                                <TableHeaderColumn>phone_no</TableHeaderColumn>
                                <TableHeaderColumn>address</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {application.map((data, index) => {
                                if(this.checkBlood())
                                return (
                                    <TableRow key = {index}>
                                        <TableRowColumn>{data.name}</TableRowColumn>
                                        <TableRowColumn>{data.gender}</TableRowColumn>
                                        <TableRowColumn>{data.email}</TableRowColumn>
                                        <TableRowColumn>{data.age}</TableRowColumn>
                                        <TableRowColumn>{data.bloodGroup}</TableRowColumn>
                                        <TableRowColumn>{data.phone_no}</TableRowColumn>
                                        <TableRowColumn>{data.address}</TableRowColumn>
                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </div>


            </div>
        )
    }
}



export default BloodRequired;


