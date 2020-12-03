import {combineReducers} from 'redux'
import counter from './counter'
import account from './account'

const mainReducer =  combineReducers(
    {
        counter,
        account
    }
);

export default mainReducer
