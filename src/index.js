import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import {createHistory} from 'history';
import createStore from './stores/appStores';
import {syncHistoryWithStore} from 'react-router-redux';

/**
 * 组件引入
 */

import Login from 'components/Login';
import Main from 'components/Main';
import Test from 'components/test/index';


const store = createStore();
console.log(store.getState());
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store = {store}>
        <Router history = {history}>        
            <Route path = "/" component = {Main}>
                 <IndexRoute component = {Login}/>
                 <Route path = "/test" component = {Test}></Route>
            </Route>       
        </Router>
    </Provider>,document.getElementById('app'));

