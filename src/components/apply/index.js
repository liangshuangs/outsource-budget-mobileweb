/**
 * Created by liangshuang on 18/5/25.
 */
import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Nav from '../nav/tag'
import Modal from '../modal/modal'
import Item from '../common/item'
import goBackApp from '../../utils/goBack'
import {applyProNav,orderNav} from '../common/navTitle'
import {orderBaseColumns,orderPayInfoColumns,OrderProBaseColumns,orderProClass1Columns,orderProClass2Columns,orderProTechColumns,OrderNoProBaseColumns} from '../common/columns'

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
        goBackApp()
    }
    _geturlPram = (type) => {
        let options = this.state.modalInfo ? this.state.modalInfo : ''
        let url = this.props.url[0]
        let acceptBtnUrlPrams = ''
        if (url && url.hasOwnProperty("acceptBtnUrl") && url.hasOwnProperty("rejectBtnUrl")) {
            if (type ==="同意") {
                acceptBtnUrlPrams = url.acceptBtnUrl.split('?')[1]
            }
            if (type ==="驳回") {
                acceptBtnUrlPrams = url.rejectBtnUrl.split('?')[1]
            }
        }else {
            console.log('获取URL失败')
            return
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
        let showBtn = this.props.url[0] && this.props.url[0].isShowBtn
        let palceHolder = this.state.type === '同意' ? '请输入审批意见，如无意见请按确定' : '请输入驳回意见，如无意见请按确定'
        const {data,path} = this.props
        let title= '技术合作申请单-项目类'
        let columns = []
        let navTitle = []
        if (path === '/apply/pro' || path === '/apply/nopro') {
            navTitle = applyProNav
            if (path === '/apply/pro') {
                title='技术合作申请单-项目类'
                if (this.state.selectIndex === '基本信息') {
                    columns =  OrderProBaseColumns
                }
                if (this.state.selectIndex === '合作种类、成本、利润') {
                    columns =  data[0] &&data[0].technicalCooperationParent === '2' ? orderProClass2Columns : orderProClass1Columns
                }
                if (this.state.selectIndex === '技术合作商') {
                    columns =  orderProTechColumns
                }
            }
            if (path === '/apply/nopro') {
                title = '技术合作申请单-非项目类'
                if (this.state.selectIndex === '基本信息') {
                    columns =  OrderNoProBaseColumns

                }
                if (this.state.selectIndex === '合作种类、成本、利润') {
                    columns =  data[0]&&data[0].technicalCooperationParent === '2' ? orderProClass2Columns : orderProClass1Columns
                }
                if (this.state.selectIndex === '技术合作商') {
                    columns =  orderProTechColumns
                }
            }
        }
        return (

            <div className="wrap index clearfix">
                <Header title={title} />
                <Nav title = {navTitle} handleClick={this.handleNavClick}/>
                <div className="main">
                    <div className="body scroll f-bt">
                        {
                            this.props.loading ?
                                <div className="loading">loading</div>
                                :  (data.length > 0 ?
                                <div>
                                    <Item data = {data[0]}  columns = {columns}/>
                                </div>
                                : null)
                        }

                    </div>
                    {
                        this.state.modalFlag ?
                            <Modal>
                                <div className="modal-panel">
                                    <div className="modal-body">
                                        <textarea className="modal-info modal-text" placeholder={palceHolder} onChange={(e)=>this.changetText(e)}>
                                        </textarea>
                                    </div>
                                    <div className="modal-footer">
                                        <a className="cancel" onClick={this.cancel}>取消</a>
                                        <a onClick={this.confrimClick}>确定</a>
                                    </div>
                                </div>
                            </Modal> : null
                    }
                    {
                        showBtn ?
                            <Footer confirmClick={this.handleConfrimClick}/>
                            : null
                    }
                </div>
            </div>
        )
    }
}
