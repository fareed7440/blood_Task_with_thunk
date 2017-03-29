import React,{Component} from 'react'
import SignUp from '../component/signup'
import {connect} from 'react-redux'
import {initialState} from '../store/action/initialState'
import * as db from '../firebase/database'

  function  mapStateToProps(state){
return{
    application : state.application
}

    }


function mapDispatchToProps(dispatch){
    return{
        INITIALSTATE:()=>dispatch(initialState()),
        signupRequest:(userData)=>dispatch(SignupRequest(userData))
    }
}




const Signup = connect(mapStateToProps,mapDispatchToProps)(Signup)
export default Signup;