import Actions from '../action/actionTypes'
const initialState = {}
function LoginReducer(state = initialState,action){
    switch(action.type){
          case Actions.LOGINREQUESTSUCCESS: {
            var login = Object.assign({}, state, { user: action.data })
            state = login
            return state;
        }
            default:
            return state;
    }
}
//export default LoginReducer;