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
    componentWillMount() {
        let applicationId = '12C094E7044F41EBB2E6BEA450DFD559'
        this.props.getApplayNoProInfo(applicationId)
    }
    render() {
        return (
            <ApplyNoProCom {...this.props}/>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplyNoPro)