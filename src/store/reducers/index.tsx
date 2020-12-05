import {combineReducers} from 'redux'
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import counter from './counter'
import account from './account'

const mainReducer = (history: History<any>) =>  combineReducers(
    {
        router : connectRouter(history),
        counter,
        account
    }
);

export default mainReducer
