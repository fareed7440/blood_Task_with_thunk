import Actions from '../action/actionTypes'

const INITIAL_STATE = {};

export function applicationReducer(state = INITIAL_STATE,action){
    switch(action.type){
        case Actions.INITIALSTATE:{
            return state
        }

        case Actions.SIGNUP_REQUEST_SUCCESS:{
            var sign = Object.assign({},state,{user:action.data})
            state = sign
            return state;
            
        }
    }
}

