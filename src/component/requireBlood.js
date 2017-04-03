import React, { Component } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import  BloodAction  from '../store/action/requireBloodAct'
// import  {Hello}  from './hm'


class RequireBlood extends Component {
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
        this.allDonors = [];
        this.state = {
//value:'1',

            application: '',

            requireBlood: 'A+'
        }
        this.handleRequiredTypeChange = this.handleRequiredTypeChange.bind(this);
        // this.handleRequiredRequest = this.handleRequiredRequest.bind(this);
       // this.checkBlood = this.checkBlood.bind(this);
this.handleBlgroup =this.handleBlgroup.bind(this);

    }

    componentDidMount() {
        this.props.bloodReq11("dgfsdfsdfds")
        // Hello.bldReq() 
        // BloodAction.bloodReq()

        // console.log(this.props)
        //this.props.userData();
        //This is called for Loading Initial State
        // this.props.bloodRequest();
    }
 handleBlgroup(e, key) {
    e.preventDefault();
    this.setState({
      value: key + 1,
       requireBlood: e.target.childNodes[0].nodeValue

    })}
    handleRequiredTypeChange = (event, index, value) => {
        this.setState({ bloodGroup: value }); 
        console.log('djhgjgjagajsg',value)
    };
    // checkBlood(currentBlood) {
    //     if (this.state.bloodGroup == 'AB+') {
    //         if (currentBlood == 'O-' || currentBlood == 'O+' || currentBlood == 'AB+') {
    //             return true;
    //             console.log('sxzcz',currentBlood)
    //         }
    //     }

    //     if (this.state.bloodGroup == 'A+') {
    //         if (currentBlood == 'O-' || currentBlood == 'O+' || currentBlood == 'A+' || currentBlood == 'A-') {
    //             return true;
    //         }
    //     }
    //     if (this.state.bloodGroup == 'A-') {
    //         if (currentBlood == 'O-' || currentBlood == 'A-') {
    //             return true;
    //         }
    //     }
    //     if (this.state.bloodGroup == 'B+') {
    //         if (currentBlood == 'O-' || currentBlood == 'O+' || currentBlood == 'B+' || currentBlood == 'B-') {
    //             return true;
    //         }
    //     }

    //     if (this.state.bloodGroup == 'B-') {
    //         if (currentBlood == 'O-' || currentBlood == 'B-') {
    //             return true;
    //         }
    //     }

    //     if (this.state.bloodGroup == 'O+') {
    //         if (currentBlood == 'O-' || currentBlood == 'O+') {
    //             return true;
    //         }
    //     }
    //     if (this.state.bloodGroup == 'O-') {
    //         if (currentBlood == 'O-') {
    //             return true;
    //         }
    //     }


    // }//

    render() {
       const that = this;
        const application = this.props && this.props.application && this.props.application.allBlood ? this.props.application.allBlood : {};
       console.log("hme data   ye mila " ,application)
        return (

            <div>
                <center>

                    <SelectField
                        ref='bloodGroup'
                        name='bloodGroup'
                        required={true}
                        hintText="Blood Group"
                        floatingLabelText="Select Field"
                        value={this.state.bloodGroup}
                        onChange={this.handleRequiredTypeChange}
                    >

                        {
                            this.bloodgroups.map(bldgrop => {
                                return <MenuItem key={bldgrop} value={bldgrop} primaryText={bldgrop} />
                            })



                        }

                    </SelectField>
                </center>
                <div>
                  {application && application.length > 0 ? 
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
                            {application.map((todo, index) => {
                               // if(that.checkBlood(todo.bloodgroups)){
                                    return (
                                        <TableRow key={index}>
                                            <TableRowColumn>{index+1}</TableRowColumn>
                                            <TableRowColumn>{todo.email}</TableRowColumn>
                                            <TableRowColumn>{todo.name}</TableRowColumn>
                                            <TableRowColumn>{todo.gender}</TableRowColumn>
                                            <TableRowColumn>{todo.age}</TableRowColumn>
                                            <TableRowColumn>{todo.name}</TableRowColumn>
                                            <TableRowColumn>{todo.name}</TableRowColumn>
                                            <TableRowColumn>{todo.name}</TableRowColumn>

                                        </TableRow>
                                    );
                                }
                                
                           // }
                            )
                            }

                        </TableBody>
                    </Table>
                    :null}
                   
                </div>


            </div>
        )
    }

}//main


export default RequireBlood;