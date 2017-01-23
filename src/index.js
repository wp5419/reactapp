import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import {Provider} from 'react-redux';
import {Router, IndexRoute, Route} from 'react-router';
import {createHistory} from 'history'
import Login from 'components/Login';
//import IntlProvider from '.';
// Render the main component into the dom
/**ReactDOM.render(
    <Provider>
        <Router history = {history}>
            <Route path = '/' component = {app}>
                <IndexRoute component = {Login}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('app'));*/

ReactDOM.render(
    <Router history = {createHistory()}>
        <Route path = "/" component = {Login}>
         
        </Route>
    </Router>
    ,document.getElementById('app'));