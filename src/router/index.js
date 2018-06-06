/**
 * Created by liangshuang on 18/6/5.
 */
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import Order from '../containers/index'
import Budget from '../containers/budget'
import env from '../config/env'

const history = createHistory()
const Root = () => (
    <Router basename={env.ROOT_PATH}>
        <Switch>
            <Route path="/order" component={Order} />
            <Route path="/budget" component={Budget} />
        </Switch>
    </Router>
);

export default Root;
