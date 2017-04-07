import React, { Component } from 'react'
import SignUp from '../component/info'
import { connect } from 'react-redux'
import { signupRequest } from '../store/action/infoAct'
import * as db from '../firebase/database'

function mapStateToProps(state) {
    return {
        application: state.application
    }

}


function mapDispatchToProps(dispatch) {
    return {

        signupRequest: (userData) => dispatch(signupRequest(userData))
    }
}




const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp)
export default SignupContainer;