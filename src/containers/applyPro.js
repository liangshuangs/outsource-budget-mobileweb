/**
 * Created by liangshuang on 18/5/29.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ApplyProCom from '../components/applyOrderPro/index'
import {getApplayProInfo,approve,getUrl} from '../action/order'

const mapStateToProps = state => ({
    order:state.order
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getApplayProInfo,
        approve,
        getUrl
    }, dispatch)
);
class ApplyPro extends React.Component {
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
        //let applicationId = '58DEA25B05E743E58144C954DB80F918'
       // let applicationId = '27301CCBDE5246A7B98B2266C839DAAB'
        this.props.getApplayProInfo(applicationId).then((res)=>{
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
            <ApplyProCom data={this.state.orderInfo} url={this.state.url} approve={this.props.approve}/>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplyPro)