import applicationReducer from './applicationReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    //state : rootReducer(initialState()),

    application: applicationReducer
});


export default rootReducer;




