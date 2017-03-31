import Actions from '../store/action/actionTypes'
import Signupp from '../component/signupp'
import {connect} from 'react-redux'
import {initialState} from '../store/action/initialState'
import {signuppRequest} from '../store/action/signuppAct'

 function mapStateToProps(state){
return{
applicatation : state.applicatation
}}


function mapDispatchToProps(dispatch){
return{
    INITIALSTATE : ()=>dispatch(initialState()),
  signuppRequest : (userdata)=> dispatch(signuppRequest(userdata))
};
}

const  SignuppContainer = connect(mapStateToProps,mapDispatchToProps)(Signupp)
export default SignuppContainer;