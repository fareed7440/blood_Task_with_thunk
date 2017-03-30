    import React,{Component} from 'react'
    import Paper from 'material-ui/Paper';
    import TextField from 'material-ui/TextField';
    import RaisedButton from 'material-ui/RaisedButton'
    import SelectField from 'material-ui/SelectField';
    import MenuItem from 'material-ui/MenuItem';
    import AppBar from 'material-ui/AppBar';

const AppStyle = {
    textAlign:'center',
   // backgroundColor:'transparent',
   // textColor:'#212121'
}

    const style = {
    height: 700,
    width: 400,
    margin: 60,
    textAlign: 'center',
    display: 'inline-block',
};
const styles = {
  customWidth: {
    width: 150,
  },
};

    class SignUp extends Component{
        BloodGroups;
    constructor(props){
        super(props)
        this.BloodGroups=["A+","A-",'B+','B-','AB','O+',"O-"]
        this.state={
            name:'',
            age:'',
            address:'',
            phone_no:'',
            gender:1,
            bloodGroup:'A+',
            email:'',
            password:''}

        this.handelInput=this.handelInput.bind(this)
        this.inputHandling=this.inputHandling.bind(this)
    }
    
    handelBloodValue=(e,index,value)=>{
        this.setState({bloodGroup:value})
    }
handelGenderValue=(e,index,value)=>{
    this.setState({gender:value})
}

    inputHandling(e){
e.preventDefault()
              var name=this.refs.name.getValue();
               var age=this.refs.age.getValue();
                var address=this.refs.address.getValue();
                 var phone_no=this.refs.phone_no.getValue();
              var gender=this.state.gender;
              var bloodGroup=this.state.bloodGroup;
             var  email=this.refs.email.getValue();
               var password=this.refs.password.getValue();

var obj = {name:name,gender:gender,bloodGroup:bloodGroup,email:email,password:password,address:address,age:age,phone_no:phone_no};
this.props.signupRequest(obj)
                
    }

    handelInput(e){
const target=e.target;
const value = target.type ==='checkbox'? target.checked:target.value
const name = target.name;


this.setState({
    [name]:value
})

    }



    render(){
        return(
    <div>
 <AppBar
    title="Personal Information"
    style={AppStyle}
   // style={{color:'#212121'}}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />

        <center>
    <Paper style={style} zDepth={4} >
    <form onSubmit={this.inputHandling}>

    <TextField
        hintText="Name"
        ref='name'
        name='name'
        onChange={this.handelInput}
        floatingLabelText="Type Here"
        /><br /><br />
         <TextField
        hintText="Age"
        ref='age'
        name='age'
        onChange={this.handelInput}
        floatingLabelText="Type Here"
        /><br /><br />
 <TextField
        hintText="Address"
        ref='address'
        name='address'
        onChange={this.handelInput}
        floatingLabelText="Type Here"
        /><br /><br />

         <TextField
        hintText="Cell No"
        ref='phone_no'
        name='phone_no'
        onChange={this.handelInput}
        floatingLabelText="Type Here"
        /><br /><br />

        <SelectField
         ref='gender'
         name='gender'
         hintText="Gender"
          floatingLabelText="Select Field"
          value={this.state.gender}
          onChange={this.handelGenderValue}
        >
          <MenuItem value={1} primaryText="male" />
          <MenuItem value={2} primaryText="female" />
        </SelectField>
        <br /><br />
         <SelectField
          ref='bloodGroup'
          name='bloodGroup'
          hintText="Blood Group"
          floatingLabelText="Select Field"
          value={this.state.bloodGroup}
          onChange={this. handelBloodValue}
        >
          {/*<MenuItem value={1} primaryText="A+" />
          <MenuItem value={2} primaryText="A-" />
          <MenuItem value={3} primaryText="B+" />
          <MenuItem value={4} primaryText="B-" />
          <MenuItem value={5} primaryText="AB" />
          <MenuItem value={6} primaryText="O+" />
          <MenuItem value={7} primaryText="O-" />*/}

{ 
    this.BloodGroups.map(bldgrop=>{
    return<MenuItem key={bldgrop} value={bldgrop} primaryText={bldgrop} />
})



}

        </SelectField>
        
        <br /><br />
        <TextField
        hintText="Email"
        ref='email'
        name='email'
          onChange={this.handelInput}
        floatingLabelText="Type Here"
        /><br /><br />
        <TextField
        hintText="Password"
        ref='password'
        type='password'
        name='password'
          onChange={this.handelInput}
        floatingLabelText="Type Here"
        /><br /><br />


    <RaisedButton label="Signup" type='submit' styles={style} />


    </form>
    </Paper>
      </center>
    </div>




        )
    }

}//main

export default SignUp;