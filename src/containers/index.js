/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import IndexCom from '../components/index/index'
import {getOrderInfo,getApplayProInfo,getApplayNoProInfo,getUserInfo,getUrl,approve} from '../action/order'
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
        getApplayNoProInfo,
        getUserInfo,
        getUrl,
        approve
    }, dispatch)
);

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            url:[],
            loading:true
        }
    }
    componentWillMount() {
        let applicationId = ''
        let targetTaskId = ''
        let postUrl = this.props.getOrderInfo
        let quarms = window.location.search
        if (quarms && quarms.includes('?') && quarms.includes('&')) {
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
        }
        let path = window.location.pathname
        if (path === '/order' ||path === '/') {
            postUrl = this.props.getOrderInfo
        }
        if (path === '/applypro') {
            postUrl = this.props.getApplayProInfo
        }
        if (path === '/applynopro') {
            postUrl = this.props.getApplayNoProInfo
        }
        //获取详情
        postUrl(applicationId).then((res)=>{
            if (res && res.response && res.response[0].success === true) {
                let dataList = JSON.parse(res.response[0].data)
                console.log(dataList)
                this.setState({
                    data:dataList
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
            <IndexCom data={this.state.data} url={this.state.url} approve={this.props.approve} loading={this.state.loading}/>
        )
    }
}
//export default Container
export default connect(mapStateToProps, mapDispatchToProps)(Container)