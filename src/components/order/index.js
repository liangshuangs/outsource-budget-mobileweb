/**
 * Created by liangshuang on 18/5/25.
 */
import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Nav from '../nav/tag'
import BaseInfo from './baseInfo'
import PayInfo from './payInfo'
import Modal from '../modal/modal'
import ApproveRemark from '../approveRemark/approveRemark'
import {mixins} from '../../mixin/text'

export default class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectIndex:'基本信息',
            modalInfo:'',
            type:'',
            modalFlag:false,
        }
    }
    handleNavClick = (type) => {
        this.setState({
            selectIndex:type
        })
    }
    handleConfrimClick = (type) => {
        this.setState({
            modalFlag:true,
            type:type
        })
    }
    confrimClick = () => {
        let type = this.state.type
        let param = this._geturlPram(type)
        this.props.approve(param)
        this.cancel()
    }
    _geturlPram = (type) => {
        let options = this.state.modalInfo ? this.state.modalInfo : ''
        let url = this.props.url[0]
        let acceptBtnUrlPrams = ''
        if (type ==="同意") {
            acceptBtnUrlPrams = url.acceptBtnUrl.split('?')[1]
        }
        if (type ==="驳回") {
            acceptBtnUrlPrams = url.rejectBtnUrl.split('?')[1]
        }
        acceptBtnUrlPrams = `${acceptBtnUrlPrams}&rejectReason=${options}`
        return acceptBtnUrlPrams
    }
    cancel = () => {
        this.setState({
            modalFlag:false,
            modalInfo:'',
            type:''
        })
    }
    changetText = (e) => {
        let info = e.target.value
        this.setState({
            modalInfo:info
        })
    }
    render() {
        let data = this.props.data
        const navTitle = ['基本信息','技术合作支付信息']
        return (
            <div className="wrap index clearfix">
               <Header title="技术合作订单" />
                <Nav title = {navTitle} handleClick={this.handleNavClick}/>
                <div className="main">
                    <div className="body scroll f-bt">
                        {
                            this.state.selectIndex === '基本信息'? <BaseInfo data={this.props.data} /> : <PayInfo data={this.props.data} />
                        }
                    </div>
                    {
                        this.state.modalFlag ?
                            <Modal>
                                <div className="modal-panel">
                                    <div className="modal-body">
                                        <textarea className="modal-info modal-text" placeholder="请输入审批意见，如无意见请按确定" onChange={(e)=>this.changetText(e)}>
                                        </textarea>
                                    </div>
                                    <div className="modal-footer">
                                        <a className="cancel" onClick={this.cancel}>取消</a>
                                        <a onClick={this.confrimClick}>确定</a>
                                    </div>
                                </div>
                            </Modal> : null
                    }
                    <Footer confirmClick={this.handleConfrimClick}/>
                </div>
            </div>
        )
    }
}