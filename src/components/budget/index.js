/**
 * Created by liangshuang on 18/5/25.
 */
import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import BugetApprove from './bugetApprove'
import BudgetChange from './bugetChange'
import ApproveRemark from '../approveRemark/approveRemark'
import Modal from '../modal/modal'

export default class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectIndex:'基本信息',
            modalInfo:'',
            modalFlag:false,
        }
    }
    handleClick = (type) => {
        this.setState({
            selectIndex:type
        })
    }
    handleConfrimClick = (type) => {
        this.setState({
            modalInfo:type,
            modalFlag:true
        })
    }
    cancel = () => {
        this.setState({
            modalFlag:false
        })
    }
    render() {

        const urlParms = this.props.match.params && this.props.match.params.item
        const headerTitle = urlParms==='change' ? '预算变更' : '预算申请'
        return (
            <div className="wrap index clearfix budget">
               <Header title={headerTitle} />
                <div className="main">
                    <div className="body scroll f-bt">
                        {
                            urlParms==='change' ? <BudgetChange /> : <BugetApprove />
                        }
                    </div>
                    {
                        this.state.modalFlag ?
                            <Modal>
                                <div className="modal-panel">
                                    <div className="modal-body">
                                        <textarea className="modal-info modal-text" placeholder="请输入审批意见，如无意见请按确定">

                                        </textarea>
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