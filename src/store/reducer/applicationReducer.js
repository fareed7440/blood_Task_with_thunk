import Actions from '../action/actionTypes'

const InitialState =  {};

function applicationReducer(state = InitialState, action){
    switch(action.type){
        case Actions.INITIALSTATE:{
            return state;
        }

        case Actions.SIGNUP_REQUEST_SUCCESS:{
            var sign = Object.assign({},state,{user:action.data})
            state = sign
            return state;
            
        }
        default:
        return state
    }
}

export default applicationReducer;