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

export default class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectIndex:'基本信息',
            modalTitle:'',
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
            modalTitle:type,
            modalFlag:true
        })
    }
    cancel = () => {
        this.setState({
            modalFlag:false
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
                    <ApproveRemark />
                    {
                        this.state.modalFlag ?
                            <Modal>
                                <div className="modal-panel">
                                    <div className="modal-body">
                                        <p className="modal-info">
                                            是否确定"{this.state.modalTitle}"？
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <a className="cancel" onClick={this.cancel}>取消</a>
                                        <a onClick={this.cancel}>确定</a>
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