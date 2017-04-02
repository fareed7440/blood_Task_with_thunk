import React,{Component} from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
 import SelectField from 'material-ui/SelectField';
 import MenuItem from 'material-ui/MenuItem';
class RequireBlood extends Component{
    constructor(props){
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

           application:'',

            requireBlood :'A+'
        }
          this.handleRequiredTypeChange = this.handleRequiredTypeChange.bind(this);
        // this.handleRequiredRequest = this.handleRequiredRequest.bind(this);
        this.checkBlood = this.checkBlood.bind(this);
    }

 componentDidMount() {
        this.props.userData();
        //This is called for Loading Initial State
        this.props.BLOODREQUEST();
    }

 handleRequiredTypeChange =(event, index, value)=> { 
     this.setState({ bloodGroup: value }); console.log(value) };
checkBlood(currentBlood){
if(this.state.bloodGroup=='AB+'){
    if(currentBlood=='O-'|| currentBlood=='O+'|| currentBlood=='AB+'){
        return true;
}}

if(this.state.bloodGroup=='A+'){
    if(currentBlood=='O-'|| currentBlood=='O+'|| currentBlood=='A+'|| currentBlood=='A-'){
        return true;
    }
}
if(this.state.bloodGroup=='A-'){
    if(currentBlood=='O-'||  currentBlood=='A-'){
        return true;
    }
}
if(this.state.bloodGroup=='B+'){
    if(currentBlood=='O-'|| currentBlood=='O+'|| currentBlood=='B+'|| currentBlood=='B-'){
        return true;
    }
}

if(this.state.bloodGroup=='B-'){
    if(currentBlood=='O-'||  currentBlood=='B-'){
        return true;
    }
}

if(this.state.bloodGroup=='O+'){
    if(currentBlood=='O-'|| currentBlood=='O+'){
        return true;
    }
}
if(this.state.bloodGroup=='O-'){
    if(currentBlood=='O-'){
        return true;
    }
}


}//

render(){
     const data = this;
     const application = this.props&&this.props.application&&this.props.application.allBlood ?this.props.application.allBlood:[];
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
          onChange={this.handleRequiredTypeChange}
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

{application.map((donor,index)=>{
    if(data.checkBlood(donor. bloodGroup)){
        return(
 

      <TableRow>
        <TableRowColumn>{index+1}</TableRowColumn>
        <TableRowColumn>{donor.name}</TableRowColumn>
        <TableRowColumn>{donor.gender}</TableRowColumn>
        <TableRowColumn>{donor.email}</TableRowColumn>
        <TableRowColumn>{donor.age}</TableRowColumn>
        <TableRowColumn>{donor.bloodGroup}</TableRowColumn>
        <TableRowColumn>{donor.phone_no}</TableRowColumn>
        <TableRowColumn>{donor.address}</TableRowColumn>
       
      </TableRow>
        )
   }
})
}

   </TableBody>
</Table>
</div>


        </div>
    )
}

}//main


export default RequireBlood;