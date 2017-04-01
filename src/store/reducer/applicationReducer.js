import Actions from '../action/actionTypes'

const InitialState =  {};

function applicationReducer(state = InitialState, action){
    switch(action.type){
        case Actions.INITIALSTATE:{
            return state;
        }

        case Actions.SIGNUPREQUESTSUCCESS:{
            var sign = Object.assign({},state,{user:action.data})
            state = sign
            return state; 
        }

case Actions.SIGNUPPREQUESTSUCCESS:{
    var Signn = Object.assign({},state,{user:action.data})
    state = Signn
    return state;
}

case Actions.LOGINREQUESTSUCCESS:{
    var login = Object.assign({},state,{user:action.data})
    state= login
    return state;
}

        default:
        return state
    }
}

export default applicationReducer;