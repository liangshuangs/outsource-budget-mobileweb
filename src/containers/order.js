/**
 * Created by liangshuang on 18/5/29.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import OrderCom from '../components/order/index'
import {getOrderInfo} from '../action/order'

const mapStateToProps = state => ({
    order:state.order
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getOrderInfo,
    }, dispatch)
);
class Order extends React.Component {
    componentWillMount() {
        let applicationId = '12C094E7044F41EBB2E6BEA450DFD559'
        this.props.getOrderInfo(applicationId)
    }
    render() {
        return (
            <OrderCom {...this.props}/>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order)