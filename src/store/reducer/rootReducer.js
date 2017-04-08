import applicationReducer from './applicationReducer'
import { combineReducers } from 'redux'
import BloodReqReducer from './reqReducer'
import LoginReducer from './loginReducer'
const rootReducer = combineReducers({
    //state : rootReducer(initialState()),

    application: applicationReducer,
    application : BloodReqReducer,
    application: LoginReducer

});


export default rootReducer;




