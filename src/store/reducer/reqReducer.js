import Actions from '../action/actionTypes'
const InitialState = {};
function BloodReqReducer(state = InitialState,action){
        switch(action.type){
             case Actions.BLOODREQUESTSUCCESS: {
            var blood = Object.assign({}, state, { allBlood: action.data })
            state = blood
            return state;
        }
default:
return state

        }
} export default BloodReqReducer;