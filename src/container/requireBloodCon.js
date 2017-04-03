import RequireBlood from '../component/requireBlood'
import {initialState} from '../store/action/initialState'
import {bloodRequest} from '../store/action/requireBloodAct'
import BloodAction from '../store/action/requireBloodAct'

import {connect} from 'react-redux'
import {userRequest} from '../store/action/userData'
function mapStateToProps(state){

return{
    application : state.application
}
}


function mapDispatchtoProps(dispatch){
    return{
         INITIALSTATE:()=>dispatch(initialState()),
        bloodRequestsss :(userData)=>dispatch(bloodRequest(userData)),
        bloodReq11 :(userData)=>dispatch(BloodAction.bloodReq(userData)),
        
        userData : () => dispatch(userRequest())
    }
}

const RequireBloodCon = connect (mapStateToProps,mapDispatchtoProps)(RequireBlood)
export default RequireBloodCon;