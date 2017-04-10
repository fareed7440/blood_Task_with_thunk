import React, { Component } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
//import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'
//import BloodAction from '../store/action/requireBloodAct'
const AppStyle = {
    textAlign:'center',
   // backgroundColor:'transparent',
   // textColor:'#212121'
}
export class BloodRequired extends Component {

    constructor(props) {
        super(props);
        this.bloodgroups = [
            "A",
            "B",
            "AB",
            "O", 
            
        ]
        this.allDonors = [];
        this.state = { requireBlood: 'AB', open :'false' }
        this.handleRequiredTypeChange = this.handleRequiredTypeChange.bind(this);
      // this.checkBlood = this.checkBlood.bind(this);
    }

    handleRequiredTypeChange = (event, index, value) => {
         event.preventDefault();
        
         this.setState({ requireBlood: value }); this.props.BloodRequest(value); };


    render() {

        const application = this.props && this.props.application && this.props.application.allBlood ? this.props.application.allBlood : [];
        console.log("====================================", application)
        return (
 
            <div>
 <AppBar
    title="View Donator"
    style={AppStyle}
    
   // style={{color:'#212121'}}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
   <Link to="/home" ><RaisedButton label="home" primary={true} style={{margin:"12px"}} /> </Link>
   </AppBar>
  
  
  <br/><br/>

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
{application && application.length>0 ? 
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
                              console.log('asasasa',application)
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
                    :null}
                </div>


            </div>
        )
    }
}



export default BloodRequired;


