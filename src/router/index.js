/**
 * Created by liangshuang on 18/6/5.
 */
import React from "react";
import { connect } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import Order from '../containers/order'
import Budget from '../containers/budget'
import Apply from '../containers/apply'
import env from '../config/env'

const history = createHistory()
const Root = () => (
    <Router basename={env.ROOT_PATH}>
        <Switch>
            <Route path="/order" component={Order} />
            <Route path="/apply" component={Apply} />
            <Route path="/budget" component={Budget} />
        </Switch>
    </Router>
);

export default connect(null,null)(Root);
