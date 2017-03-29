    import React,{Component} from 'react'
    import Paper from 'material-ui/Paper';
    import TextField from 'material-ui/TextField';
    import RaisedButton from 'material-ui/RaisedButton'
    import SelectField from 'material-ui/SelectField';
    import MenuItem from 'material-ui/MenuItem';


const styles = {
  customWidth: {
    width: 150,
  },
};
    const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    };

    class SignUp extends Component{
        BloodGroup;
    constructor(props){
        super(props)
        this.BloodGroup=["A+","A-",'B+','B-','AB','O+',"O-"];
        this.state={
            name:'',
            gender:'',
            bloodGroup:'',
            email:'',
            password:''}

        this.handelInput=this.handelInput.bind(this)
        this.inputHandling=this.inputHandling.bind(this)
    }
    
    handelBloodValue=(i,v)=>{
        this.setState({bloodGroup:value})
    }
handelGenderValue=(i,v)=>{
    this.setState({gender:vale})
}

    inputHandling(e){
e.preventDefault()
              var  name=this.refs.name.getValue();
              var  gender=this.state.gender;
              var   bloodGroup=this.state.bloodGroup;
             var   email=this.refs.email.getValue();
               var  password=this.refs.password.getValue();

var obj = {name:name,gender:gender,bloodGroup:bloodGroup,email:email,password:password};
//this.props.......(obj)
                
    }

    handelInput(e){
const target=e.target;
const value = target.type =='checkbox'? target.checked:target.value
const name = target.name;


this.setState({
    [name]:value
})

    }



    render(){
        return(
    <div>
    <Paper style={style} zDepth={4} >
    <form onSubmit={this.inputHandling}>

    <TextField
        hintText="Name"
        ref='name'
        name='name'
        onChange={this.handelInput}
        floatingLabelText="Floating Label Text"
        /><br />
        <SelectField
         ref='gender'
         name='gender'
         hintText="Gender"
          floatingLabelText="Frequency"
          value={this.state.gender}
          onChange={this.handelGenderValue}
        >
          <MenuItem value={1} primaryText="male" />
          <MenuItem value={2} primaryText="female" />
        </SelectField>
        <br />
         <SelectField
          ref='bloodGroup'
          name='bloodGroup'
          hintText="Blood Group"
          floatingLabelText="Frequency"
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

{this.BloodGroup.map(bldgrop=>{
    return<ManuItem key={bldgrop} value={bldgrop}/>
})



}

        </SelectField>
        
        <br />
        <TextField
        hintText="Email"
        ref='email'
        name='email'
          onChange={this.handelInput}
        floatingLabelText="Floating Label Text"
        /><br />
        <TextField
        hintText="Password"
        ref='password'
        type='password'
        name='password'
          onChange={this.handelInput}
        floatingLabelText="Floating Label Text"
        /><br />


    <RaisedButton label="Signup" type='submit' style={style} />


    </form>
    </Paper>
    </div>




        )
    }

}//main

export default SignUp;