import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'; 
import appReducer from '../reducers/appReducer';

let createStoreWithMiddleware = null;

if(process.env.NODE_ENV === 'production') {
    createStoreWithMiddleware = compose(applyMiddleware(
        thunkMiddleware
    ))(createStore);
} else {
    createStoreWithMiddleware = compose(applyMiddleware(
        thunkMiddleware,
        createLogger()
    ), window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
}

export default (initState) => {
    return createStoreWithMiddleware(appReducer, initState);
}


/**
 * redux 中提供的方法
 * {applyMiddleware,bindActionCreator,conbineReducers,compose,createStore}
 * 
 * reudx-thunk 
 * 
 * react-redux 中提供的方法
 * connect，provider等待
 * 
 * react-router 中提供的方法
 * {Router,IndexRoute, Route, browserHistory}
 * 
 * react-router-redux 中提供的方法
 * {syncHistoryWithStore}
 */