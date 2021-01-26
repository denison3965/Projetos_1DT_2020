import React from 'react';
import Login from './components/login/login'
import Register from './Layouts/register/register'
import Home from './Layouts/Home'
import Form from './Layouts/Forms/index'


import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Researchs from './Layouts/Researchs';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/pesquisas" component={Researchs}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/forms/:pesquisa" render={(props) => <Form {...props}/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;