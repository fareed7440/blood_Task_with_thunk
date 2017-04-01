import RequireBlood from '../component/requireBlood'
import {initialState} from '../store/action/initialState'
import {bloodRequest} from '../store/action/requireBloodAct'
import {connect} from 'react-redux'

function mapStateToProps(state){

return{
    application : state.application
}
}


function mapDispatchtoProps(dispatch){
    return{
         INITIALSTATE:()=>dispatch(initialState()),
        BLOODREQUEST :(userData)=>dispatch(bloodRequest(userData))
    }
}

const RequireBloodCon = connect (mapStateToProps,mapDispatchtoProps)(RequireBlood)
export default RequireBloodCon;