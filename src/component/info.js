import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer';

const AppStyle = {
    textAlign: 'center',

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
        width: 140,
    },
};

class SignUp extends Component {
    BloodGroups;
    constructor(props) {
        super(props);
        // this.state = {open: false};
        this.BloodGroups = ["A", 'AB', 'B', 'O']
        this.state = {
            open: false,
            name: '',

            age: '',
            address: '',
            phone_no: '',
            gender: 1,
            bloodGroup: 'A',
            email: '',
            // password:''
        }

        this.handelInput = this.handelInput.bind(this)
        this.inputHandling = this.inputHandling.bind(this)
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    handelBloodValue = (e, index, value) => {
        this.setState({ bloodGroup: value })
    }
    handelGenderValue = (e, index, value) => {
        this.setState({ gender: value })
    }

    inputHandling(e) {
        e.preventDefault()
        var obj = {
            name: this.refs.name.getValue(),
            age: this.refs.age.getValue(),
            address: this.refs.address.getValue(),
            phone_no: this.refs.phone_no.getValue(),
            gender: this.state.gender === 1 ? 'male' : 'female',
            email: this.refs.email.getValue(),

            bloodGroup: this.state.bloodGroup,
            A: ["A", "O"].indexOf(this.state.bloodGroup) !== -1 ? true : null,
            AB: ["O", "A", "B", "AB"].indexOf(this.state.bloodGroup) !== -1 ? true : null,
            B: ["B", "O"].indexOf(this.state.bloodGroup) !== -1 ? true : null,
            O: ["O"].indexOf(this.state.bloodGroup) !== -1 ? true : null,
        }


        //var obj = {name:name,gender:gender==1 ? 'male':'female',bloodGroup:bloodGroup,email:email,address:address,age:age,phone_no:phone_no};
        this.props.signupRequest(obj)

    }

    handelInput(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name;


        this.setState({
            [name]: value,
            // open : !this.state.open
        })

    }



    render() {
        return (
            <div>
                <AppBar
                    title="Personal Information"
                    style={AppStyle}
                    onTouchTap={this.handleToggle}
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
                                required={true}
                                onChange={this.handelInput}
                                floatingLabelText="Type Here"
                            /><br /><br />
                            <TextField
                                hintText="Age"
                                ref='age'
                                name='age'
                                type='number'
                                required={true}
                                onChange={this.handelInput}
                                floatingLabelText="Type Here"
                            /><br /><br />
                            <TextField
                                hintText="Address"
                                ref='address'
                                name='address'
                                required={true}
                                onChange={this.handelInput}
                                floatingLabelText="Type Here"
                            /><br /><br />

                            <TextField
                                hintText="Cell No"
                                ref='phone_no'
                                name='phone_no'
                                type='number'
                                onChange={this.handelInput}
                                floatingLabelText="Type Here"
                            /><br /><br />

                            <SelectField
                                ref='gender'
                                name='gender'
                                hintText="Gender"
                                required={true}
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
                                required={true}
                                hintText="Blood Group"
                                floatingLabelText="Select Field"
                                value={this.state.bloodGroup}
                                onChange={this.handelBloodValue}
                            >


                                {
                                    this.BloodGroups.map(bldgrop => {
                                        return <MenuItem key={bldgrop} value={bldgrop} primaryText={bldgrop} />
                                    })



                                }

                            </SelectField>

                            <br /><br />
                            <TextField
                                hintText="Email"
                                ref='email'
                                name='email'
                                type='email'
                                required={true}
                                onChange={this.handelInput}
                                floatingLabelText="Type Here"
                            /><br /><br />


                            <RaisedButton label="Submit" type='submit' style={styles} />


                        </form>
                    </Paper>
                </center>


                <Drawer width={300} openSecondary={false} open={this.state.open} >
                    <AppBar title="Dashboard" />

                    <img src="https://upload.wikimedia.org/wikipedia/en/0/0a/Mother_Blood_Bank_Logo.png" height='200' width='260' alt="invent" />
                    <br />
                    <br />         <Link to='home'> <RaisedButton
                        fullWidth
                        style={styles}
                        onTouchTap={this.handleTouchTap}

                        label="Home"
                        primary={false}
                    /></ Link><br /><br /><br />


                    <Link to='requireBloodCon'> <RaisedButton
                        fullWidth
                        style={styles}
                        onTouchTap={this.handleTouchTap}

                        label="View Donater"
                        primary={false}
                    /></ Link><br /><br /><br />

                </Drawer>




            </div>




        )
    }

}

export default SignUp;