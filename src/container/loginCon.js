//import Actions from '../store/action/actionTypes'
//import * as db from '../firebase/database'
import Login from '../component/login'
import { initialState } from '../store/action/initialState'
import { LoginRequest } from '../store/action/loginAct'
import { connect } from 'react-redux'
function mapStateToProps(state) {
    return {
        application: state.application
    }
}

function mapDispatchToProps(dispatch) {
    return {
        INITIALSTATE: () => dispatch(initialState()),
        loginRequest: (logindata) => dispatch(LoginRequest(logindata))
    }
}

const LogContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LogContainer;