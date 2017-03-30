import React,{Component} from 'react'
import SignUp from '../component/signup'
import {connect} from 'react-redux'
import {initialState} from '../store/action/initialState'
import {signupRequest} from '../store/action/signupAct'
import * as db from '../firebase/database'

  function  mapStateToProps(state){
return{
    application : state.application
}

    }


function mapDispatchToProps(dispatch){
    return{
        INITIALSTATE:()=>dispatch(initialState()),
        signupRequest:(userData)=>dispatch(signupRequest(userData))
    }
}




const SignupContainer = connect(mapStateToProps,mapDispatchToProps)(SignUp)
export default SignupContainer;