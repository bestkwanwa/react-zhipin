import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/login/login';
import Register from './containers/register/register';
import Main from './containers/main/main';

ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route path='/register' component={Register}></Route>
            <Route path='/login' component={Login}></Route>
            <Route component={Main}></Route>  {/* 默认组件 */} 
        </Switch>
    </HashRouter>)
    , document.getElementById('root'))