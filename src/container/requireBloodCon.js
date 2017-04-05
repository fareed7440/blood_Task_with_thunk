import RequireBlood from '../component/requireBlood'
import {initialState} from '../store/action/initialState'
//import {bloodRequest} from '../store/action/requireBloodAct'
import {bloodRequest} from '../store/action/requireBloodAct'
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
<<<<<<< Updated upstream
        bloodRequest :(userData)=>dispatch(bloodRequest(userData)),
=======
        bloodRequests :(userData)=>dispatch(bloodRequest(userData)),
     //   bloodReq11 :(userData)=>dispatch(bloodReq(userData)),
        
>>>>>>> Stashed changes
        userData : () => dispatch(userRequest())
    }
}

const RequireBloodCon = connect (mapStateToProps,mapDispatchtoProps)(RequireBlood)
export default RequireBloodCon;