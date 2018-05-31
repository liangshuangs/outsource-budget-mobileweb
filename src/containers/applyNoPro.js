/**
 * Created by liangshuang on 18/5/29.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ApplyNoProCom from '../components/applyOrderNoPro/index'
import {getApplayNoProInfo,getUrl,approve} from '../action/order'

const mapStateToProps = state => ({
    order:state.order
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getApplayNoProInfo,
        getUrl,
        approve
    }, dispatch)
);
class ApplyNoPro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orderInfo:[]
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
       // let applicationId = '01d75389-ca03-40c2-86af-b58cb27ec778'
        //let applicationId = 'D7ABDAA143B64F969136921A51508074'
        this.props.getApplayNoProInfo(applicationId).then((res)=>{
            if (res && res.response && res.response[0].success === true) {
                let Data = JSON.parse(res.response[0].data)
                this.setState({
                    orderInfo:Data
                })
            }
        })
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
            <ApplyNoProCom data={this.state.orderInfo} url={this.state.url} approve={this.props.approve}/>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplyNoPro)