/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Order from './order'
import NoPro from './applyNoPro'
import Pro from './applyPro'
import Budget from '../components/budget/index'
import {getOrderInfo,getApplayProInfo,getApplayNoProInfo} from '../action/order'
import '../assets/css/normalize.css'
import '../assets/css/restyle.css'
import '../assets/iconfont/iconfont.css'


const mapStateToProps = state => ({
    order:state.order
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getOrderInfo,
        getApplayProInfo,
        getApplayNoProInfo
    }, dispatch)
);

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Order} />
                    <Route path="/order" component={Order} />
                    <Route path="/applynopro" component={NoPro} />
                    <Route path="/applyPro" component={Pro} />
                    <Route path="/budget" component={Budget} />
                </Switch>
            </Router>

        )
    }
}
//export default Container
export default connect(mapStateToProps, mapDispatchToProps)(Container)