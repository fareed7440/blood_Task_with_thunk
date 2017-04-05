<<<<<<< Updated upstream
import React,{Component} from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
 import SelectField from 'material-ui/SelectField';
 import MenuItem from 'material-ui/MenuItem';
 import DropDownMenu from 'material-ui/DropDownMenu';
//import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
class RequireBlood extends Component{

    constructor(props) {
=======
import React, { Component } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
//import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router'
import  BloodAction  from '../store/action/requireBloodAct'
// import  {Hello}  from './hm'


class RequireBlood extends Component {



  constructor(props) {
>>>>>>> Stashed changes
        super(props);
        this.state={
            value: 1,
            blood: '',
        }
<<<<<<< Updated upstream
    }

   
    handleBgroup(e, key) {
        e.preventDefault();
        this.setState({
            value: key + 1,
        })
      var   bloodg= e.target.childNodes[0].nodeValue;
      console.log(bloodg)
       this.props.bloodRequest(bloodg)

        console.log(this.state.blood)
        // this.props.SignUp(this.state.blood)
    }

    render() {
const application = this.props&&this.props.application&&this.props.application.allBlood ?this.props.application.allBlood:[];
=======
    }

   
    handleBgroup(e, key) {
        e.preventDefault();
        this.setState({
            value: key + 1,
        })
      var   bloodg= e.target.childNodes[0].nodeValue;
      console.log(bloodg)
       this.props.bloodRequests(bloodg)

        console.log(this.state.blood)
        // this.props.SignUp(this.state.blood)
    }

    render() {
 const application = this.props && this.props.application && this.props.application.allBlood ? this.props.application.allBlood : {};
      console.log("ffffffffffffff",application)
        return (
            <div className="App">
              
               {/*<Link to ="/home"> <RaisedButton label="Back" secondary={true} style={{ float:"right",marginRight:"20px", backgroundColr: "pink" }}/></Link>
                  <br/><br/><br/>*/}
                <DropDownMenu value={this.state.value} onChange={this.handleBgroup.bind(this)} ref="blood" style={{ width: 200 }} required="required">
                    <MenuItem  style={{color:"red"}} value={1} primaryText="Select Blood Group" disabled />
                    <MenuItem value={2} primaryText="A+" />
                    <MenuItem value={3} primaryText="B+" />
                    <MenuItem value={4} primaryText="AB+" />
                    <MenuItem value={5} primaryText="O+" />
                    <MenuItem value={6} primaryText="O-" />
                    <MenuItem value={7} primaryText="AB-" />
                    <MenuItem value={8} primaryText="B-" />
                    <MenuItem value={9} primaryText="A-" />
                </DropDownMenu>
                <br />

              
                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHeaderColumn  style={{color:"red"}}>ID</TableHeaderColumn>
                            <TableHeaderColumn  style={{color:"red"}}>Name</TableHeaderColumn>
                            <TableHeaderColumn  style={{color:"red"}}>Country</TableHeaderColumn>
                            <TableHeaderColumn  style={{color:"red"}}> Area</TableHeaderColumn>
                            <TableHeaderColumn  style={{color:"red"}}>city</TableHeaderColumn>
                            <TableHeaderColumn  style={{color:"red"}}>Bloo Group</TableHeaderColumn>
                            <TableHeaderColumn style={{color:"red"}} >Mobile num</TableHeaderColumn>
                            <TableHeaderColumn style={{color:"red"}}>weight</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {application.map((val, i) => {
                            console.log(val)
                            return (
                                <TableRow key={i}>
                                    <TableRowColumn  key={i}>{i + 1}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.name}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.gender}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.area}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.city}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.blood}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.mobilenum}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.weight}</TableRowColumn>
                                </TableRow>

                            )
                        })}
                    </TableBody>
                </Table>

            </div>
        );
    }
}

export default RequireBlood;



























//     constructor(props) {
//         super(props);
//         this.bloodgroups = [
//             "A+",
//             "B+",
//             "AB+",
//             "O+",
//             "A-",
//             "B-",
//             "AB-",
//             "O-"
//         ]
//         this.allDonors = [];
//         this.state = {
// //value:'1',

//             application: '',

//             requireBlood: 'A+'
//         }
//         this.handleRequiredTypeChange = this.handleRequiredTypeChange.bind(this);
//         // this.handleRequiredRequest = this.handleRequiredRequest.bind(this);
//        // this.checkBlood = this.checkBlood.bind(this);
// this.handleBlgroup =this.handleBlgroup.bind(this);

//     }

//     componentDidMount() {
//         this.props.bloodReq11("dgfsdfsdfds")
//         // Hello.bldReq() 
//         // BloodAction.bloodReq()

//         // console.log(this.props)
//         //this.props.userData();
//         //This is called for Loading Initial State
//         // this.props.bloodRequest();
//     }
//  handleBlgroup(e, key) {
//     e.preventDefault();
//     this.setState({
//       value: key + 1,
//        requireBlood: e.target.childNodes[0].nodeValue

