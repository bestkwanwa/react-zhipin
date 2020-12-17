import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './containers/login/login';
import Register from './containers/register/register';
import Main from './containers/main/main';
import store from '../src/redux/store';
ReactDOM.render((
    <Provider store={store}>

        <HashRouter>
            <Switch>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
                <Route component={Main}></Route>  {/* 默认组件 */}
            </Switch>
        </HashRouter>

    </Provider>)
    , document.getElementById('root'))