/**
 * Created by liangshuang on 18/6/5.
 */
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import Order from '../containers/index'
import Budget from '../containers/budget'

const history = createHistory()
const Root = () => (
    <Router history={history}>
        <Switch>
            <Route path="/order" component={Order} />
            <Route path="/budget" component={Budget} />
        </Switch>
    </Router>
);

export default Root;