//     })}
//     handleRequiredTypeChange = (event, index, value) => {
//         this.setState({ bloodGroup: value }); 
//         console.log('djhgjgjagajsg',value)
//     };
//     // checkBlood(currentBlood) {
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

    /*render() {
       const that = this;
        const application = this.props && this.props.application && this.props.application.allBlood ? this.props.application.allBlood : {};
       console.log("hme data   ye mila " ,application)
>>>>>>> Stashed changes
        return (
            <div className="App">
              
               <Link to ="/home"> <RaisedButton label="Back" secondary={true} style={{ float:"right",marginRight:"20px", backgroundColr: "pink" }}/></Link>
                  <br/><br/><br/>
                <DropDownMenu value={this.state.value} onChange={this.handleBgroup.bind(this)} ref="blood" style={{ width: 200 }} required="required">
                    <MenuItem  style={{color:"red"}} value={1} primaryText="Select Blood Group" disabled />
                    <MenuItem value={2} primaryText="A+" />
                    <MenuItem value={3} primaryText="B+" />
                    <MenuItem value={4} primaryText="AB+" />
                    <MenuItem value={5} primaryText="O+" />
                    <MenuItem value={6} primaryText="O-" />
                    <MenuItem value={7} primaryText="AB-" />
                    <MenuItem value={8} primaryText="B-" />
                    <MenuItem value={9} primaryText="A-" />
                </DropDownMenu>
                <br />

    
                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHeaderColumn  >ID</TableHeaderColumn>
                            <TableHeaderColumn  >Name</TableHeaderColumn>
                            <TableHeaderColumn  >Country</TableHeaderColumn>
                            <TableHeaderColumn  style={{color:"red"}}> Area</TableHeaderColumn>
                            <TableHeaderColumn  style={{color:"red"}}>city</TableHeaderColumn>
                            <TableHeaderColumn  style={{color:"red"}}>Bloo Group</TableHeaderColumn>
                            <TableHeaderColumn style={{color:"red"}} >Mobile num</TableHeaderColumn>
                            <TableHeaderColumn style={{color:"red"}}>weight</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {application.map((val, i) => {
                            console.log(val)
                            return (
                                <TableRow key={i}>
                                    <TableRowColumn  key={i}>{i + 1}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.name}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.gender}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.address}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.city}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.blood}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.mobilenum}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.weight}</TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>

            </div>
        );
    }
}


export default RequireBlood;



//     constructor(props){
//         super(props);
//          this.bloodgroups = [
//             "A+",
//             "B+",
//             "AB+",
//             "O+",
//             "A-",
//             "B-",
//             "AB-",
//             "O-"
//         ]
//           //this.allDonors = [];
//         this.state = {

//            application:'',
// value: 1,
//             requireBlood :'A+'
//         }

//         this.handleBgroup = this.handleBgroup.bind(this);
//          // this.handleRequiredTypeChange = this.handleRequiredTypeChange.bind(this);
//         // this.handleRequiredRequest = this.handleRequiredRequest.bind(this);
//        // this.checkBlood = this.checkBlood.bind(this);
//     }

//  componentDidMount() {

//        // this.props.userData();
//         //This is called for Loading Initial State
//        // this.props.BLOODREQUEST();
//     }


// handleBgroup(e, key,value) {
//         e.preventDefault();
//         this.setState({
//             value: key + 1,
//             bloodGroup:value
//         })
//       var bloodg= e.target.childNodes[0].nodeValue;
//       console.log(bloodg)
//        this.props.bloodRequest(bloodg)

//         console.log(this.state.bloodg)
//         // this.props.SignUp(this.state.blood)
//     }

 //handleRequiredTypeChange =(event, index, value)=> { 
   //  this.setState({ bloodGroup: value }); console.log(value) };
// checkBlood(currentBlood){
// if(this.state.bloodGroup=='AB+'){
//     if(currentBlood=='O-'|| currentBlood=='O+'|| currentBlood=='AB+'){
//         return true;
// }}

// if(this.state.bloodGroup=='A+'){
//     if(currentBlood=='O-'|| currentBlood=='O+'|| currentBlood=='A+'|| currentBlood=='A-'){
//         return true;
//     }
// }
// if(this.state.bloodGroup=='A-'){
//     if(currentBlood=='O-'||  currentBlood=='A-'){
//         return true;
//     }
// }
// if(this.state.bloodGroup=='B+'){
//     if(currentBlood=='O-'|| currentBlood=='O+'|| currentBlood=='B+'|| currentBlood=='B-'){
//         return true;
//     }
// }

// if(this.state.bloodGroup=='B-'){
//     if(currentBlood=='O-'||  currentBlood=='B-'){
//         return true;
//     }
// }

// if(this.state.bloodGroup=='O+'){
//     if(currentBlood=='O-'|| currentBlood=='O+'){
//         return true;
//     }
// }
// if(this.state.bloodGroup=='O-'){
//     if(currentBlood=='O-'){
//         return true;
//     }
// }


// }//
/*
render(){
     const data = this;
   //  const application = this.props&&this.props.application&&this.props.application.allBlood ?this.props.application.allBlood:[];
         return(
   
        <div>
<center>

 <SelectField
          ref='bloodGroup'
          name='bloodGroup'
          required={true}
          hintText="Blood Group"
          floatingLabelText="Select Field"
          value={this.state.bloodGroup}
          onChange={this.handleBgroup}
        >
        
{ 
    this.bloodgroups.map(bldgrop=>{
    return<MenuItem key={bldgrop} value={bldgrop} primaryText={bldgrop} />
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

{this.props.application.map((val,index)=>{
    
        return(
 

      <TableRow>
        <TableRowColumn>{index+1}</TableRowColumn>
        <TableRowColumn>{val.name}</TableRowColumn>
        <TableRowColumn>{val.gender}</TableRowColumn>
        <TableRowColumn>{val.email}</TableRowColumn>
        <TableRowColumn>{val.age}</TableRowColumn>
        <TableRowColumn>{val.bloodGroup}</TableRowColumn>
        <TableRowColumn>{val.phone_no}</TableRowColumn>
        <TableRowColumn>{val.address}</TableRowColumn>
       
      </TableRow>
        )
   }
)
}

   </TableBody>
</Table>
</div>


        </div>
    )
}

}//main
*/

<<<<<<< Updated upstream

export default RequireBlood;*/
=======
>>>>>>> Stashed changes
