import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import loginData from './loginReducer';

const appReducerConbine = combineReducers({
    loginData,
    routing: routerReducer,
});

export default appReducerConbine;