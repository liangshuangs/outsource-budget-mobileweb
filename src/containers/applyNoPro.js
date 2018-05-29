/**
 * Created by liangshuang on 18/5/29.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ApplyNoProCom from '../components/applyOrderNoPro/index'
import {getApplayNoProInfo} from '../action/order'

const mapStateToProps = state => ({
    order:state.order
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getApplayNoProInfo
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
       // let applicationId = '01d75389-ca03-40c2-86af-b58cb27ec778'
        let applicationId = 'D7ABDAA143B64F969136921A51508074'
        this.props.getApplayNoProInfo(applicationId).then((res)=>{
            if (res && res.response && res.response[0].success === true) {
                let Data = JSON.parse(res.response[0].data)
                this.setState({
                    orderInfo:Data
                })
            }
        })
    }
    render() {
        return (
            <ApplyNoProCom data={this.state.orderInfo}/>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplyNoPro)