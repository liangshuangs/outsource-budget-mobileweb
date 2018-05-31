/**
 * Created by liangshuang on 18/5/29.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import OrderCom from '../components/order/index'
import {getOrderInfo,getUrl,approve} from '../action/order'

const mapStateToProps = state => ({
    order:state.order
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getOrderInfo,
        getUrl,
        approve,
    }, dispatch)
);
class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orderInfo:[],
            url:[]
        }
    }
    componentWillMount() {
        let applicationId = ''
        let targetTaskId = ''
        let quarms = window.location.search
        let quarmsArr = quarms.split("?")[1].split("&")
        quarmsArr.map(item=>{
            let itemArr = item.split("=")
            if (itemArr[0] === "applicationId") {
                applicationId = itemArr[1]
            }
            if (itemArr[0] === "targetTaskId") {
                targetTaskId = itemArr[1]
            }
        })
        //applicationId = '12C094E7044F41EBB2E6BEA450DFD559'
        this.props.getOrderInfo(applicationId).then((res)=>{
            if (res && res.response && res.response[0].success === true) {
                let Data = JSON.parse(res.response[0].data)
                this.setState({
                    orderInfo:Data
                })
            }
        })
       // targetTaskId = '74878639FE554A348C3AA1A311D905C2'
        this.props.getUrl(targetTaskId).then(res=>{
            if (res && res.response && res.response[0].success === true) {
                let url = JSON.parse(res.response[0].data)
                this.setState({
                    url:url
                })
            }
        })
    }
    render() {
        return (
            <OrderCom data={this.state.orderInfo} url={this.state.url} approve={this.props.approve}/>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order)