/**
 * Created by liangshuang on 18/5/29.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ApplyProCom from '../components/applyOrderPro/index'
import {getApplayProInfo} from '../action/order'

const mapStateToProps = state => ({
    order:state.order
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getApplayProInfo
    }, dispatch)
);
class ApplyNoPro extends React.Component {
    componentWillMount() {
        let applicationId = '12C094E7044F41EBB2E6BEA450DFD559'
        this.props.getApplayProInfo(applicationId)
    }
    render() {
        return (
            <ApplyProCom {...this.props}/>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplyNoPro)