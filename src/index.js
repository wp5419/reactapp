import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import {Provider} from 'react-redux';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import {createHistory} from 'history';
import Login from 'components/Login';
import createStore from './stores/appStores';
import {syncHistoryWithStore} from 'react-router-redux';

const store = createStore();
console.log(store.getState());
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store = {store}>
        <Router history = {history}>
            <Route path = "/" component = {Login}>
           
            </Route>
        </Router>
    </Provider>,document.getElementById('app'));





//import IntlProvider from '.';
// Render the main component into the dom
/**ReactDOM.render(

      <Router history = {createHistory()}>
            <Route path = '/' component = {app}>
                <IndexRoute component = {Login}/>
            </Route>
        </Router>, document.getElementById('app'));*/

