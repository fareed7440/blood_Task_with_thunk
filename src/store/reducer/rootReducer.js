import {applicationReducer} from './applicationReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers ({
    application:applicationReducer
});


export default rootReducer;