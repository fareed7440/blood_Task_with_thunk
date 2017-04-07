import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar';

const AppStyle = {
    textAlign: 'center',

}
const styles = {
    customWidth: {
        width: 150,
    },
};

const style = {
    height: 500,
    width: 400,
    margin: 60,
    textAlign: 'center',
    display: 'inline-block',
}

class Signupp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',


        }//state

        this.handelInput = this.handelInput.bind(this);
        this.inputHandling = this.inputHandling.bind(this);

    }//constructor

    inputHandling = (e) => {
        e.preventDefault();
        var name = this.refs.name.getValue();
        var email = this.refs.email.getValue();
        var password = this.refs.password.getValue();

        var userObj = {
            name: name, email: email, password: password
        };

        this.props.signuppRequest(userObj);



    }
    handelInput = (e) => {
        const target = e.target;
        const value = target.type === 'checked' ? target.checked : target.value;
        const name = target.name;


        this.setState({
            [name]: value
        })



    }




    render() {

        return (
            <div>


                <AppBar
                    title="Sign Up"
                    style={AppStyle}

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
                                hintText="Email"
                                ref='email'
                                name='email'
                                type='email'
                                required={true}
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
                            <RaisedButton label="Signup" type='submit' style={styles} />


                        </form>
                    </Paper>
                </center>
            </div>


        )

    }

}//main

export default Signupp;