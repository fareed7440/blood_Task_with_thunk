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
    height: 400,
    width: 400,
    margin: 120,
    textAlign: 'center',
    display: 'inline-block',
};
const styles = {
  customWidth: {
    width: 150,
  },
};

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        }
        this.inputHandling = this.inputHandling.bind(this);
        this.handelInput = this.handelInput.bind(this);
    }
inputHandling=(e)=>{
    e.preventDefault();
    var email = this.refs.email.getValue();
    var password = this.refs.password.getValue();
    var userObj = {
        email:email,
        password:password
    };
    this.props.loginRequest(userObj);
}
handelInput=(e)=>{
const target = e.target;
const value = target.type === 'checkbox' ? target.checked : target.value
const name = target.name;


this.setState({
    [name]:value
}) 
}

render(){
    return(
<div>
    <AppBar
    title="Login "
    style={AppStyle}
   // style={{color:'#212121'}}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  <center>
    <Paper style={style} zDepth={4} >
    <form onSubmit={this.inputHandling}>
<br/><br/>
 <TextField
        hintText="Email"
        ref='email'
        name='email'
        type='email'
         required={true}
          onChange={this.handelInput}
        floatingLabelText="Type Here"
        /><br /><br /><br/>
        <TextField
        hintText="Password"
        ref='password'
        type='password'
        name='password'

          onChange={this.handelInput}
        floatingLabelText="Type Here"
        /><br /><br /><br/>
 <RaisedButton label="Login" type='submit' style={styles} />


    </form>
    </Paper>
      </center>
   
</div>



    )
}

}//main
export default Login;