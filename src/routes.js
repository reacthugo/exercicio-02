import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Users from './pages/users';
import UsersDetail from './pages/users_detail';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/users' component={Users} />
            <Route path='/users/:name' component={UsersDetail}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;