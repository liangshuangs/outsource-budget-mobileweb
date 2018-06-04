/**
 * Created by liangshuang on 18/6/1.
 */

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Budget from '../components/budget/index'
import {getApplayProInfo,approve,getUrl,getBudgetServerTime,getBudgetInfo} from '../action/order'

const mapStateToProps = state => ({
    order:state.order
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getApplayProInfo,
        approve,
        getUrl,
        getBudgetServerTime,
        getBudgetInfo
    }, dispatch)
);
class BudgetCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orderInfo:[],
            url:[]
        }
    }

    componentWillMount() {
        /*this.props.getBudgetServerTime().then(res => {
            console.log(res)
        })*/
        let parmas ="key=928A991C711E54774CB28522BF19F568&projectId=168066"
        this.props.getBudgetInfo(parmas).then(res=>{
            console.log('res',res)
        })
    }
    render() {
        return (
            <Budget data={this.state.orderInfo} url={this.state.url} approve={this.props.approve}/>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BudgetCom)