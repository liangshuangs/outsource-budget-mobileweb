/**
 * Created by liangshuang on 18/6/1.
 */

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Budget from '../components/budget/index'
import md5 from 'md5'
import {getApplayProInfo,approve,getUrl,getBudgetServerTime,getBudgetInfo} from '../action/order'

const mapStateToProps = state => ({
    budgetInfo:state.order.budgetInfo
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
            url:[],
            data:[],
            loading:true
        }
    }

    componentWillMount() {
        let projectId = ''
        let targetTaskId = ''
        let postUrl = this.props.getOrderInfo
        let quarms = window.location.search
        if (quarms && quarms.includes('?') && quarms.includes('&')) {
            let quarmsArr = quarms.split("?")[1].split("&")
            quarmsArr.map(item=>{
                let itemArr = item.split("=")
                if (itemArr[0] === "projectId") {
                    projectId = itemArr[1]
                }
                if (itemArr[0] === "targetTaskId") {
                    targetTaskId = itemArr[1]
                }
            })
        }
        let serverTime
        this.props.getBudgetServerTime().then(res => {
            if (res && res.response &&res.response.result === "000000") {

                serverTime = res.response.code
            }
            if (serverTime){
                let key = serverTime + 'BudgetNew' + 'djk*3k@-3_31'
                key = md5(key)
                let params = `key=${key}&projectId=${projectId}`
                this.props.getBudgetInfo(params).then(res=>{
                    this.setState({
                        data:res.response
                    })
                })
            }
            this.setState({
                loading:false
            })
        })
        //获取URL
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
            <Budget data={this.state.data} path={this.props.location.pathname} url={this.state.url} approve={this.props.approve} loading={this.state.loading}/>

        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BudgetCom)